var numero = [3,5,10,16,13,2,8,14,20,1,36,27,45,41,7,28,31,21,64,100];
var i = 0 ;
var res = [ ];
for(i=0;i<numero.length;i++){
   if(numero[i]%2!=0){
   	res.push(numero[i]);
   }
}
console.log(res);




//Ejercicio DNI	
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var dni,i,total;
total=0;
dni = parseInt(prompt(" Ingrese el rut"));
i=0
if(dni<9999999 || dni>999999999){
	alert(" El rut es invalido");
}else if(dni>0){
	total=dni%23;
	document.write(letras[total]+" Es la letra de su rut")
	if(letras==letras[total]){
		alert ("su letra coincide");
		}else{
		alert("su letra no coincide");
 }
}

