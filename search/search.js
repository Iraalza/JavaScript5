
function search() {
   var ulTowns = document.getElementById("towns");
   var searchString = document.getElementById("searchText").value;

   var matches = 0;

   for(var i = 0; i < ulTowns.children.length; i++) {
      towns.children[i].style.fontWeight = "normal";
      towns.children[i].style.textDecoration = "none";
      if(searchString.includes(ulTowns.children[i].textContent.trim())) {
         matches++;
         towns.children[i].style.fontWeight = "bold";
         towns.children[i].style.textDecoration = "underline";
      }
   }
   var result = document.getElementById("result");
   result.innerHTML = `${matches} matches found`;
}
