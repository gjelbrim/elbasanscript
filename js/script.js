function copyToClipboard() {
    var copyText = document.getElementById("out");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.getElementById("copy").className = "";
    document.getElementById("copy").innerHTML = "🇦🇱"
    setTimeout(() => {
      document.getElementById("copy").className = "fa fa-clone";
      document.getElementById("copy").innerHTML = ""
    }, 1000)
  }
  
  var firstTitle = false;
  
  function changeTitle(){
    document.title = firstTitle ? "🇦🇱 𐔇𐔐𐔁𐔀𐔛𐔀𐔓𐔛𐔂𐔙𐔍𐔗𐔝": "elbasanscri.pt 🇦🇱";
    firstTitle = !firstTitle;
    setTimeout(arguments.callee, 2500);
  }
  
  window.onload = function() {
    changeTitle();
  }