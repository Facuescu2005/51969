// Generated from Messi.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MessiListener from './MessiListener.js';
import MessiVisitor from './MessiVisitor.js';

const serializedATN = [4,1,21,94,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,0,1,0,
1,1,1,1,1,1,3,1,30,8,1,1,2,1,2,1,2,1,2,1,2,1,2,4,2,38,8,2,11,2,12,2,39,1,
2,3,2,43,8,2,1,2,1,2,1,3,1,3,1,3,1,3,5,3,51,8,3,10,3,12,3,54,9,3,1,4,1,4,
1,4,5,4,59,8,4,10,4,12,4,62,9,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,
1,6,1,6,1,6,1,7,1,7,1,7,5,7,80,8,7,10,7,12,7,83,9,7,1,8,1,8,1,8,1,8,1,8,
1,8,1,8,3,8,92,8,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,1,1,0,14,17,95,0,21,
1,0,0,0,2,29,1,0,0,0,4,31,1,0,0,0,6,46,1,0,0,0,8,55,1,0,0,0,10,63,1,0,0,
0,12,68,1,0,0,0,14,76,1,0,0,0,16,91,1,0,0,0,18,20,3,2,1,0,19,18,1,0,0,0,
20,23,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,24,1,0,0,0,23,21,1,0,0,0,24,
25,5,0,0,1,25,1,1,0,0,0,26,30,3,4,2,0,27,30,3,10,5,0,28,30,3,12,6,0,29,26,
1,0,0,0,29,27,1,0,0,0,29,28,1,0,0,0,30,3,1,0,0,0,31,32,5,1,0,0,32,33,5,2,
0,0,33,34,3,14,7,0,34,35,5,3,0,0,35,37,5,4,0,0,36,38,3,6,3,0,37,36,1,0,0,
0,38,39,1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,42,1,0,0,0,41,43,3,8,4,0,
42,41,1,0,0,0,42,43,1,0,0,0,43,44,1,0,0,0,44,45,5,5,0,0,45,5,1,0,0,0,46,
47,5,6,0,0,47,48,3,14,7,0,48,52,5,7,0,0,49,51,3,2,1,0,50,49,1,0,0,0,51,54,
1,0,0,0,52,50,1,0,0,0,52,53,1,0,0,0,53,7,1,0,0,0,54,52,1,0,0,0,55,56,5,8,
0,0,56,60,5,7,0,0,57,59,3,2,1,0,58,57,1,0,0,0,59,62,1,0,0,0,60,58,1,0,0,
0,60,61,1,0,0,0,61,9,1,0,0,0,62,60,1,0,0,0,63,64,5,19,0,0,64,65,5,9,0,0,
65,66,3,14,7,0,66,67,5,10,0,0,67,11,1,0,0,0,68,69,5,11,0,0,69,70,5,12,0,
0,70,71,5,13,0,0,71,72,5,2,0,0,72,73,3,14,7,0,73,74,5,3,0,0,74,75,5,10,0,
0,75,13,1,0,0,0,76,81,3,16,8,0,77,78,7,0,0,0,78,80,3,16,8,0,79,77,1,0,0,
0,80,83,1,0,0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,15,1,0,0,0,83,81,1,0,0,0,
84,92,5,19,0,0,85,92,5,20,0,0,86,87,5,2,0,0,87,88,3,14,7,0,88,89,5,3,0,0,
89,92,1,0,0,0,90,92,5,18,0,0,91,84,1,0,0,0,91,85,1,0,0,0,91,86,1,0,0,0,91,
90,1,0,0,0,92,17,1,0,0,0,8,21,29,39,42,52,60,81,91];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MessiParser extends antlr4.Parser {

    static grammarFileName = "Messi.g4";
    static literalNames = [ null, "'switch'", "'('", "')'", "'{'", "'}'", 
                            "'case'", "':'", "'default'", "'='", "';'", 
                            "'console'", "'.'", "'log'", "'+'", "'-'", "'*'", 
                            "'/'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "StringLiteral", "Identifier", 
                             "Number", "WS" ];
    static ruleNames = [ "program", "statement", "switchStatement", "caseClause", 
                         "defaultClause", "assignmentStatement", "consoleStatement", 
                         "expression", "term" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MessiParser.ruleNames;
        this.literalNames = MessiParser.literalNames;
        this.symbolicNames = MessiParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MessiParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 526338) !== 0)) {
	            this.state = 18;
	            this.statement();
	            this.state = 23;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 24;
	        this.match(MessiParser.EOF);
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MessiParser.RULE_statement);
	    try {
	        this.state = 29;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 26;
	            this.switchStatement();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 27;
	            this.assignmentStatement();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 28;
	            this.consoleStatement();
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



	switchStatement() {
	    let localctx = new SwitchStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MessiParser.RULE_switchStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(MessiParser.T__0);
	        this.state = 32;
	        this.match(MessiParser.T__1);
	        this.state = 33;
	        this.expression();
	        this.state = 34;
	        this.match(MessiParser.T__2);
	        this.state = 35;
	        this.match(MessiParser.T__3);
	        this.state = 37; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 36;
	            this.caseClause();
	            this.state = 39; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===6);
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 41;
	            this.defaultClause();
	        }

	        this.state = 44;
	        this.match(MessiParser.T__4);
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



	caseClause() {
	    let localctx = new CaseClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MessiParser.RULE_caseClause);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.match(MessiParser.T__5);
	        this.state = 47;
	        this.expression();
	        this.state = 48;
	        this.match(MessiParser.T__6);
	        this.state = 52;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 526338) !== 0)) {
	            this.state = 49;
	            this.statement();
	            this.state = 54;
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



	defaultClause() {
	    let localctx = new DefaultClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MessiParser.RULE_defaultClause);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(MessiParser.T__7);
	        this.state = 56;
	        this.match(MessiParser.T__6);
	        this.state = 60;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 526338) !== 0)) {
	            this.state = 57;
	            this.statement();
	            this.state = 62;
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



	assignmentStatement() {
	    let localctx = new AssignmentStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MessiParser.RULE_assignmentStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.match(MessiParser.Identifier);
	        this.state = 64;
	        this.match(MessiParser.T__8);
	        this.state = 65;
	        this.expression();
	        this.state = 66;
	        this.match(MessiParser.T__9);
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



	consoleStatement() {
	    let localctx = new ConsoleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MessiParser.RULE_consoleStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.match(MessiParser.T__10);
	        this.state = 69;
	        this.match(MessiParser.T__11);
	        this.state = 70;
	        this.match(MessiParser.T__12);
	        this.state = 71;
	        this.match(MessiParser.T__1);
	        this.state = 72;
	        this.expression();
	        this.state = 73;
	        this.match(MessiParser.T__2);
	        this.state = 74;
	        this.match(MessiParser.T__9);
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MessiParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.term();
	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 245760) !== 0)) {
	            this.state = 77;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 245760) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 78;
	            this.term();
	            this.state = 83;
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



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MessiParser.RULE_term);
	    try {
	        this.state = 91;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 84;
	            this.match(MessiParser.Identifier);
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 85;
	            this.match(MessiParser.Number);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 86;
	            this.match(MessiParser.T__1);
	            this.state = 87;
	            this.expression();
	            this.state = 88;
	            this.match(MessiParser.T__2);
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 90;
	            this.match(MessiParser.StringLiteral);
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


}

