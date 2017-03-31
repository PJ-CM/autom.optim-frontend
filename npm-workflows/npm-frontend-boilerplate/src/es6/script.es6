((d, w, n) => {
	const html = d.documentElement,
		head = d.head,
		body = d.body
	
	class Perro {
		constructor(nombre, raza) {
			this.nombre = nombre
			this.raza = raza
		}

		ladrar() {
			alert(`¡¡¡${this.nombre} dice guau guau!!!`);
		}
	}

	let kenai = new Perro('kEnAi', 'firefox')
    let txakurra = new Perro('Desao', 'Fox Terrier')
	//Esto se ejecutará cada vez que se entre o se actualice la página
	//kenai.ladrar()
	//txakurra.ladrar()

	console.log(html, head, body)
})(document, window, navigator);