import NuevoVisitor from './generated/NuevoVisitor.js';
import NuevoParser from './generated/NuevoParser.js';

export class CustomNuevoVisitor extends NuevoVisitor {
    constructor() {
        super();
        this.variables = new Map();  // Almacén de variables
        this.jsCode = [];           // Acumula el código JavaScript generado
        this.output = [];           // Para capturar resultados de impresión
    }

    // Devuelve el código JavaScript generado
    getGeneratedCode() {
        return this.jsCode.join('\n');
    }

    visitProgram(ctx) {
        this.jsCode.push('// Código generado automáticamente');
        this.visitChildren(ctx);
        return this.getGeneratedCode();
    }

    visitDeclaracion(ctx) {
        const varName = this.visit(ctx.nombre());
        let jsLine = `let ${varName}`;
        
        if (ctx.valor()) {
            const value = this.visit(ctx.valor());
            jsLine += ` = ${value}`;
            this.variables.set(varName, value);
        }
        
        jsLine += ';';
        this.jsCode.push(jsLine);
    }

    visitFuncion(ctx) {
        const funcName = this.visit(ctx.nombre());
        let params = '';
        
        if (ctx.argumentos()) {
            params = this.visit(ctx.argumentos());
        }
        
        this.jsCode.push(`function ${funcName}(${params}) {`);
        
        if (ctx.instrucciones()) {
            ctx.instrucciones().forEach(inst => this.visit(inst));
        }
        
        this.jsCode.push('}');
    }

    visitEjecucion(ctx) {
        const funcName = this.visit(ctx.nombre());
        let args = '';
        
        if (ctx.parametros()) {
            args = this.visit(ctx.parametros());
        }
        
        this.jsCode.push(`${funcName}(${args});`);
    }

    visitOperacion_texto(ctx) {
        const varName = this.visit(ctx.variable());
        const transformation = ctx.transformacion().getText();
        const textValue = this.visit(ctx.cadena());
        
        let jsExpr;
        switch(transformation) {
            case 'mayusculas':
                jsExpr = `${textValue}.toUpperCase()`;
                break;
            case 'minusculas':
                jsExpr = `${textValue}.toLowerCase()`;
                break;
            case 'longitud':
                jsExpr = `${textValue}.length`;
                break;
            case 'invertir':
                jsExpr = `${textValue}.split('').reverse().join('')`;
                break;
            case 'reemplazar':
                jsExpr = `${textValue}.replace(/old/g, 'new')`; // Ejemplo básico
                break;
            default:
                jsExpr = textValue;
        }
        
        this.jsCode.push(`${varName} = ${jsExpr};`);
        this.variables.set(varName, jsExpr);
    }

    visitImpresion(ctx) {
        const value = this.visit(ctx.valor());
        this.jsCode.push(`console.log(${value});`);
        this.output.push(value);
    }

    visitRetorno(ctx) {
        const value = this.visit(ctx.valor());
        this.jsCode.push(`return ${value};`);
    }

    visitValor(ctx) {
        if (ctx.TEXTO()) {
            return ctx.TEXTO().getText(); // Conserva las comillas
        } else if (ctx.numero()) {
            return this.visit(ctx.numero());
        } else if (ctx.variable()) {
            const varName = this.visit(ctx.variable());
            return varName; // Solo el nombre para uso en JS
        }
        return 'null';
    }

    visitNumero(ctx) {
        if (ctx.NUMERO()) {
            return ctx.NUMERO().getText();
        } else if (ctx.NUMERO_DECIMAL()) {
            return ctx.NUMERO_DECIMAL().getText();
        }
        return '0';
    }

    visitNombre(ctx) {
        return ctx.getText();
    }

    visitVariable(ctx) {
        return ctx.getText();
    }

    visitCadena(ctx) {
        if (ctx.TEXTO()) {
            return ctx.TEXTO().getText(); // Con comillas
        } else if (ctx.variable()) {
            const varName = this.visit(ctx.variable());
            return varName; // Solo el nombre para uso en JS
        }
        return '""';
    }

   visitArgumentos(ctx) {
    if (!ctx.variable()) return '';
    return ctx.variable().map(v => this.visit(v)).join(', ');
}

    visitParametros(ctx) {
        return ctx.valor().map(v => this.visit(v)).join(', ');
    }

    visitConcatenar(ctx) {
        const varName = this.visit(ctx.variable());
        const left = this.visit(ctx.cadena(0));
        const right = this.visit(ctx.cadena(1));
        this.jsCode.push(`${varName} = ${left} + ${right};`);
    }
}