grammar Nuevo;

// Tokens explícitos (deben ir primero)
VARIABLE: 'variable';
FUNCION: 'funcion';
EJECUTAR: 'ejecutar';
DEVOLVER: 'devolver';
IMPRIMIR: 'imprimir';
MAYUSCULAS: 'mayusculas';
MINUSCULAS: 'minusculas';
LONGITUD: 'longitud';
INVERTIR: 'invertir';
REEMPLAZAR: 'reemplazar';

// Tokens para símbolos literales
IGUAL: '=';
PUNTO_COMA: ';';
LLAVE_IZQ: '{';
LLAVE_DER: '}';
PAREN_IZQ: '(';
PAREN_DER: ')';
COMA: ',';
MAS: '+';
MENOS: '-';
MULT: '*';
DIV: '/';
// Reglas léxicas
ID: [a-zA-Z_][a-zA-Z0-9_]*;
NUMERO: [0-9]+;
NUMERO_DECIMAL: [0-9]+ '.' [0-9]+;
TEXTO: '"' (~["\\\r\n] | '\\' .)* '"';
WS: [ \t\r\n]+ -> skip;

// Reglas sintácticas
program: (declaracion|funcion|ejecucion)*EOF;

declaracion: VARIABLE nombre (IGUAL valor)? PUNTO_COMA;

funcion: FUNCION nombre (PAREN_IZQ argumentos? PAREN_DER)? LLAVE_IZQ instrucciones* LLAVE_DER;

ejecucion: EJECUTAR nombre (PAREN_IZQ parametros? PAREN_DER)? PUNTO_COMA;  

argumentos: variable (COMA variable)*;

parametros: valor (COMA valor)*;

instrucciones: operacion_texto | impresion | retorno | concatenar;

operacion_texto: variable IGUAL transformacion LLAVE_IZQ cadena LLAVE_DER PUNTO_COMA;

transformacion: MAYUSCULAS | MINUSCULAS | LONGITUD | INVERTIR | REEMPLAZAR;

concatenar: variable IGUAL cadena MAS cadena PUNTO_COMA;

impresion: IMPRIMIR LLAVE_IZQ valor LLAVE_DER PUNTO_COMA;

retorno: DEVOLVER valor PUNTO_COMA;

valor: TEXTO | numero | variable | transformacion LLAVE_IZQ cadena LLAVE_DER;

cadena: TEXTO | variable;

nombre: ID;
variable: ID;
numero: NUMERO | NUMERO_DECIMAL;