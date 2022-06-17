function solve() {
  let text = document.getElementById("text").value.toString().toLowerCase();
  let naming_convention = document.getElementById("naming-convention").value;

  var words = text.split(" ");
  var output;

  switch(naming_convention) {
    case "Camel Case":
      output = words[0];
      for(let i = 1; i < words.length; i++) {
        output += words[i][0].toUpperCase() + words[i].slice(1);
      }
      break;
    case "Pascal Case":
      output = words[0][0].toUpperCase() + words[0].slice(1);
      for(let i = 1; i < words.length; i++) {
       output += words[i][0].toUpperCase() + words[i].slice(1);
      }
      break;
    default:
      output = "Error!";
      break;
  }

  var result = document.getElementById("result").textContent = output;
}