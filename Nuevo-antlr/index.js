import NuevoLexer from "./generated/NuevoLexer.js";
import NuevoParser from "./generated/NuevoParser.js";
import { CustomNuevoVisitor } from "./CustomNuevoVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        input = await leerCadena();
    }

    // Crear el flujo de entrada y el lexer
    const inputStream = CharStreams.fromString(input);
    const lexer = new NuevoLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);

    // Mostrar tabla de tokens
    mostrarTablaTokens(tokenStream);

    //RemoverErrores
    lexer.removeErrorListeners();
    lexer.addErrorListener({
    syntaxError: (recognizer, offendingSymbol, line, column, msg, e) => {
        console.error(`ERROR en L${line}:C${column}`);
        console.error(`Token inesperado: '${offendingSymbol.text}'`);
        console.error(`Tokens esperados: ${msg}`);
    }
});

    // Crear el parser
    const parser = new NuevoParser(tokenStream);
    parser.buildParseTrees = true;

    // Parsear la entrada
    const tree = parser.program();

    if (parser._syntaxErrors > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
        return;
    }

    console.log("\nEntrada válida.");

    // Mostrar árbol de derivación básico
    const arbolDerivacion = tree.toStringTree(parser.ruleNames);
    console.log(`\nÁrbol de derivación:\n${arbolDerivacion}`);

    // Solo una visita al árbol con el visitor
    const visitor = new CustomNuevoVisitor();
    const generatedJS = visitor.visit(tree); 

    console.log("\nCódigo JavaScript generado:");
    console.log(generatedJS);


}

function mostrarTablaTokens(tokenStream) {
    tokenStream.fill();
    const tokens = tokenStream.tokens;

    console.log("\nTabla de Tokens y Lexemas:");
    console.log("--------------------------------------------------");
    console.log("| Lexema         | Token                         |");
    console.log("--------------------------------------------------");

    tokens.forEach(token => {
        if (token.type === -1) return;
        const tokenType = NuevoLexer.symbolicNames[token.type] || `T_${token.type}`;
        const lexema = token.text.length > 15 ?
            token.text.substring(0, 12) + "..." :
            token.text.padEnd(15);
        console.log(`| ${lexema} | ${tokenType.padEnd(30)} |`);
    });

    console.log("--------------------------------------------------");
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese el código a analizar: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main().catch(err => console.error("Error:", err));