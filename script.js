function send() {
    var input = document.getElementById("text").value;
    // document.getElementById("out").innerText = input;
}

function convert() {
    var input = document.getElementById("text").value;
    var output = document.getElementById("out");

    // output.innerHTML = input;
      output.innerHTML = transliterate(input);
    //toElbasan(input);

}

function transliterate(word){
  var l = {
    "a":"\u{10500}","b":"\u{10501}","c":"\u{10502}","ç":"\u{10502}","d":"\u{10504}","nd":"\u{10505}","dh":"\u{10506}","e":"\u{10507}",
    "ë":"\u{10508}","f":"\u{10509}","g":"\u{1050A}","gj":"\u{1050B}","h":"\u{1050C}","i":"\u{1050D}","j":"\u{1050E}","k":"\u{1050F}","l":"\u{10510}",
    "ll":"\u{10511}","m":"\u{10512}","n":"\u{10513}","nj":"\u{10515}","ng":"\u{10514}\u{1050A}","ngj":"\u{10514}\u{1050B}","o":"\u{10516}","p":"\u{10517}",
    "q":"\u{10518}","r":"\u{10519}","rr":"\u{1051A}","s":"\u{1051B}","sh":"\u{1051C}","t":"\u{1051D}","th":"\u{1051E}","u":"\u{1051F}",
    "v":"\u{10520}","x":"\u{10521}","y":"\u{10522}","z":"\u{10523}","zh":"\u{10524}","gh":"\u{10525}","kh":"\u{10527}","xh":"\u{105}"
  };
  return word.split('').map(function (char) { 
    return a[char] || char; 
  }).join("");
}
