# Analizador de Gramática

Herramienta para analizar código según la gramática , implementada con ANTLR4.

## Características de la Gramática

- **Variables**: Identificadores alfanuméricos (`a`, `var_1`)
- **Números**: Enteros positivos (`10`, `123`)
- **Strings**: Delimitados por `v` (`vHolaMundov`)
- **Operadores**: `+`, `-`, `*`, `/`
- **Estructuras**: `switch-case-default`
- **Salida**: `console.log()`

## Requisitos

1. Node.js (v16+)
2. npm (incluido con Node.js)
3. Java Runtime (JRE) para ANTLR4
4. Visual Studio

## Configuración Inicial

En el cmd o powershell:

1. Clona el repositorio:
   
   git clone https://github.com/Facuescu2005/51969.git
   
2. Entra al directorio donde esta el proyecto:

   cd 51969

3. Abre VS Code para trabajar con el código del proyecto

   code .

   ![image](https://github.com/user-attachments/assets/37d7067e-f30f-4f45-9842-151bd6fc6119)

   Ahora deberia estar adentro de visual studio con el proyecto abierto

## Uso Básico
1. Modificar el input
   
![image](https://github.com/user-attachments/assets/7503fcac-d658-43e0-b6c2-23ad8c81b5c1)

Edita el archivo input.txt con tu código:(Ejemplo)

nombre = vJuanv;

console.log(nombre);

switch (5) {

    case 5:
    
        mensaje = vHolamundov;
        
        console.log(mensaje);
        
    default:
    
        console.log(vAdiosv);
        
}

Así deberia quedar:

![image](https://github.com/user-attachments/assets/510de601-524f-45c0-886a-e7b921614f9c)

2. Ejecutar el analizador en la terminal del Visual Studio node index.js

   ![image](https://github.com/user-attachments/assets/11f0468a-ae23-4bbd-9edd-7461d16937af)

El programa mostrará:

1.Tabla de tokens/lexemas

2.Árbol de derivación

3.Los resultados que devuelve dados por el intérprete

4.Errores de sintaxis (si existen)

Ejemplo de como debería salir:

![image](https://github.com/user-attachments/assets/473cb042-4b16-4411-9dfb-435484704728)
![image](https://github.com/user-attachments/assets/41b170ca-b85f-4a15-9e8a-5444cf2c6bbb)



Puedes probar otros códigos válidos como:

nombre = vJuanv;

apellido = vPerezv;

nombre_completo = nombre + v_v + apellido;

console.log(nombre_completo);

------------------------------------
x = 5;

y = 3;

suma = x + y;

resta = x - y;

multiplicacion = x * y;

division = x / y;

console.log(suma);

console.log(resta);

console.log(multiplicacion);

console.log(division);

----------------------------------
a = 10;

b = 5;

c = 2;

resultado = (a + b) * c - (b / c);

console.log(resultado);

---------------------------------


Puse estos ejemplos ya que mi tema no tiene ejemplos para probar.

![image](https://github.com/user-attachments/assets/79a29d18-5718-41e0-b93b-69a0faef64a6)











