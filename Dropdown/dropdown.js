
function addItem() {
    var newItemText = document.getElementById("newItemText");
    var newItemValue = document.getElementById("newItemValue");
    var dropdownMenu = document.getElementById("menu");

    if(newItemText.value == "" || newItemValue == "") return;

    var newElement = document.createElement("option");
    newElement.textContent = `${newItemText.value}: ${newItemValue.value}`;
    dropdownMenu.appendChild(newElement);
}