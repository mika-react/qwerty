// ========================================
// 1. MOVE BETWEEN THE THREE PAGES
// ========================================

function goToPage(pageNumber) {
    const selectedPage = document.getElementById("page" + pageNumber);

    if (!selectedPage) return;

    document.querySelectorAll(".page").forEach(function(page) {
        page.classList.remove("active");
    });

    selectedPage.classList.add("active");

    document.querySelectorAll(".dot").forEach(function(dot, index) {
        dot.classList.toggle("active-dot", index === pageNumber - 1);
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ========================================
// 2. BLOW OUT THE CANDLES
// ========================================

function blowCandle(candle) {
    if (candle.classList.contains("blown")) return;

    candle.classList.add("blown");
    candle.setAttribute("aria-pressed", "true");
    candle.setAttribute("aria-label", "Candle blown out");

    const totalCandles = document.querySelectorAll(".candle").length;
    const candlesBlownOut = document.querySelectorAll(".candle.blown").length;
    const candlesLeft = totalCandles - candlesBlownOut;

    const message = document.getElementById("candle-message");

    if (candlesLeft > 0) {
        message.textContent =
            candlesLeft + " candle" +
            (candlesLeft === 1 ? "" : "s") +
            " left!";
    } else {
        message.textContent = " happy birthday to you~ happy birthday to youuuu~";

        document.getElementById("celebration").hidden = false;
        document.getElementById("reset-cake").hidden = true;

        launchConfetti();
    }
}


// ========================================
// 3. CONFETTI CELEBRATION
// ========================================

function launchConfetti() {
    const colors = [
        "#5b9ded",
        "#a8d8ff",
        "#f5b5d0",
        "#ffffff",
        "#ffd76a",
        "#8ac8f9"
    ];

    for (let i = 0; i < 120; i++) {
        const piece = document.createElement("div");

        piece.classList.add("confetti");

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDelay = Math.random() * 1.5 + "s";

        piece.style.animationDuration =
            (2.5 + Math.random() * 2) + "s";

        piece.style.width = (6 + Math.random() * 8) + "px";
        piece.style.height = (8 + Math.random() * 12) + "px";

        document.body.appendChild(piece);

        piece.addEventListener("animationend", function() {
            piece.remove();
        });
    }
}


// ========================================
// 4. RESET THE CAKE
// ========================================

function resetCake() {
    document.querySelectorAll(".candle").forEach(function(candle, index) {
        candle.classList.remove("blown");

        candle.setAttribute("aria-pressed", "false");
        candle.setAttribute("aria-label", "Blow out candle " + (index + 1));
    });

    document.getElementById("celebration").hidden = true;
    document.getElementById("reset-cake").hidden = false;

    document.getElementById("candle-message").textContent =
        "5 candles left! ";
}


// ========================================
// 5. THE 100 REASONS I LOVE YOU
// ========================================

const reasons = [
    "Your smile, it literally brightens my day!!",
    "Your love for the Lord",
    "Your laugh, it's so contagious",
    "You give me peace",
    "Your kindness",
    "Your inquisitiveness",
    "Your hunger for the Word",
    "Your eyebrows, absolutely stunning!!",
    "Your luscious lips",
    "Your voice, it makes me giggle whenever I hear it hehe",
    "Your hair (aap takle nhi ho aur baal nhi jhar rhe T T)",
    "Your love towards me",
    "Your patience",
    "How you listen so attentively",
    "How you remember little details about me",
    "Your honesty about everything, even your shortcomings!",
    "Your heart to want to serve the poor and the needy",
    "How you want to be a better person each day!",
    "Your jokes ahaha and how funny you are",
    "You're so charming",
    "Your jawlineee",
    "YOUR FACE!!",
    "Your physique",
    "Your fire for God",
    "Your desire to evangelise",
    "Your empathy",
    "Your good morning and good night messages.",
    "How you appreciate people for who they are!",
    "You're so adorable.",
    "How you make feel safe around you",
    "The way you love animals",
    " Your curiosity",
    "Your desire to become the person the Lord has called you to be.",
    "The way you care about the people.",
    " Your funny expressions lol",
    " Your hands eheh they look stronggg",
    "The way you tease me",
    "How we can be silly together ",
    "The way you talk about Our Father.",
    " I love how you try to never miss Church.",
    " Your diligence",
    "The way you give me your time.",
    " You are so so humble.",
    " How you're always open about your struggles!",
    "How you make me feel heard instead of judged.",
    " I love how you listen to me so attentively",
    " The way you accept my shortcomings",
    " The way you allow me to speak first when we talk at the same time.",
    " How cheerful you are!!",
    " Your double texts",
    " Your long paragraphs you write.",
    " How you appreciate the thing i do, be it small even.",
    " I love how I can run to you after God ",
   
    " How you make me wanna be a better person",
    " You don't keep records of my wrongdoings",
    " You lead me to Christ",
    " You're strong",
    "How you make me want to become a better person.",


  "The way you encourage me to trust God ",
  "You bring joy and laughter ",
 
  "You're so handsomeeee.",
  " Your self-control",
  " I love how serious you are about us",
  " Ilove it when you share things about you ",
  " The way you made sure i was never uncomfortable",
  " Thank you for making the first move hehe.",
  " Your boldness",
  " Your courage",
  "The way you always go back to God",
  " Your welcoming nature",
  " The way you see the world so differently",
  "How passionately you pursue the things God has placed on your heart.",
  "The way your actions make me feel loved. ",
  " Your warmth",
  "Thank you for your presence",
  " You've made me view the world from a different prespective.",
  "How you are growing alongside me",
  " I just love how close you are to the brothers and sisters",
  "How you make me hopeful about our future ",
  " I really appreciate you efforts",
  "How you remind me of the beauty of bearing one another's burdens",
  "The way I want to learn to love you more each day.",
  " Your ability to teach so well.",
  " I love how you pray for me and us",
  "How you share your views and opinions with enthusiasm",
  " You are beautiful inside out",
  "Thank you for being born",
  " The way you speak is so respectful.",
  
  " I thank God whenever i remember you.",
  "How I look forward to what you achieve in your walk with God",
  " i love it when you use your gifts for the Lord",
  " Your hindi is just too good and you bear with me, thank youu ",
  "The way I want to celebrate your accomplishments",
  "Thank you for always including me in most decisions.",
  "The way I want marry you",
  " Well, even your nails are so prettyyyy",
  "Thank you for existing",
 
  
 
  "The way you have become a meaningful part of my life",
  "I pray that our relationship will glorify God.",
 

];


// Display all the reasons on Page 3

function displayReasons() {
    const reasonsContainer = document.getElementById("reasons");

    reasonsContainer.innerHTML = "";

    reasons.forEach((reason) => {
        const reasonCard = document.createElement("div");
        reasonCard.className = "reason";

        reasonCard.innerHTML = `
            <p>${reason}</p>
        `;

        reasonsContainer.appendChild(reasonCard);
    });
}



// Display the reasons when the website loads
displayReasons();


// ========================================
// 6. START THE BIRTHDAY EXPERIENCE AGAIN
// ========================================

function startAgain() {
    resetCake();
    goToPage(1);
}
