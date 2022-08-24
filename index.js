let notas;
let promedio;
let suma = 0; 

function resultadoNotas() {
	let notas= parseInt(prompt("Nota numero: " + i))
	suma = suma + notas;
	promedio = suma / 5;
}

let alumno= (prompt("Ingrese el nombre del alumno"));
for (i = 0; i< 5; i++){
	resultadoNotas();
}
if(promedio >= 7){
	alert("La nota final es: " + promedio + " APROBADO");
}else{
	alert("La nota final es: " + promedio + " DESAPROBADO");
}
