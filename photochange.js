let profilePic = document.getElementById("profile");

let profileState = 0;
function changeState(event) {
    if (profileState) {
        profileState = 0;
        profilePic.src = "images/profileicon.jpg";
    }
    else {
        profileState = 1;
        profilePic.src = "images/profileicon2.jpg";
    }
}

profilePic.addEventListener("click", changeState)