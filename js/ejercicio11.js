const numero1 = parseInt(prompt("Ingrese un número: "));
if (numero1 % 2 === 0) {
  if (numero1 % 3 === 0) {
    if (numero1 % 5 === 0) {
      if (numero1 % 7 === 0) {
        document.write(`${numero1} es divisible entre 2, 3, 5 y 7.`);
      } else {
        document.write(
          `${numero1} es divisible entre 2, 3 y 5 pero no entre 7.`
        );
      }
    } else {
      document.write(`${numero1} es divisible entre 2 y 3 pero no entre 5.`);
    }
  } else {
    document.write(`${numero1} es divisible entre 2 pero no entre 3.`);
  }
} else {
  document.write(`${numero1} no es divisible entre 2.`);
}
