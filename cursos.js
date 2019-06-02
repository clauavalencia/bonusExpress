

let cursos = [
		{id: 1,
		nombre: 'Node Js',
		duracion: '80 horas',
		valor: 0
	},
	 {id: 2,
		nombre: 'Ingles',
		duracion: '70 horas',
		valor: '35000'
	},
	{id: 3,
		nombre: 'React',
		duracion: '80 horas',
		valor: '50000'
	}
];

const express = require('express')
const app = express()


let imprime=(id)=>{
	let dcurso = cursos.find(datcurso => datcurso.id == id);
	return dcurso
};


module.exports = {
	cursos,
	imprime,
};

