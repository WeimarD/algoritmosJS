function saludo (){
    alert ("Hola mundo, soy Weimar y esto es javascript puro")
}

function operacion (){
    var A;
    var B;
    var C;
    var D;
    var E;
    var F;
    
    alert ("Este es un programa para sumar, restar, multiplicar y dividir dos numeros ingresados");
    
    A = parseInt (prompt ("Por favor ingrese el primer valor"));
    B = parseInt (prompt ("Por favor ingrese el segundo valor"));
    
    C = A + B;
    D = A - B;
    E = A * B;
    F = A / B;
    
    /* El \n es un salto de linea y se hace con alt + 92*/
    alert ("La suma de los numeros es: " + C + 
    "\nLa resta de los numeros es: " + D +
    "\nLa multiplicacion de los numeros es: " + E +
    "\nLa division de los numeros es: " + F);
}

function mayor (){
    var A;
    var B;

    alert ("Este es un programa para saber el mayor de dos numeros");
    A = parseInt (prompt ("Por favor ingrese el primer valor: "));
    B = parseInt (prompt ("Por favor ingrese el segundo valor: "));

    if (A < B){
        alert ("El numero mayor es el: " + B);
    } else {
        alert ("El numero mayor es el: " + A);
    }
}

function menor (){
    var A;
    var B;
    var C;

    alert ("Este es un programa apara saber el menor de 3 numeros")
    A = parseInt (prompt("Por favor ingrese el primer valor: "))
    B = parseInt (prompt("Por favor ingrese el segundo valor: "))
    C = parseInt (prompt("Por favor ingrese el tercer valor: "))

    if ((A == B) && (B == C)){
        alert ("Los numeros son iguales");
    } else if ((A < B) && (A < C)){
        alert ("El numero menor es: " + A);
    } else if (B < C){
        alert ("El numero menor es: " + B);
    } else {
        alert ("El numero menor es: " + C);
    }
}

function par (){
    var A;
    var B;

    alert ("Este es un programa para saber si un numero es par o impar");
    A = parseInt (prompt ("Por favor ingrese un numero: "));

    /* El mod en javascript es con % */
    B = A % 2;

    if (B == 0){
        alert ("El numero " + A + " es par");
    } else {
        alert ("El numero " + A + " es impar");
    }
}

function potencia (){
    var X;
    var R;

    alert ("Este es un programa para elevar un numero al cuadrado");
    X = parseInt (prompt ("Por favor ingrese el valor a potenciar"));

    R = X ** 2;

    alert ("El cuadrado del numero " + X + " es " + R);
}

function triangulo (){
    var A;
    var B;
    var H;

    alert ("Este es un prgrama para hallar el area de un triangulo");
    H = parseInt (prompt ("Por favor ingrese la altura del triangulo: "));
    B = parseInt (prompt ("Por favor ingrese la base del triangulo: "));

    A = (B * H) / 2;

    alert ("El area del trinagulo es de: " + A);
}

function pulgadas (){
    var P;
    var CM;
    var M;
    var KM;

    alert ("Este es un programa para pasar pulgadas a Cm, M y Km");
    P = parseInt (prompt ("Por favor ingrese las pulgadas: "));

    CM = P * 2.54;
    M = CM / 100;
    KM = M / 1000;

    alert ("Las " + P + " pulgadas en Cm son: " + CM + " Cm" +
    "\nLas " + P + " pulgadas en M son: " + M + " M" +
    "\nLas " + P + " pulgadas en Km son: " + KM + " Km");
}

function edad (){
    var E;
    var A;
    var B;
    var C;

    alert ("Este programa es para saber en que año nacio");
    E = parseInt (prompt ("Por favor ingrese su edad actual: "));
    C = parseInt (prompt ("¿Usted tiene los " + E + " Años ya cumplidos en el año actual?" +
    "\nEscriba 1 para confirmar, de lo contrario escriba 2"));

    if (C == 1){
        B = 2022;
        A = B - E;
        alert ("Usted nacio en el año: " + A);
    } else {
        B = 2021;
        A = B - E;
        alert ("Usted nacio en el año: " + A);
    }
}

function banco (){
    var C;
    var A;
    var G;
    var M;
    var T;
    var P;

    alert ("Este es un programa para calcular sus ganacias segun el capital y los años");
    C = parseInt (prompt ("Por favor ingrese el monto a invertir: "));
    A = parseInt (prompt ("Por favor ingrese la cantidad de años que va a invertir su capital: "));

    M = A * 12;
    P = M * 2.3;
    G = C * P / 100;
    T = G + C;

    alert ("Las ganancias generadas en " + A + " años por un 2.3% de interes mensual es de: $" + G +
    "\nPara ese momento usted tendra un total de: $" + T);
}

function promedio (){
    var C1;
    var C2;
    var C3;
    var C4;
    var C5;
    var P;

    alert ("Este es un programa para saber su promedio de calificaiones");
    C1 = parseInt (prompt ("Por favor ingrese la primera calificacion: "));
    C2 = parseInt (prompt ("Por favor ingrese la segunda calificacion: "));
    C3 = parseInt (prompt ("Por favor ingrese la tercera calificacion: "));
    C4 = parseInt (prompt ("Por favor ingrese la cuarta calificacion: "));
    C5 = parseInt (prompt ("Por favor ingrese la quinta calificacion: "));

    P = (C1 + C2 + C3 + C4 + C5) / 5;

    alert ("Su promedio de ca calificaciones es de: " + P);
}

function tienda (){
    var K;
    var T;
    var TD;
    var TN;

    alert ("Este es un programa que permite saber cuanto debe pagar por sus manzanas");
    K = parseInt (prompt ("Por favor ingrese la cantidad de kilos de manzanas que compro: "));

    if (K <= 2) {
        T = K * 4500;
        alert ("No se le aplica descuento, el total a pagar es: $" + T);
    } else if ((K >= 3) && (K <=5)){
        TN = K * 4500;
        TD = TN * 10 /100;
        T = TN - TD;
        alert ("Se le aplica un descuento del 10% $" + TD +
        "\nSu total a pagar es: $" + T);
    } else if ((K >= 6) && (K < 10)) {
        TN = K * 4500;
        TD = TN * 15 /100;
        T = TN - TD;
        alert ("Se le aplica un descuento del 15% $" + TD +
        "\nSu total a pagar es: $" + T);
    } else if (K >= 10) {
        TN = K * 4500;
        TD = TN * 20 /100;
        T = TN - TD;
        alert ("Se le aplica un descuento del 20% $" + TD +
        "\nSu total a pagar es: $" + T);
    }
}

function despedida () {
    alert ("Adiós mundo, gracias por mi java script puro :)")
}