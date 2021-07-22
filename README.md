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

### Void y Never

- `void` se utiliza para identificar funciones que terminan y no retornan algún valor; y `never` es una función que nunca termina y no da algún retorno.

- `void `podría ser usado en una función que temina solo haciendo el log de la info de un usuario.

- `never` podría ser usado en una función que cada x tiempo esta mandando estadisticas de la app. Por lo que nunca termina.


###UNION DE TIPOS ALIAS Y TIPOS LITERALES

**Unión de tipos**
Permite el uso de uno o más tipos. Para unir tipos, se usa el caracter |
Ejemplo:
let userId: string | number;

**Alias**
Sirven para definir un tipo de dato con nombre personalizado. Se usa la palabra reservada type
Ejemplo:
type userId = string | number;
let myUserId: userId;

**Tipos literales**
Permiten definir rápidamente una serie de elementos constantes, se pueden usar con strings, numbers o booleanos.
Ejemplo:
let tileSize: 8 | 16 | 32;
let squareSize: ‘200x200’ | ‘500x500’ | ‘1000x1000’