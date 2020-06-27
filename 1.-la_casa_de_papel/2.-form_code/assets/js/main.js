
function validateForm() {
  var capital = document.getElementById("data").value;
  var title = document.getElementById("response");
  if (checkCapital(capital)){
  title.innerHTML = "Welcome to dark mode!";
  }
}
function checkCapital (capital){
  if (capital === 'Berlín' || capital === 'Tokio' || capital === 'Moscú'){

      return true;
  }
}
