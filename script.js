function send(){
    var input = document.getElementById("text").value;
    // document.getElementById("out").innerText = input;
}

function convert(){
    var input = document.getElementById("text").value;
    var output = document.getElementById("out");

    output.innerHTML = input;
}