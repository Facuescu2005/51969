import MessiLexer from "./generated/MessiLexer.js";
import MessiParser from "./generated/MessiParser.js";
import { CustomMessiListener } from "./CustomMessiListener.js";
import { CustomMessiVisitor } from "./CustomMessiVisitor.js";
import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import readline from 'readline';
import fs from 'fs';
class Interpreter extends CustomMessiVisitor {
    constructor() {
        super();
        this.variables = {};
        this.output = [];
    }

    visitAssignmentStatement(ctx) {
        const varName = ctx.Identifier().getText();
        const value = this.visitExpression(ctx.expression());
        this.variables[varName] = value;
        return value;
    }

    visitConsoleStatement(ctx) {
        const value = this.visitExpression(ctx.expression());
        this.output.push(value);
        console.log(value);
        return value;
    }
    
    visitSwitchStatement(ctx) {
        const value = this.visitExpression(ctx.expression());
    let caseMatched = false;
    let executingCase = false;

    // Procesar todos los case clauses
    if (ctx.caseClause()) {
        for (const caseCtx of ctx.caseClause()) {
            const caseValue = this.visitExpression(caseCtx.expression());
            
            // Comenzar ejecución si encontramos coincidencia o ya estamos ejecutando (fall-through)
            if (caseValue === value || executingCase) {
                caseMatched = true;
                executingCase = true;
                this.visitChildren(caseCtx);
                // No hay break para permitir fall-through
            }
        }
    }

    // Ejecutar default si no hubo coincidencia o si hubo fall-through hasta el final
    if ((!caseMatched || executingCase) && ctx.defaultClause()) {
        this.visitChildren(ctx.defaultClause());
    }
}

    visitExpression(ctx) {
        if (ctx.term().length === 1) {
        return this.visitTerm(ctx.term(0));
    }
    
    let result = this.visitTerm(ctx.term(0));
    
    // Obtener los operadores del contexto
    for (let i = 1; i < ctx.term().length; i++) {
        // Asumiendo que los operadores están en los hijos impares
        const operator = ctx.children[i * 2 - 1].getText();
        const term = this.visitTerm(ctx.term(i));
        
        switch (operator) {
            case '+': 
                result += term; 
                break;
            case '-': 
                result -= term; 
                break;
            case '*': 
                result *= term; 
                break;
            case '/': 
                if (term === 0) throw new Error("División por cero");
                result /= term; 
                break;
            default:
                throw new Error(`Operador desconocido: ${operator}`);
        }
    }
    
    return result;
}

    visitTerm(ctx) {
    const text = ctx.getText();
    if (text.startsWith('v') && text.endsWith('v') && text.length > 1) {
        return text.slice(1, -1); // Elimina las 'v' delimitadoras
    }
    
    if (ctx.Identifier()) {
        const varName = ctx.Identifier().getText();
        if (!(varName in this.variables)) {
            throw new Error(`Variable no definida: ${varName}`);
        }
        return this.variables[varName];
    } 
    else if (ctx.Number()) {
        return parseInt(ctx.Number().getText());
    } 
    else if (ctx.expression()) {
        return this.visitExpression(ctx.expression());
    }
    throw new Error("Término no reconocido: " + ctx.getText());
}
}
    // Añade los demás métodos (visitSwitchStatement, visitExpression, visitTerm)
    // que te mostré en la respuesta anterior

async function main() {
    let input;

    // Intento leer la entrada desde el archivo input - en forma sincrona.
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        // Si no es posible leer el archivo, solicitar la entrada del usuario por teclado
        input = await leerCadena(); // Simula lectura síncrona
        console.log(input);
    }

    // Proceso la entrada con el analizador e imprimo el arbol de analisis en formato texto
    let inputStream = CharStreams.fromString(input);
    let lexer = new MessiLexer(inputStream);
    

    //Verificar si el lexer está generando tokens 
    console.log("Verificando tokens generados por el lexer...");
    const tokens = lexer.getAllTokens();
    if (tokens.length === 0) {
        console.error("No se generaron tokens. Verifica la entrada y la gramática.");
        return;
    }

    //Mostrar la tabla de tokens y lexemas
    console.log("\nTabla de Tokens y Lexemas:");
    console.log("--------------------------------------------------");
    console.log("| Lexema         | Token                         |");
    console.log("--------------------------------------------------");
    const UNKNOWN = "UNKNOWN";

    // Recorrer todos los tokens generados por el lexer
    for (let token of tokens) {
        // Obtener el nombre simbólico del token

        let tokenType;

        const text = token.text;
        
        // Clasificación manual basada en la gramática
        if (text.startsWith('v') && text.endsWith('v')) {
            tokenType = "StringLiteral";
        } else if (/^[a-zA-Z_]/.test(text)) {
            tokenType = "Identifier";
        } else if (/^[0-9]+$/.test(text)) {
            tokenType = "Number";
        } else {
            tokenType = "Symbol";
        }


        const lexema = token.text; // Obtener el lexema (texto del token)
        console.log(`| ${String(lexema).padEnd(14)} | ${String(tokenType).padEnd(30)} |`);
    }
    console.log("--------------------------------------------------"); 

    /* Vuelve a procesar la entrada, obtener el lexer, el código tokenizado y el parser 
     
    Es necesario volver a procesar la entrada porque la función getAllTokens() consume
    todos los tokens reconocidos y vacía el lexer. */
    inputStream = CharStreams.fromString(input);
    lexer = new MessiLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new MessiParser(tokenStream);
    let tree = parser.program();

    
    // Verifico si se produjeron errores
    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } 
    else {
        console.log("\nEntrada válida.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${cadena_tree}`);

        // Utilizo un listener y un walker para recorrer el arbol e indicar cada vez que reconoce una sentencia (stat)
        //const listener = new CustomCalculatorListener();
        // ParseTreeWalker.DEFAULT.walk(listener, tree);

        // Utilizo un visitor para visitar los nodos que me interesan de mi arbol
        const interpreter = new Interpreter();
    interpreter.visit(tree);

// Mostrar resultados de la interpretación
console.log("\n=== Resultados de la interpretación ===");
console.log("Salida del programa:", interpreter.output);
console.log("Variables finales:", interpreter.variables); 
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}


// Ejecuta la función principal
main();
