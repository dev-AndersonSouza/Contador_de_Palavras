function calcular(){
  var text = document.getElementById("textarea").value;
  var result = text.split(" ").length;

  document.getElementById("resuldado").innerHTML = "Você tem: " + result +  " palavras";
}