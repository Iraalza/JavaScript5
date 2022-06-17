
function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      var strokes = document.querySelectorAll(".container tbody > tr");
      var searchString = document.getElementById("searchField").value;

      var searcWords = searchString.split(" ");

      for(var stroke of strokes) {
         stroke.classList.remove("select");
         for(var element of stroke.children) {
            for (var word of searcWords) {
               if(element.textContent.includes(word) && word != "") stroke.classList.add("select");
            }
         }
      }
   }
}