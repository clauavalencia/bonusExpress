const fs = require('fs');
const {imprime} = require('./cursos');
const express = require('express')
const app = express()

const estudiante = {
	id:{
		demand: true,
		alias:'i'
	},
	nombre:{
		demand: true,
		alias:'n'
	},
	cedula:{
		demand: true,
		alias:'x'
	}
};

const argv = require('yargs')
.command('inscribir','Inscribirme en un curso', estudiante)
.argv

flag = 1;

let infoCursos = (id) => {
	let texto = [];
for (id =1; id <= 3; id++)
	{ 
		let dacurso = imprime(id);
		//setTimeout(function(){
	    texto= texto + ('El curso '+ dacurso.id+ ' '+ dacurso.nombre + ' con duracion de  '+ dacurso.duracion+ '  valor de '+ dacurso.valor);
	//		tiempo = tiempo + 2000;
	}
	return texto;
};


if(imprime(argv.i))
{
let icurso = imprime(argv.i);
let crearArchivo = (i, n, x) => {
	info = 'El estudiante ' + n + ' con cedula ' + x + ' se ha matricula en el curso: '+
	icurso.nombre + ' tiene una duracion' + icurso.duracion + ' y un valor de ' + icurso.valor;
	fs.writeFile('matricula.txt', info,(err) => {
		if(err) throw(err);
		texto1= ('se ha creado el archivo');
	});
	}
	crearArchivo(argv.i,argv.n,argv.x);
	flag = 0;
}
else{
	if(argv.i != imprime(argv.id))
	{
	info='Ha ingresado un Id que no corresponde a ningun curso';
	info= info + infoCursos(1);
	flag = 0;
}
}
	
if(flag ==1)
	info = infoCursos(1)

app.get('/',function(req,res){
		res.send(info)
				
	})

app.listen(3000)