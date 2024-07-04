const numero1 = parseInt(prompt("Ingrese un número: "))
const numero2 = parseInt(prompt("Ingrese el segundo número: "))
const numero3 = parseInt(prompt("Imgrese el tercer número: "))
if(numero1<numero2)
    if(numero2>numero3){document.write("El número "+numero2+ " es el mayor de todos")}
else {document.write("El número "+numero3+" es el mayor de todos")}
else{document.write("El numero "+numero1+" es el mayor")}
