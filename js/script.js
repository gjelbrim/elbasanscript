const copyToClipboard = () => {
  const outputElement = document.getElementById('out');
  outputElement.select();
  outputElement.setSelectionRange(0, 99999);
  document.execCommand('copy');
  document.getElementById('copy').className = '';
  document.getElementById('copy').innerHTML = '🇦🇱';
  setTimeout(() => {
    document.getElementById('copy').className = 'fa-solid fa-clone';
    document.getElementById('copy').innerHTML = '';
  }, 1000);
};
  
  let firstTitle = false;
  
  const toggleTitle = () => {
    firstTitle = !firstTitle;
    document.title = firstTitle ? "🇦🇱 𐔇𐔐𐔁𐔀𐔛𐔀𐔓𐔛𐔂𐔙𐔍𐔗𐔝": "elbasanscri.pt 🇦🇱";
    setTimeout(toggleTitle, 2500);
  }

  toggleTitle();