MessiParser.EOF = antlr4.Token.EOF;
MessiParser.T__0 = 1;
MessiParser.T__1 = 2;
MessiParser.T__2 = 3;
MessiParser.T__3 = 4;
MessiParser.T__4 = 5;
MessiParser.T__5 = 6;
MessiParser.T__6 = 7;
MessiParser.T__7 = 8;
MessiParser.T__8 = 9;
MessiParser.T__9 = 10;
MessiParser.T__10 = 11;
MessiParser.T__11 = 12;
MessiParser.T__12 = 13;
MessiParser.T__13 = 14;
MessiParser.T__14 = 15;
MessiParser.T__15 = 16;
MessiParser.T__16 = 17;
MessiParser.StringLiteral = 18;
MessiParser.Identifier = 19;
MessiParser.Number = 20;
MessiParser.WS = 21;

MessiParser.RULE_program = 0;
MessiParser.RULE_statement = 1;
MessiParser.RULE_switchStatement = 2;
MessiParser.RULE_caseClause = 3;
MessiParser.RULE_defaultClause = 4;
MessiParser.RULE_assignmentStatement = 5;
MessiParser.RULE_consoleStatement = 6;
MessiParser.RULE_expression = 7;
MessiParser.RULE_term = 8;

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
        this.ruleIndex = MessiParser.RULE_program;
    }

	EOF() {
	    return this.getToken(MessiParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MessiListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MessiListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MessiVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MessiParser.RULE_statement;
    }

	switchStatement() {
	    return this.getTypedRuleContext(SwitchStatementContext,0);
	};

	assignmentStatement() {
	    return this.getTypedRuleContext(AssignmentStatementContext,0);
	};

	consoleStatement() {
	    return this.getTypedRuleContext(ConsoleStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MessiListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MessiListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MessiVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SwitchStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MessiParser.RULE_switchStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	caseClause = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaseClauseContext);
	    } else {
	        return this.getTypedRuleContext(CaseClauseContext,i);
	    }
	};

	defaultClause() {
	    return this.getTypedRuleContext(DefaultClauseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MessiListener ) {
	        listener.enterSwitchStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MessiListener ) {
	        listener.exitSwitchStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MessiVisitor ) {
	        return visitor.visitSwitchStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaseClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MessiParser.RULE_caseClause;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MessiListener ) {
	        listener.enterCaseClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MessiListener ) {
	        listener.exitCaseClause(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MessiVisitor ) {
	        return visitor.visitCaseClause(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DefaultClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MessiParser.RULE_defaultClause;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MessiListener ) {
	        listener.enterDefaultClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MessiListener ) {
	        listener.exitDefaultClause(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MessiVisitor ) {
	        return visitor.visitDefaultClause(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MessiParser.RULE_assignmentStatement;
    }

	Identifier() {
	    return this.getToken(MessiParser.Identifier, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MessiListener ) {
	        listener.enterAssignmentStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MessiListener ) {
	        listener.exitAssignmentStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MessiVisitor ) {
	        return visitor.visitAssignmentStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConsoleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MessiParser.RULE_consoleStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MessiListener ) {
	        listener.enterConsoleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MessiListener ) {
	        listener.exitConsoleStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MessiVisitor ) {
	        return visitor.visitConsoleStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MessiParser.RULE_expression;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MessiListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MessiListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MessiVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MessiParser.RULE_term;
    }

	Identifier() {
	    return this.getToken(MessiParser.Identifier, 0);
	};

	Number() {
	    return this.getToken(MessiParser.Number, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	StringLiteral() {
	    return this.getToken(MessiParser.StringLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MessiListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MessiListener ) {
	        listener.exitTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MessiVisitor ) {
	        return visitor.visitTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MessiParser.ProgramContext = ProgramContext; 
MessiParser.StatementContext = StatementContext; 
MessiParser.SwitchStatementContext = SwitchStatementContext; 
MessiParser.CaseClauseContext = CaseClauseContext; 
MessiParser.DefaultClauseContext = DefaultClauseContext; 
MessiParser.AssignmentStatementContext = AssignmentStatementContext; 
MessiParser.ConsoleStatementContext = ConsoleStatementContext; 
MessiParser.ExpressionContext = ExpressionContext; 
MessiParser.TermContext = TermContext; 
