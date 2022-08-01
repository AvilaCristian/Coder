
/*
Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado.
Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.
Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.
*/ 

/*------------------------------------------------------------------------------------------------------------------------------------------------------*/ 

//Algoritmo --> Sumar dos numeros segun la repeticion con su respectivo resultado.

for (let i = 1; i <= 5; i++) {

    let num1 = parseInt(prompt("Ingresar el Numero a sumar"));
    let num2 = parseInt(prompt("Ingresar otro Numero a sumar"));

    let resultado = num1 + num2 ;

    console.log(num1 +" + "+ num2 +" = "+ resultado);
}

/*------------------------------------------------------------------------------------------------------------------------------------------------------*/ 

//Algoritmo --> Ingresar un texto hasta colocar la palabra ESC para finalizar.

let texto = prompt("Ingresa un texto o ESC para terminar")

//Se repite el bucle hasta ingresar ESC

while(texto != "ESC"){

    console.log("El texto ingresado es: " + texto)

    texto = prompt("Ingresa otro texto o ESC para terminar")
}


/*------------------------------------------------------------------------------------------------------------------------------------------------------*/ 

// Añgoritmo ---> Repetir la salida del mensaje “Hola” la cantidad de veces ingresada.

let ingresarNumero = parseInt(prompt("Ingresa un Numero el cual sera la cantidad de veces que iterara el mensaje de saludo HOLA! "));

for(let i = 1; i <= ingresarNumero; i++){    

   console.log(i + " : "+" HOLA! ");  

}