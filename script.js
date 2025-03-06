document.getElementById("bgMusic").volume = 0.5; // 20% volume
var messages = [
    "Hellooo Birthday Girllll (click)",
    "CLICK AGAIN !!",
    "OK So Now You Know ",
    "Let Me Play Some Music Just A sec",
    "OKAY Also Some Video",
	"There You Go Sweetheart Now Enjoy✨",
	"Ofc A Happiest Happy Birthday My Queen 👑💕🥳💐",
	"And I Love You So So SO Much ❤",
	"Your Smile Shines So Happy And Bright,  It Fills My Whole Heart With Light.🥺💕",
	"Your Laugh Can Defeat The Darkest Days,  It Helps Me Up In Countless Ways.👩🏿‍🤝‍🧑🏿❤",
	"Your Touch Is So Soft, Your Love Is True,",
	"No One Else Can Be Compared To You.✨",
	"AND AND AND",
	"DO YOU KNOW WHY I LOVE YOU SO MUCH MY DARLING ? ",
	"Through Every Storm And Through Every Bad Night,🌃",
	"Through Every Hard Times And Through Every Fight,🌪",
	"You Will Hold Me Close And Make Things Right.🥺❤",
    "So Here I Stand With Love So Deep,",
    "A Promise To Make It Stronger I Keep",	
	"Coz You Make Me Feel Like Im Living A Teenage Dream 🎶❤",	
	"The Sweetest Part Of Our Every Theme.",	
	"I Never Knew That Love Was Real,",	
	"Until You Came And Made Me Feel.🥺🌹",	
	"The Way You Look, The Way You Care,",	
	"It Shows Me Love Beyond Compare.🙌💕",	
	"No Matter What, No Matter When,",	
	"I'll Love You Now, I'll Love You Then.❤❤❤",	
	"Through Every Joy, Through Every Pain, Through Burning Sun And Pouring Rain",	
	"I’ll Walk With You, I’ll Stay Right Here,",	
	"With Every Smile And Every Tear.",	
	"ALWAYS FOR YOU , ALWAYS WITH YOU 💑❤🌹💕✨",	
	"Coz You Make Me Feel Like Im Living A Teenage Dream 🎶❤",	
];

var messageIndex = 0;
var isMusicPlaying = false;

function showMessage() {
    var surpriseText = document.getElementById("surpriseText");
    var bgMusic = document.getElementById("bgMusic");
    var loveScreen = document.getElementById("loveScreen");
document.addEventListener('click', () => {
let isMusicPlaying = false; // Ensure this is defined

document.addEventListener("click", function () {
    if (!isMusicPlaying) {
        setTimeout(() => {
            document.getElementById("bgMusic").play();
        }, 10000);
        isMusicPlaying = true;
    }
});
if (messageIndex >= messages.length) {
    loveScreen.style.display = "flex";

    // Ensure all elements are fully loaded before fireworks start
    setTimeout(() => {
        console.log("Starting fireworks..."); // Debugging message
        startFireworks();
    }, 1000);

    return;
}
    surpriseText.style.opacity = "0";
    setTimeout(function () {
        surpriseText.innerHTML = messages[messageIndex];
        surpriseText.style.opacity = "1";
        messageIndex++;
    }, 500);
}
function startFireworks() {
    console.log("Fireworks function executed"); // Debugging
    for (let i = 0; i < 35; i++) { // More Fireworks
        setTimeout(createFirework, i * 100); // Faster bursts
    }
}

function createFirework() {
    console.log("Firework created"); // Debugging

    var firework = document.createElement("div");
    firework.className = "firework";

    // Randomly assign different firework colors (Red-Yellow, Blue, Green)
    const colors = ["red", "blue", "green"];
    let selectedColor = colors[Math.floor(Math.random() * colors.length)];
    firework.classList.add(selectedColor);
    console.log("Firework color:", selectedColor); // Debugging

    firework.style.left = Math.random() * 90 + "vw";
    firework.style.top = Math.random() * 50 + "vh";

    // Randomize the firework wire trail angle
    firework.style.setProperty("--trail-angle", Math.random() * 60 - 30 + "deg");

    document.body.appendChild(firework);
console.log("Firework element added:", firework);
    setTimeout(() => {
        firework.remove();
    }, 6000); // Longer explosion duration
}
