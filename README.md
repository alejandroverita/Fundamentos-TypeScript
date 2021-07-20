# CURSO DE TYPESCRIPT

### CONFIGURACION DE TYPESCRIPT
Podemos configurar nuestro compilador con el archivo `“tsconfig.json”`.

- Especifica la raíz de un proyecto TypeScript
- Permite configurar opciones para el compilador
- Para generar el archivo escribimos `tsc --init`
- El archivo generado vendrá muy bien documentado para saber qué es lo que hace cada configuración.

Podemos usar de 3 formas diferentes el TSC:

- `tsc` -> Busca la configuración
- `tsc --project platzi `-> Especifica un directorio que contiene la configuración
- `tsc file.ts` -> Omite la configuración

Compile on save, es tener en cuenta el comando `tsc --watch`

### MI PRIMER PROYECTO TYPESCRIPT

- Ir al archivo tsconfig.json
- Descomentar la linea "outDir":"./"
- Agregar a la linea anterior el directorio dist: `"outDir": "./dist",`
- Compilar con `tsc`
- Invocar al motor de Node acceder al directorio dist y al archivo para ejecutarlo: `node dist/hello.js`

### TIPADO EN TYPESCRIPT

- Explícito: Define una sintaxis para la creación de variables con tipo de datos.
- Inferido: TypeScript tiene la habilidad de “deducir” el tipo de función de un valor.
- Tipado explícito -> `mi_variable : Int`
- Tipado implícito ->` mi_variable = 5`

**Datos primitivos**

Number, boolean, string, array, tupla, enum, any, void, null, undefinded, never, object