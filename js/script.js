function copyToClipboard() {
  var copyText = document.getElementById("out")
  var textArea = document.createElement("textarea");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
}

function convert() {
    var input = document.getElementById("latin").value;
    var output = document.getElementById("out");
    output.innerHTML = transliterate(input);
}

function transliterate(word) {
  word = word.toLowerCase();
  const charCodes = {
    //three letter keys
    ngj:  '\u{10514}\u{1050B}',
    //two letter keys
    nd:   '\u{10505}',
    dh:   '\u{10506}',
    gj:   '\u{1050B}',
    ll:   '\u{10511}',
    nj:   '\u{10515}',
    ng:   '\u{10514}\u{1050A}',
    rr:   '\u{1051A}',
    sh:   '\u{1051C}',
    th:   '\u{1051E}',
    zh:   '\u{10524}',
    gh:   '\u{10525}',
    kh:   '\u{10527}',
    xh:   '\u{10502}',
    //single letter keys
    a:    '\u{10500}',
    b:    '\u{10501}',
    c:    '\u{10502}',
    ç:    '\u{10503}',
    e:    '\u{10508}',
    ë:    '\u{10507}',
    f:    '\u{10509}',
    d:    '\u{10504}',
    g:    '\u{1050A}',
    h:    '\u{1050C}',
    i:    '\u{1050D}',
    j:    '\u{1050E}',
    k:    '\u{1050F}',
    l:    '\u{10510}',
    m:    '\u{10512}',
    n:    '\u{10513}',
    o:    '\u{10516}',
    p:    '\u{10517}',
    q:    '\u{10518}',
    r:    '\u{10519}',
    s:    '\u{1051B}',
    t:    '\u{1051D}',
    u:    '\u{1051F}',
    v:    '\u{10520}',
    x:    '\u{10521}',
    y:    '\u{10522}',
    z:    '\u{10523}'
  };
  const pattern = new RegExp(
    Object.keys(charCodes).join('|'),
    'g'
  );
  return word.replace(pattern, match => charCodes[match]);
}