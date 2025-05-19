// Generated from c:/Users/Usuario/Nuevo/Nuevo.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import NuevoListener from './NuevoListener.js';
import NuevoVisitor from './NuevoVisitor.js';

const serializedATN = [4,1,26,151,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,1,0,1,0,5,0,38,8,0,10,0,12,0,
41,9,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,49,8,1,1,1,1,1,1,2,1,2,1,2,1,2,3,2,57,
8,2,1,2,3,2,60,8,2,1,2,1,2,5,2,64,8,2,10,2,12,2,67,9,2,1,2,1,2,1,3,1,3,1,
3,1,3,3,3,75,8,3,1,3,3,3,78,8,3,1,3,1,3,1,4,1,4,1,4,5,4,85,8,4,10,4,12,4,
88,9,4,1,5,1,5,1,5,5,5,93,8,5,10,5,12,5,96,9,5,1,6,1,6,1,6,1,6,3,6,102,8,
6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,
10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,
1,12,1,12,1,12,3,12,139,8,12,1,13,1,13,3,13,143,8,13,1,14,1,14,1,15,1,15,
1,16,1,16,1,16,0,0,17,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,0,2,
1,0,6,10,1,0,23,24,151,0,39,1,0,0,0,2,44,1,0,0,0,4,52,1,0,0,0,6,70,1,0,0,
0,8,81,1,0,0,0,10,89,1,0,0,0,12,101,1,0,0,0,14,103,1,0,0,0,16,111,1,0,0,
0,18,113,1,0,0,0,20,120,1,0,0,0,22,126,1,0,0,0,24,138,1,0,0,0,26,142,1,0,
0,0,28,144,1,0,0,0,30,146,1,0,0,0,32,148,1,0,0,0,34,38,3,2,1,0,35,38,3,4,
2,0,36,38,3,6,3,0,37,34,1,0,0,0,37,35,1,0,0,0,37,36,1,0,0,0,38,41,1,0,0,
0,39,37,1,0,0,0,39,40,1,0,0,0,40,42,1,0,0,0,41,39,1,0,0,0,42,43,5,0,0,1,
43,1,1,0,0,0,44,45,5,1,0,0,45,48,3,28,14,0,46,47,5,11,0,0,47,49,3,24,12,
0,48,46,1,0,0,0,48,49,1,0,0,0,49,50,1,0,0,0,50,51,5,12,0,0,51,3,1,0,0,0,
52,53,5,2,0,0,53,59,3,28,14,0,54,56,5,15,0,0,55,57,3,8,4,0,56,55,1,0,0,0,
56,57,1,0,0,0,57,58,1,0,0,0,58,60,5,16,0,0,59,54,1,0,0,0,59,60,1,0,0,0,60,
61,1,0,0,0,61,65,5,13,0,0,62,64,3,12,6,0,63,62,1,0,0,0,64,67,1,0,0,0,65,
63,1,0,0,0,65,66,1,0,0,0,66,68,1,0,0,0,67,65,1,0,0,0,68,69,5,14,0,0,69,5,
1,0,0,0,70,71,5,3,0,0,71,77,3,28,14,0,72,74,5,15,0,0,73,75,3,10,5,0,74,73,
1,0,0,0,74,75,1,0,0,0,75,76,1,0,0,0,76,78,5,16,0,0,77,72,1,0,0,0,77,78,1,
0,0,0,78,79,1,0,0,0,79,80,5,12,0,0,80,7,1,0,0,0,81,86,3,30,15,0,82,83,5,
17,0,0,83,85,3,30,15,0,84,82,1,0,0,0,85,88,1,0,0,0,86,84,1,0,0,0,86,87,1,
0,0,0,87,9,1,0,0,0,88,86,1,0,0,0,89,94,3,24,12,0,90,91,5,17,0,0,91,93,3,
24,12,0,92,90,1,0,0,0,93,96,1,0,0,0,94,92,1,0,0,0,94,95,1,0,0,0,95,11,1,
0,0,0,96,94,1,0,0,0,97,102,3,14,7,0,98,102,3,20,10,0,99,102,3,22,11,0,100,
102,3,18,9,0,101,97,1,0,0,0,101,98,1,0,0,0,101,99,1,0,0,0,101,100,1,0,0,
0,102,13,1,0,0,0,103,104,3,30,15,0,104,105,5,11,0,0,105,106,3,16,8,0,106,
107,5,13,0,0,107,108,3,26,13,0,108,109,5,14,0,0,109,110,5,12,0,0,110,15,
1,0,0,0,111,112,7,0,0,0,112,17,1,0,0,0,113,114,3,30,15,0,114,115,5,11,0,
0,115,116,3,26,13,0,116,117,5,18,0,0,117,118,3,26,13,0,118,119,5,12,0,0,
119,19,1,0,0,0,120,121,5,5,0,0,121,122,5,13,0,0,122,123,3,24,12,0,123,124,
5,14,0,0,124,125,5,12,0,0,125,21,1,0,0,0,126,127,5,4,0,0,127,128,3,24,12,
0,128,129,5,12,0,0,129,23,1,0,0,0,130,139,5,25,0,0,131,139,3,32,16,0,132,
139,3,30,15,0,133,134,3,16,8,0,134,135,5,13,0,0,135,136,3,26,13,0,136,137,
5,14,0,0,137,139,1,0,0,0,138,130,1,0,0,0,138,131,1,0,0,0,138,132,1,0,0,0,
138,133,1,0,0,0,139,25,1,0,0,0,140,143,5,25,0,0,141,143,3,30,15,0,142,140,
1,0,0,0,142,141,1,0,0,0,143,27,1,0,0,0,144,145,5,22,0,0,145,29,1,0,0,0,146,
147,5,22,0,0,147,31,1,0,0,0,148,149,7,1,0,0,149,33,1,0,0,0,13,37,39,48,56,
59,65,74,77,86,94,101,138,142];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class NuevoParser extends antlr4.Parser {

    static grammarFileName = "Nuevo.g4";
    static literalNames = [ null, "'variable'", "'funcion'", "'ejecutar'", 
                            "'devolver'", "'imprimir'", "'mayusculas'", 
                            "'minusculas'", "'longitud'", "'invertir'", 
                            "'reemplazar'", "'='", "';'", "'{'", "'}'", 
                            "'('", "')'", "','", "'+'", "'-'", "'*'", "'/'" ];
    static symbolicNames = [ null, "VARIABLE", "FUNCION", "EJECUTAR", "DEVOLVER", 
                             "IMPRIMIR", "MAYUSCULAS", "MINUSCULAS", "LONGITUD", 
                             "INVERTIR", "REEMPLAZAR", "IGUAL", "PUNTO_COMA", 
                             "LLAVE_IZQ", "LLAVE_DER", "PAREN_IZQ", "PAREN_DER", 
                             "COMA", "MAS", "MENOS", "MULT", "DIV", "ID", 
                             "NUMERO", "NUMERO_DECIMAL", "TEXTO", "WS" ];
    static ruleNames = [ "program", "declaracion", "funcion", "ejecucion", 
                         "argumentos", "parametros", "instrucciones", "operacion_texto", 
                         "transformacion", "concatenar", "impresion", "retorno", 
                         "valor", "cadena", "nombre", "variable", "numero" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = NuevoParser.ruleNames;
        this.literalNames = NuevoParser.literalNames;
        this.symbolicNames = NuevoParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, NuevoParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0)) {
	            this.state = 37;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 1:
	                this.state = 34;
	                this.declaracion();
	                break;
	            case 2:
	                this.state = 35;
	                this.funcion();
	                break;
	            case 3:
	                this.state = 36;
	                this.ejecucion();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 42;
	        this.match(NuevoParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, NuevoParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(NuevoParser.VARIABLE);
	        this.state = 45;
	        this.nombre();
	        this.state = 48;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 46;
	            this.match(NuevoParser.IGUAL);
	            this.state = 47;
	            this.valor();
	        }

	        this.state = 50;
	        this.match(NuevoParser.PUNTO_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcion() {
	    let localctx = new FuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, NuevoParser.RULE_funcion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(NuevoParser.FUNCION);
	        this.state = 53;
	        this.nombre();
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 54;
	            this.match(NuevoParser.PAREN_IZQ);
	            this.state = 56;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===22) {
	                this.state = 55;
	                this.argumentos();
	            }

	            this.state = 58;
	            this.match(NuevoParser.PAREN_DER);
	        }

	        this.state = 61;
	        this.match(NuevoParser.LLAVE_IZQ);
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4194352) !== 0)) {
	            this.state = 62;
	            this.instrucciones();
	            this.state = 67;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 68;
	        this.match(NuevoParser.LLAVE_DER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ejecucion() {
	    let localctx = new EjecucionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, NuevoParser.RULE_ejecucion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.match(NuevoParser.EJECUTAR);
	        this.state = 71;
	        this.nombre();
	        this.state = 77;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 72;
	            this.match(NuevoParser.PAREN_IZQ);
	            this.state = 74;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 62916544) !== 0)) {
	                this.state = 73;
	                this.parametros();
	            }

	            this.state = 76;
	            this.match(NuevoParser.PAREN_DER);
	        }

	        this.state = 79;
	        this.match(NuevoParser.PUNTO_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentos() {
	    let localctx = new ArgumentosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, NuevoParser.RULE_argumentos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.variable();
	        this.state = 86;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17) {
	            this.state = 82;
	            this.match(NuevoParser.COMA);
	            this.state = 83;
	            this.variable();
	            this.state = 88;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametros() {
	    let localctx = new ParametrosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, NuevoParser.RULE_parametros);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.valor();
	        this.state = 94;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17) {
	            this.state = 90;
	            this.match(NuevoParser.COMA);
	            this.state = 91;
	            this.valor();
	            this.state = 96;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, NuevoParser.RULE_instrucciones);
	    try {
	        this.state = 101;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 97;
	            this.operacion_texto();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 98;
	            this.impresion();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 99;
	            this.retorno();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 100;
	            this.concatenar();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operacion_texto() {
	    let localctx = new Operacion_textoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, NuevoParser.RULE_operacion_texto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this.variable();
	        this.state = 104;
	        this.match(NuevoParser.IGUAL);
	        this.state = 105;
	        this.transformacion();
	        this.state = 106;
	        this.match(NuevoParser.LLAVE_IZQ);
	        this.state = 107;
	        this.cadena();
	        this.state = 108;
	        this.match(NuevoParser.LLAVE_DER);
	        this.state = 109;
	        this.match(NuevoParser.PUNTO_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	transformacion() {
	    let localctx = new TransformacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, NuevoParser.RULE_transformacion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1984) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	concatenar() {
	    let localctx = new ConcatenarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, NuevoParser.RULE_concatenar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.variable();
	        this.state = 114;
	        this.match(NuevoParser.IGUAL);
	        this.state = 115;
	        this.cadena();
	        this.state = 116;
	        this.match(NuevoParser.MAS);
	        this.state = 117;
	        this.cadena();
	        this.state = 118;
	        this.match(NuevoParser.PUNTO_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	impresion() {
	    let localctx = new ImpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, NuevoParser.RULE_impresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.match(NuevoParser.IMPRIMIR);
	        this.state = 121;
	        this.match(NuevoParser.LLAVE_IZQ);
	        this.state = 122;
	        this.valor();
	        this.state = 123;
	        this.match(NuevoParser.LLAVE_DER);
	        this.state = 124;
	        this.match(NuevoParser.PUNTO_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retorno() {
	    let localctx = new RetornoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, NuevoParser.RULE_retorno);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.match(NuevoParser.DEVOLVER);
	        this.state = 127;
	        this.valor();
	        this.state = 128;
	        this.match(NuevoParser.PUNTO_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, NuevoParser.RULE_valor);
	    try {
	        this.state = 138;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 130;
	            this.match(NuevoParser.TEXTO);
	            break;
	        case 23:
	        case 24:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 131;
	            this.numero();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 132;
	            this.variable();
	            break;
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 133;
	            this.transformacion();
	            this.state = 134;
	            this.match(NuevoParser.LLAVE_IZQ);
	            this.state = 135;
	            this.cadena();
	            this.state = 136;
	            this.match(NuevoParser.LLAVE_DER);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, NuevoParser.RULE_cadena);
	    try {
	        this.state = 142;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 140;
	            this.match(NuevoParser.TEXTO);
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 141;
	            this.variable();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombre() {
	    let localctx = new NombreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, NuevoParser.RULE_nombre);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this.match(NuevoParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, NuevoParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this.match(NuevoParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, NuevoParser.RULE_numero);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        _la = this._input.LA(1);
	        if(!(_la===23 || _la===24)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

NuevoParser.EOF = antlr4.Token.EOF;
NuevoParser.VARIABLE = 1;
NuevoParser.FUNCION = 2;
NuevoParser.EJECUTAR = 3;
NuevoParser.DEVOLVER = 4;
NuevoParser.IMPRIMIR = 5;
NuevoParser.MAYUSCULAS = 6;
NuevoParser.MINUSCULAS = 7;
NuevoParser.LONGITUD = 8;
NuevoParser.INVERTIR = 9;
NuevoParser.REEMPLAZAR = 10;
NuevoParser.IGUAL = 11;
NuevoParser.PUNTO_COMA = 12;
NuevoParser.LLAVE_IZQ = 13;
NuevoParser.LLAVE_DER = 14;
NuevoParser.PAREN_IZQ = 15;
NuevoParser.PAREN_DER = 16;
NuevoParser.COMA = 17;
NuevoParser.MAS = 18;
NuevoParser.MENOS = 19;
NuevoParser.MULT = 20;
NuevoParser.DIV = 21;
NuevoParser.ID = 22;
NuevoParser.NUMERO = 23;
NuevoParser.NUMERO_DECIMAL = 24;
NuevoParser.TEXTO = 25;
NuevoParser.WS = 26;

NuevoParser.RULE_program = 0;
NuevoParser.RULE_declaracion = 1;
NuevoParser.RULE_funcion = 2;
NuevoParser.RULE_ejecucion = 3;
NuevoParser.RULE_argumentos = 4;
NuevoParser.RULE_parametros = 5;
NuevoParser.RULE_instrucciones = 6;
NuevoParser.RULE_operacion_texto = 7;
NuevoParser.RULE_transformacion = 8;
NuevoParser.RULE_concatenar = 9;
NuevoParser.RULE_impresion = 10;
NuevoParser.RULE_retorno = 11;
NuevoParser.RULE_valor = 12;
NuevoParser.RULE_cadena = 13;
NuevoParser.RULE_nombre = 14;
NuevoParser.RULE_variable = 15;
NuevoParser.RULE_numero = 16;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NuevoParser.RULE_program;
    }

	EOF() {
	    return this.getToken(NuevoParser.EOF, 0);
	};

	declaracion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaracionContext);
	    } else {
	        return this.getTypedRuleContext(DeclaracionContext,i);
	    }
	};

	funcion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncionContext);
	    } else {
	        return this.getTypedRuleContext(FuncionContext,i);
	    }
	};

	ejecucion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EjecucionContext);
	    } else {
	        return this.getTypedRuleContext(EjecucionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NuevoVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NuevoParser.RULE_declaracion;
    }

	VARIABLE() {
	    return this.getToken(NuevoParser.VARIABLE, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	PUNTO_COMA() {
	    return this.getToken(NuevoParser.PUNTO_COMA, 0);
	};

	IGUAL() {
	    return this.getToken(NuevoParser.IGUAL, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.enterDeclaracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.exitDeclaracion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NuevoVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NuevoParser.RULE_funcion;
    }

	FUNCION() {
	    return this.getToken(NuevoParser.FUNCION, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	LLAVE_IZQ() {
	    return this.getToken(NuevoParser.LLAVE_IZQ, 0);
	};

	LLAVE_DER() {
	    return this.getToken(NuevoParser.LLAVE_DER, 0);
	};

	PAREN_IZQ() {
	    return this.getToken(NuevoParser.PAREN_IZQ, 0);
	};

	PAREN_DER() {
	    return this.getToken(NuevoParser.PAREN_DER, 0);
	};

	instrucciones = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionesContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionesContext,i);
	    }
	};

	argumentos() {
	    return this.getTypedRuleContext(ArgumentosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.enterFuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.exitFuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NuevoVisitor ) {
	        return visitor.visitFuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EjecucionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NuevoParser.RULE_ejecucion;
    }

	EJECUTAR() {
	    return this.getToken(NuevoParser.EJECUTAR, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	PUNTO_COMA() {
	    return this.getToken(NuevoParser.PUNTO_COMA, 0);
	};

	PAREN_IZQ() {
	    return this.getToken(NuevoParser.PAREN_IZQ, 0);
	};

	PAREN_DER() {
	    return this.getToken(NuevoParser.PAREN_DER, 0);
	};

	parametros() {
	    return this.getTypedRuleContext(ParametrosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.enterEjecucion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.exitEjecucion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NuevoVisitor ) {
	        return visitor.visitEjecucion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NuevoParser.RULE_argumentos;
    }

	variable = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableContext);
	    } else {
	        return this.getTypedRuleContext(VariableContext,i);
	    }
	};

	COMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NuevoParser.COMA);
	    } else {
	        return this.getToken(NuevoParser.COMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.enterArgumentos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.exitArgumentos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NuevoVisitor ) {
	        return visitor.visitArgumentos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametrosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NuevoParser.RULE_parametros;
    }

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	COMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NuevoParser.COMA);
	    } else {
	        return this.getToken(NuevoParser.COMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.enterParametros(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.exitParametros(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NuevoVisitor ) {
	        return visitor.visitParametros(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NuevoParser.RULE_instrucciones;
    }

	operacion_texto() {
	    return this.getTypedRuleContext(Operacion_textoContext,0);
	};

	impresion() {
	    return this.getTypedRuleContext(ImpresionContext,0);
	};

	retorno() {
	    return this.getTypedRuleContext(RetornoContext,0);
	};

	concatenar() {
	    return this.getTypedRuleContext(ConcatenarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NuevoVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Operacion_textoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NuevoParser.RULE_operacion_texto;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	IGUAL() {
	    return this.getToken(NuevoParser.IGUAL, 0);
	};

	transformacion() {
	    return this.getTypedRuleContext(TransformacionContext,0);
	};

	LLAVE_IZQ() {
	    return this.getToken(NuevoParser.LLAVE_IZQ, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	LLAVE_DER() {
	    return this.getToken(NuevoParser.LLAVE_DER, 0);
	};

	PUNTO_COMA() {
	    return this.getToken(NuevoParser.PUNTO_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.enterOperacion_texto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.exitOperacion_texto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NuevoVisitor ) {
	        return visitor.visitOperacion_texto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TransformacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NuevoParser.RULE_transformacion;
    }

	MAYUSCULAS() {
	    return this.getToken(NuevoParser.MAYUSCULAS, 0);
	};

	MINUSCULAS() {
	    return this.getToken(NuevoParser.MINUSCULAS, 0);
	};

	LONGITUD() {
	    return this.getToken(NuevoParser.LONGITUD, 0);
	};

	INVERTIR() {
	    return this.getToken(NuevoParser.INVERTIR, 0);
	};

	REEMPLAZAR() {
	    return this.getToken(NuevoParser.REEMPLAZAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.enterTransformacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.exitTransformacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NuevoVisitor ) {
	        return visitor.visitTransformacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConcatenarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NuevoParser.RULE_concatenar;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	IGUAL() {
	    return this.getToken(NuevoParser.IGUAL, 0);
	};

	cadena = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CadenaContext);
	    } else {
	        return this.getTypedRuleContext(CadenaContext,i);
	    }
	};

	MAS() {
	    return this.getToken(NuevoParser.MAS, 0);
	};

	PUNTO_COMA() {
	    return this.getToken(NuevoParser.PUNTO_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.enterConcatenar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.exitConcatenar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NuevoVisitor ) {
	        return visitor.visitConcatenar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NuevoParser.RULE_impresion;
    }

	IMPRIMIR() {
	    return this.getToken(NuevoParser.IMPRIMIR, 0);
	};

	LLAVE_IZQ() {
	    return this.getToken(NuevoParser.LLAVE_IZQ, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	LLAVE_DER() {
	    return this.getToken(NuevoParser.LLAVE_DER, 0);
	};

	PUNTO_COMA() {
	    return this.getToken(NuevoParser.PUNTO_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.enterImpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.exitImpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NuevoVisitor ) {
	        return visitor.visitImpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RetornoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NuevoParser.RULE_retorno;
    }

	DEVOLVER() {
	    return this.getToken(NuevoParser.DEVOLVER, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	PUNTO_COMA() {
	    return this.getToken(NuevoParser.PUNTO_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.enterRetorno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.exitRetorno(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NuevoVisitor ) {
	        return visitor.visitRetorno(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NuevoParser.RULE_valor;
    }

	TEXTO() {
	    return this.getToken(NuevoParser.TEXTO, 0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	transformacion() {
	    return this.getTypedRuleContext(TransformacionContext,0);
	};

	LLAVE_IZQ() {
	    return this.getToken(NuevoParser.LLAVE_IZQ, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	LLAVE_DER() {
	    return this.getToken(NuevoParser.LLAVE_DER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NuevoVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NuevoParser.RULE_cadena;
    }

	TEXTO() {
	    return this.getToken(NuevoParser.TEXTO, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NuevoVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NuevoParser.RULE_nombre;
    }

	ID() {
	    return this.getToken(NuevoParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.enterNombre(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.exitNombre(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NuevoVisitor ) {
	        return visitor.visitNombre(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NuevoParser.RULE_variable;
    }

	ID() {
	    return this.getToken(NuevoParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NuevoVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NuevoParser.RULE_numero;
    }

	NUMERO() {
	    return this.getToken(NuevoParser.NUMERO, 0);
	};

	NUMERO_DECIMAL() {
	    return this.getToken(NuevoParser.NUMERO_DECIMAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NuevoListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NuevoVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




NuevoParser.ProgramContext = ProgramContext; 
NuevoParser.DeclaracionContext = DeclaracionContext; 
NuevoParser.FuncionContext = FuncionContext; 
NuevoParser.EjecucionContext = EjecucionContext; 
NuevoParser.ArgumentosContext = ArgumentosContext; 
NuevoParser.ParametrosContext = ParametrosContext; 
NuevoParser.InstruccionesContext = InstruccionesContext; 
NuevoParser.Operacion_textoContext = Operacion_textoContext; 
NuevoParser.TransformacionContext = TransformacionContext; 
NuevoParser.ConcatenarContext = ConcatenarContext; 
NuevoParser.ImpresionContext = ImpresionContext; 
NuevoParser.RetornoContext = RetornoContext; 
NuevoParser.ValorContext = ValorContext; 
NuevoParser.CadenaContext = CadenaContext; 
NuevoParser.NombreContext = NombreContext; 
NuevoParser.VariableContext = VariableContext; 
NuevoParser.NumeroContext = NumeroContext; 
