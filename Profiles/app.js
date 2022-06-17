
let user1Button = document.querySelectorAll(".profile button");

function lockedProfile() {
    var profile = this.parentElement;
    var lockRadio = profile.childNodes[5];
    var hidden = profile.childNodes[18];
    
    if(lockRadio.checked) {
    }
    else {
        if(hidden.style.display == "none") {
            hidden.style.display = "contents";
            this.textContent = "Hide it";
        }
        else {
            hidden.style.display = "none";
            this.textContent = "Show more";
        }
    }
}

user1Button.forEach(e => e.addEventListener('click', lockedProfile));