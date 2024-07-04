const numero1 = parseInt(prompt("Ingrese un número: "))
if(numero1%2===0){document.write("El número "+ numero1+" es divisible en 2")}
else if(numero1%3===0){document.write("El número "+ numero1+" es divisible en 3")}
else if(numero1%5===0){document.write("El número "+numero1+" es divisible en 5")}
else if(numero1%7===0){document.write("El número "+numero1+" es divisible en 7")}
else{document.write("El número "+numero1+" no es divisible en 2, 3 , 5 o 7")}
