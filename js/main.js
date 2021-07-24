// PAROLA PALINDROMA
//Chiedere all’utente di inserire una parola
//var str = prompt("Inserisci parola palindroma");
//Creare una funzione per capire se la parola inserita è palindroma
/* function parolaPali (str) {
    var myArr = str.split('').reverse().join('');
    
    if (myArr == str) {
        console.log("La parole è palindroma");
    } else {
        console.log("La parola non è palindroma");
    }
   
}
parolaPali(str); */
//---------------------------------------------------------------------------------
// PARI O DISPARI
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var pariDispari = prompt("Scegli tra pari o dispari");

function func(str) {
    var string = str.toUpperCase();

    if (string == "PARI") {
        /* var scegliNumero = prompt("Scegli un numero tra: 2 e 4."); */
        return(string);

    } else {
         /* scegliNumero = prompt("Scegli un numero tra: 1, 3 e 5."); */
         return(string);
    }
}

func(pariDispari);
console.log(func(pariDispari));


var numeroScelto = parseInt(prompt("Scegli un numero tra 1 e 5"));
console.log(numeroScelto);
//---------------------------------------------------------------------------------
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
var numCM =  Math.floor(Math.random() * 5) + 1;
console.log(numCM);
//---------------------------------------------------------------------------------
//Sommiamo i due numeri
var somma = numeroScelto + numCM;
console.log("la somma è: " + somma);
//---------------------------------------------------------------------------------
//Stabiliamo se la somma dei due numeri se è pari o dispari (usando una funzione)

function sommaPariDispari(scelta, num, num2) {
    var somma = num + num2; 

    if ((somma % 2 == 0) && (scelta == "pari")){
      return"hai vinto";
    }  else if ((somma % 2 != 0) && (scelta == "dispari")) {
        return"hai vinto";
    } else {
        return"hai perso";
    }
};

//chi ha vinto
console.log(sommaPariDispari(pariDispari, numeroScelto, numCM));
