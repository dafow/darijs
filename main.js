var darijs = require('./darijsparser.js');
var escodegen = require('escodegen');
var $ = require('jquery');

$(document).ready(function() {
	//console simulator
	var $result = $('#result');
	window.kteb = {
		m7i: function() {
			result.textContent = "";
		},
		
		message: function(res) {
			$result.append('<pre>'+res+'</pre>');
		}
	}
	
	//capture console output to show in results panel
	var logCapture = console.log;
	console.log = function(msg) {
		window.kteb.message(msg);
		logCapture.apply(console, arguments);
	}
	var infoCapture = console.info;
	console.info = function(msg) {
		window.kteb.message(msg);
		infoCapture.apply(console, arguments);
	}
	var errCapture = console.err;
	console.err = function(msg) {
		window.kteb.message(msg);
		errCapture.apply(console, arguments);
	}
	var warnCapture = console.warn;
	console.warn = function(msg) {
		window.kteb.message(msg);
		warnCapture.apply(console, arguments);
	}
	
	//setup code editor on panels
	var djsFlask = new CodeFlask;
	djsFlask.run('#darija', { language: 'javascript' });
	
	var jsFlask = new CodeFlask;
	jsFlask.run('#translated', { language: 'javascript' });
	
	djsFlask.onUpdate(function(code) {
		try {
			window.kteb.m7i();
			//parse darijs using parser generated with pegjs using darijs grammar
			var darijsAST = darijs.parse(code);
			//generate ecmascript based on returned AST
			var trans = escodegen.generate(darijsAST);
			jsFlask.update(trans);
			try {
				var evaled = eval('try{'+
					trans+
				'}catch(e){'+
				'if(e instanceof ReferenceError){var varName=e.message.split(" ")[0];console.log("had \'"+varName+"\' ma kaynach aw!");}'+
				'else if(e instanceof TypeError){var varName=e.message.split(" ")[0];console.log("had ldalla \'"+varName+"\' ma kaynach aw!");}'+
				'else{console.log("sir googli hadchi..."+e.message);}'+
				'}');
				if (evaled !== undefined) window.kteb.message(evaled);
			}
			catch (evalErr) {
				console.log(evalErr);
			}
		}
		catch (err) {
			//probably a parse error
			jsFlask.update("khoya/khti chi 7aja na9ssa oula zayda flcode dialek. zeyr(i) m3ana");
			console.log(err);
		}
	});
	
	
});