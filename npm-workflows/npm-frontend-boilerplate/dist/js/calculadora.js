function sumar (a, b) {
    return a + b;
}
function restar (a, b) {
    return a - b;
}
function multiplicar (a, b) {
    return a * b;
}
function dividir (a, b) {
    return a / b;
}
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (d, w, n) {
	var html = d.documentElement,
	    head = d.head,
	    body = d.body;

	var Perro = function () {
		function Perro(nombre, raza) {
			_classCallCheck(this, Perro);

			this.nombre = nombre;
			this.raza = raza;
		}

		_createClass(Perro, [{
			key: 'ladrar',
			value: function ladrar() {
				alert('\xA1\xA1\xA1' + this.nombre + ' dice guau guau!!!');
			}
		}]);

		return Perro;
	}();

	var kenai = new Perro('kEnAi', 'firefox');
	var txakurra = new Perro('Desao', 'Fox Terrier');
	//Esto se ejecutará cada vez que se entre o se actualice la página
	//kenai.ladrar()
	//txakurra.ladrar()

	console.log(html, head, body);
})(document, window, navigator);