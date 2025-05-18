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

1. Clona el repositorio:
   
   En el cmd o powershell:
   
   git clone [url-del-repositorio]
   
   cd [directorio-del-proyecto]

## Uso Básico
1. Modificar el input
   
![image](https://github.com/user-attachments/assets/7503fcac-d658-43e0-b6c2-23ad8c81b5c1)

Edita el archivo input.txt con tu código:(Ejemplo)

a = 10;

b = 20;

resultado = a + b;

console.log(resultado);

mensaje = vHolaMundov;

console.log(mensaje);

Así deberia quedar:

![image](https://github.com/user-attachments/assets/adb49889-29d6-4357-9d89-83ca955426f8)

2. Ejecutar el analizador en la terminal del Visual Studio node index.js

   ![image](https://github.com/user-attachments/assets/11f0468a-ae23-4bbd-9edd-7461d16937af)

El programa mostrará:
1.Tabla de tokens/lexemas

2.Árbol de derivación

3.Los resultados que devuelve dados por el intérprete

4.Errores de sintaxis (si existen)

Ejemplo de como debería salir:

![image](https://github.com/user-attachments/assets/b5193adc-2a3e-4b5e-8fd6-d27f61242fa7)

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


Puse estos ejemplos ya que mi tema no tiene ejemplos para probar.

![image](https://github.com/user-attachments/assets/79a29d18-5718-41e0-b93b-69a0faef64a6)











