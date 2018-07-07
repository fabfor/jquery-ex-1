// Creare una griglia 8x8 formata da quadratini bianchi
// 15 di questi quadratini, scelti a caso all'inizio se
// cliccati diventano rossi gli altri diventano verdi.
// Si vince quando l'utente trova 5 verdi, cliccando un rosso si perde

var bombe = [];
var celle = $(".cell");
var green_count = 0;
var red_count = 0;

// numero di verdi da scoprire per vincere
var victory = 5;


while (bombe.length < 15){
 var rand = randomNumber(0,63);
 if (!bombe.includes(rand)){
   bombe.push(rand);
 }
}

for (var i = 0; i < bombe.length; i++) {
  var indice = bombe[i];
  $(celle[indice]).addClass("bomb");
}

$('.cell').click(function(){
  // La cella è cliccabile?
  if (!$(this).hasClass("inactive")){
    //$(this) deve diventare rossa
    if ($(this).hasClass("bomb")){
      alert("Hai Perso!");
      location.reload();
    }
    //$(this) deve diventare verde
    else{
      $(this).addClass("green")
      green_count++;
      $('#green_count').text(green_count);
    }
    //Aggiungiamo una classe per identificare quelle già cliccate
    $(this).addClass("inactive");
  }

  // Vittoria quando si raggiunge un numero di versi uguale a victory
  if (green_count == victory){
    alert("Hai vinto!");
    location.reload();
  }
})

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
