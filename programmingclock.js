let timeText = document.getElementById("protime");

let birthday = 0;

function textChange() {
    const d = new Date();
    birthday = Math.round(d.getTime()/1000) - 1231718423
    timeText.textContent = `Did you know? I've been programming for ${birthday} seconds!`;
}

setInterval(textChange, 1000);

textChange();