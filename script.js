/*

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/



// creare la funzione che generi 5 numeri casuali

function riempiConNumeroRandom(idElemento){

  let nomiId = ['primo', 'secondo', 'terzo', 'quarto', 'quinto'];

  for(i = 0; i < 5; i++){

  document.getElementById(idElemento).innerHTML = Math.floor( Math.random() * 10);

  }
}

//riempiConNumeroRandom(idElemento);

function generaNumeriRandom(){

  let nomiId = ['primo', 'secondo', 'terzo', 'quarto', 'quinto'];

  for(i = 0; i < 5; i++){

   const gian = document.getElementById(nomiId[i]).innerHTML = Math.floor (Math.random() * 10);
    console.log(nomiId[i]);
    console.log(gian);

  }
 
}

generaNumeriRandom();


// creare la funzione che chiede di inserire i 5 numeri, mentre nasconde quella precedente

setTimeout(function chiediNumeri(){

  for(r = 0; r < 5; r++){

    const varia = prompt('Inserisci il numero');
    let = [varia];
    console.log(varia);
  }

}, 3000);

chiediNumeri();

function controlNumber(){

  if(varia[r] == gian){
    document.getElementById("titolo").innerHTML = "Hai vinto";
  } else {
    document.getElementById("titolo").innerHTML = "Hai perso";
  }


}

controlNumber();
/*

*/