
function toggle() {
    var text = document.querySelector("#extra");
    var button = document.querySelector(".button");

    if(text.style.display == "none") {
        text.style.display = "contents";
        button.textContent = "LESS";
    }
    else {
        text.style.display = "none";
        button.textContent = "MORE";
    }
}
