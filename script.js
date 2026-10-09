/* =========================================================
   LOVE.exe
   HEX ❤️ NICOLEH
========================================================= */


/* =========================================================
   PERSONAL INFORMATION
========================================================= */

const YOU = "Hex";
const HER = "Wifey";
const HER_NAME = "Nicoleh";

const MONTHSARY = "October 26";

// October 26 = 1026
const FINAL_PASSWORD = "1026";


/* =========================================================
   SCREEN SYSTEM
========================================================= */

let currentScreen = 0;

const screens =
    document.querySelectorAll(".screen");

const progress =
    document.getElementById("progress");


function showScreen(number) {

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const target =
        document.getElementById(`screen${number}`);

    if (target) {

        target.classList.add("active");

        currentScreen = number;

        updateProgress();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


function updateProgress() {

    const percentage =
        (currentScreen / 14) * 100;

    progress.style.width =
        `${percentage}%`;

}


/* =========================================================
   BACKGROUND STARS
========================================================= */

const starsContainer =
    document.getElementById("stars");

for (let i = 0; i < 140; i++) {

    const star =
        document.createElement("div");

    star.className = "star-bg";

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    starsContainer.appendChild(star);

}


/* =========================================================
   FLOATING HEARTS
========================================================= */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";

    heart.textContent =
        Math.random() > 0.5
            ? "♥"
            : "♡";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.bottom =
        "-30px";

    heart.style.fontSize =
        (10 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (3 + Math.random() * 3) + "s";

    document
        .getElementById("hearts")
        .appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}

setInterval(createHeart, 700);


/* =========================================================
   BOOT SEQUENCE
========================================================= */

const bootText =
    document.getElementById("bootText");

const startBtn =
    document.getElementById("startBtn");

const bootLines = [

    "Initializing LOVE.exe...",
    "Loading memories...",
    "Searching relationship database...",
    "Subject detected...",
    "NICOLEH.exe found.",
    "Relationship status: IMPORTANT.",
    "Warning: excessive cuteness detected.",
    "System ready."
];

let bootIndex = 0;


function bootSequence() {

    if (bootIndex < bootLines.length) {

        bootText.innerHTML +=
            bootLines[bootIndex] + "<br>";

        bootIndex++;

        setTimeout(
            bootSequence,
            600
        );

    } else {

        startBtn.classList.remove("hidden");

    }

}

bootSequence();


startBtn.addEventListener(
    "click",
    () => {

        showScreen(1);

    }
);


/* =========================================================
   LOCK 01
========================================================= */

document
    .querySelectorAll("#screen3 .choice")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const status =
                    document.querySelector(
                        "#screen3 .lock-status"
                    );

                if (
                    button.dataset.answer ===
                    "correct"
                ) {

                    status.textContent =
                        "✓ ACCESS GRANTED — THE STORY BEGINS.";

                    setTimeout(
                        () => showScreen(4),
                        1000
                    );

                } else {

                    status.textContent =
                        "✕ WRONG. Try again, Wifey. 😌";

                }

            }
        );

    });


/* =========================================================
   DON'T CLICK THE HEART — SCATTERING HEART
========================================================= */

const dangerHeart =
    document.getElementById("dangerHeart");

const dangerMessage =
    document.getElementById("dangerMessage");

let heartClicks = 0;


function moveHeartRandomly() {

    const padding = 100;

    const maxX =
        window.innerWidth - dangerHeart.offsetWidth - padding;

    const maxY =
        window.innerHeight - dangerHeart.offsetHeight - padding;

    const randomX =
        padding / 2 +
        Math.random() * Math.max(0, maxX);

    const randomY =
        padding / 2 +
        Math.random() * Math.max(0, maxY);

    const rotation =
        Math.floor(Math.random() * 60) - 30;

    const scale =
        0.7 + Math.random() * 0.5;

    dangerHeart.style.position = "fixed";

    dangerHeart.style.left =
        randomX + "px";

    dangerHeart.style.top =
        randomY + "px";

    dangerHeart.style.transform =
        `rotate(${rotation}deg) scale(${scale})`;

    dangerHeart.style.zIndex = "100";

}


dangerHeart.addEventListener(
    "click",
    () => {

        heartClicks++;

        if (heartClicks === 1) {

            dangerMessage.textContent =
                "WHY DID YOU CLICK IT?! 😭";

            moveHeartRandomly();

        }

        else if (heartClicks === 2) {

            dangerMessage.textContent =
                "I TOLD YOU NOT TO 😭";

            moveHeartRandomly();

        }

        else if (heartClicks === 3) {

            dangerMessage.textContent =
                "Okay... you really don't listen to me.";

            moveHeartRandomly();

        }

        else if (heartClicks === 4) {

            dangerMessage.textContent =
                "STOP CHASING THE HEART 😭";

            moveHeartRandomly();

        }

        else {

            dangerMessage.textContent =
                "...but that's one of the things I love about you. ❤️";

            dangerHeart.style.position = "relative";

            dangerHeart.style.left = "auto";

            dangerHeart.style.top = "auto";

            dangerHeart.style.transform =
                "scale(1.2)";

            setTimeout(
                () => showScreen(2),
                1800
            );

        }

    }
);

/* =========================================================
   LOVE EXPERIMENT
========================================================= */

const runExperiment =
    document.getElementById("runExperiment");

const experimentResult =
    document.getElementById(
        "experimentResult"
    );


runExperiment.addEventListener(
    "click",
    () => {

        const values = [
            "HIGH",
            "HER",
            "MAX",
            "HER",
            "ERROR"
        ];

        const spans =
            document.querySelectorAll(
                "#experimentTests span"
            );

        spans.forEach(
            (span, index) => {

                setTimeout(
                    () => {

                        span.textContent =
                            values[index];

                    },
                    index * 500
                );

            }
        );

        setTimeout(
            () => {

                experimentResult.innerHTML = `
                    RESULT:<br><br>
                    There is no cure. ❤️<br>
                    Hex is permanently in love.
                `;

            },
            3000
        );

        setTimeout(
            () => showScreen(3),
            5000
        );

    }
);


/* =========================================================
   LOCK 02 — MEMORY
========================================================= */

document
    .querySelectorAll(".wrong-memory")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document.querySelector(
                    "#screen4 .lock-status"
                ).textContent =
                    "✕ Nice try. That's not our memory. 😭";

            }
        );

    });


document
    .querySelector(".correct-memory")
    .addEventListener(
        "click",
        () => {

            document.querySelector(
                "#screen4 .lock-status"
            ).textContent =
                "✓ MEMORY VERIFIED.";

            setTimeout(
                () => showScreen(5),
                1000
            );

        }
    );


/* =========================================================
   LOCK 03 — PASSWORD
========================================================= */

const passwordInput =
    document.getElementById(
        "passwordInput"
    );

const passwordBtn =
    document.getElementById(
        "passwordBtn"
    );

const passwordMessage =
    document.getElementById(
        "passwordMessage"
    );


passwordBtn.addEventListener(
    "click",
    () => {

        const answer =
            passwordInput.value
                .trim()
                .toLowerCase();

        if (
            answer === FINAL_PASSWORD ||
            answer === "october26" ||
            answer === "october 26"
        ) {

            passwordMessage.textContent =
                "✓ PASSWORD ACCEPTED.";

            setTimeout(
                () => showScreen(6),
                1000
            );

        } else {

            passwordMessage.textContent =
                "✕ ACCESS DENIED. Think about October 26. 👀";

        }

    }
);


/* =========================================================
   LOCK 04 — WHO LOVES WHO MORE?
========================================================= */

const meBtn =
    document.getElementById("meBtn");

const youBtn =
    document.getElementById("youBtn");

const choiceResult =
    document.getElementById(
        "choiceResult"
    );


meBtn.addEventListener(
    "click",
    () => {

        choiceResult.textContent =
            "CORRECT. Obviously. 😌❤️";

        setTimeout(
            () => showScreen(7),
            1500
        );

    }
);


youBtn.addEventListener(
    "click",
    () => {

        choiceResult.textContent =
            "❌ Incorrect. We both know it's me. 😌";

        setTimeout(
            () => showScreen(7),
            1800
        );

    }
);


/* =========================================================
   LOCK 05 — TIMELINE
========================================================= */

document
    .getElementById("timelineBtn")
    .addEventListener(
        "click",
        () => {

            showScreen(8);

        }
    );


/* =========================================================
   LOCK 06 — HIDDEN HEART
========================================================= */

document
    .getElementById("hiddenHeart")
    .addEventListener(
        "click",
        () => {

            const message =
                document.getElementById(
                    "hiddenMessage"
                );

            message.innerHTML =
                "♥ YOU FOUND IT. Some things are worth looking for. ♥";

            setTimeout(
                () => showScreen(9),
                1800
            );

        }
    );


/* =========================================================
   UNIVERSE / CONSTELLATION
========================================================= */

const constellation =
    document.getElementById(
        "constellation"
    );

const starCounter =
    document.getElementById(
        "starCounter"
    );

const universeMessage =
    document.getElementById(
        "universeMessage"
    );


const universeMemories = [

    "The first conversation. ❤️",

    "The moment we started getting closer.",

    "The calls that somehow lasted forever.",

    "The random laughs and chaos.",

    "The little moments that became important.",

    "The memories we haven't made yet.",

    "And finally... us."
];


let starsFound = 0;


const starPositions = [

    [18, 28],
    [32, 18],
    [47, 32],
    [60, 20],
    [72, 38],
    [52, 55],
    [38, 70]

];


starPositions.forEach(
    (position, index) => {

        const star =
            document.createElement("button");

        star.className =
            "constellation-star";

        star.style.left =
            position[0] + "%";

        star.style.top =
            position[1] + "%";

        star.dataset.index =
            index;

        star.addEventListener(
            "click",
            () => {

                if (
                    star.classList.contains(
                        "found"
                    )
                ) {
                    return;
                }

                star.classList.add("found");

                starsFound++;

                starCounter.textContent =
                    `${starsFound} / 7 stars discovered`;

                universeMessage.textContent =
                    universeMemories[index];

                createHeart();

                if (starsFound === 7) {

                    setTimeout(
                        () => {

                            universeMessage.innerHTML = `
                                Every star represents a moment we've shared.<br><br>
                                And somehow, out of billions of people...<br>
                                <strong>I found you.</strong> ❤️
                            `;

                            setTimeout(
                                () => showScreen(10),
                                3000
                            );

                        },
                        700
                    );

                }

            }
        );

        constellation.appendChild(star);

    }
);


/* =========================================================
   MEMORY MACHINE
========================================================= */

const yearInput =
    document.getElementById(
        "yearInput"
    );

const searchMemory =
    document.getElementById(
        "searchMemory"
    );

const memoryResult =
    document.getElementById(
        "memoryResult"
    );


searchMemory.addEventListener(
    "click",
    () => {

        const year =
            yearInput.value.trim();

        if (!year) {

            memoryResult.innerHTML =
                "Enter a year first. 👀";

            return;

        }

        memoryResult.innerHTML = `
            <div class="memory-found">
                <h2>SEARCHING DATABASE...</h2>
                <p>Searching ${year}...</p>
            </div>
        `;

        setTimeout(
            () => {

                memoryResult.innerHTML = `
                    <div class="memory-found">
                        <h2>MATCH FOUND.</h2>

                        <p>
                            MEMORY #001
                        </p>

                        <br>

                        <p>
                            Some memories don't need
                            a perfect date to matter.
                            They just need the right person.
                        </p>

                    </div>
                `;

            },
            1800
        );

        setTimeout(
            () => showScreen(11),
            4500
        );

    }
);


/* =========================================================
   SCREEN 11 — THE WEBSITE THAT KNOWS HER
========================================================= */

const predictionQuestion =
    document.getElementById("predictionQuestion");

const predictionButtons =
    document.getElementById("predictionButtons");

const predictionResult =
    document.getElementById("predictionResult");

const predictionMemory =
    document.getElementById("predictionMemory");

const predictionTitle =
    document.getElementById("predictionTitle");

const predictionCard =
    document.getElementById("predictionCard");


/* =========================================================
   QUESTION 1 — FAVORITE COLOR
========================================================= */

function questionOne() {

    predictionQuestion.textContent =
        "What's your favorite color?";

    predictionResult.textContent = "";

    predictionMemory.textContent = "";

    predictionButtons.innerHTML = `

        <button class="prediction-btn color-choice">
            🔴 Red
        </button>

        <button class="prediction-btn color-choice">
            🟠 Orange
        </button>

        <button class="prediction-btn color-choice">
            🟡 Yellow
        </button>

        <button class="prediction-btn color-choice">
            🟢 Green
        </button>

        <button class="prediction-btn color-choice">
            🔵 Blue
        </button>

        <button class="prediction-btn color-choice">
            🟣 Purple
        </button>

        <button class="prediction-btn color-choice">
            🩷 Pink
        </button>

    `;


    const colorChoices =
        predictionButtons.querySelectorAll(
            ".color-choice"
        );


    colorChoices.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    /*
                     * Turn every choice black
                     */

                    colorChoices.forEach(
                        choice => {

                            choice.style.background =
                                "#000";

                            choice.style.color =
                                "#000";

                            choice.style.borderColor =
                                "#000";

                        }
                    );


                    /*
                     * Show funny popup
                     */

                    showFunnyPopup(
                        "u racists 😭"
                    );


                    /*
                     * Continue
                     */

                    setTimeout(
                        () => {

                            questionTwo();

                        },
                        1800
                    );

                }
            );

        }
    );

}


/* =========================================================
   QUESTION 2 — FAVORITE FOOD
   HEX BUTTONS ALL OVER THE SCREEN
========================================================= */

function questionTwo() {

    predictionQuestion.textContent =
        "What's your favorite food?";

    predictionResult.textContent = "";

    predictionMemory.textContent = "";

    /*
     * Hide the normal button container
     * because the Hex buttons will be
     * placed directly on the whole screen.
     */
    predictionButtons.innerHTML = "";


    /*
     * Make sure the card itself stays
     * above the background, but the Hex
     * buttons can appear anywhere.
     */
    predictionCard.style.position =
        "relative";


    /*
     * Number of Hex buttons
     */

    const hexCount = 35;


    for (
        let i = 0;
        i < hexCount;
        i++
    ) {

        const hexButton =
            document.createElement("button");


        hexButton.className =
            "prediction-btn hex-food-button";


        hexButton.textContent =
            "Hex ❤️";


        /*
         * FIXED means the button is positioned
         * relative to the ENTIRE browser window.
         */

        hexButton.style.position =
            "fixed";


        /*
         * Keep them away from the extreme
         * edges of the screen.
         */

        const randomX =
            Math.random() * 90 + 5;

        const randomY =
            Math.random() * 80 + 10;


        hexButton.style.left =
            randomX + "vw";


        hexButton.style.top =
            randomY + "vh";


        /*
         * Make sure Hex buttons appear
         * above the question/card.
         */

        hexButton.style.zIndex =
            "9999";


        /*
         * Random rotation
         * makes them look scattered.
         */

        const rotation =
            Math.random() * 40 - 20;


        hexButton.style.transform =
            `translate(-50%, -50%) rotate(${rotation}deg)`;


        /*
         * Random size
         */

        const size =
            Math.random() * 0.5 + 0.8;


        hexButton.style.scale =
            size;


        document.body.appendChild(
            hexButton
        );


        /*
         * Clicking ANY Hex
         */

        hexButton.addEventListener(
            "click",
            () => {

                /*
                 * Remove every Hex
                 */

                document
                    .querySelectorAll(
                        ".hex-food-button"
                    )
                    .forEach(
                        hex => {

                            hex.remove();

                        }
                    );


                /*
                 * Show HMMM
                 */

                showFunnyPopup(
                    "HMMM 👀"
                );


                /*
                 * Continue to Question 3
                 */

                setTimeout(
                    () => {

                        questionThree();

                    },
                    1800
                );

            }
        );

    }

}
    


/* =========================================================
   QUESTION 3 — FAVORITE DRINK
========================================================= */

function questionThree() {

    predictionQuestion.textContent =
        "What's your favorite drink?";

    predictionResult.textContent = "";

    predictionMemory.textContent = "";

    predictionButtons.innerHTML = "";


    /*
     * Coffee cup
     */

    const coffee =
        document.createElement("div");


    coffee.className =
        "coffee-animation";


    coffee.innerHTML = `
        <div class="coffee-cup">

            <div class="coffee-liquid"></div>

            <div class="coffee-handle"></div>

        </div>

        <div class="coffee-steam steam-one"></div>

        <div class="coffee-steam steam-two"></div>

        <div class="coffee-steam steam-three"></div>
    `;


    predictionButtons.appendChild(
        coffee
    );


    /*
     * Message
     */

    setTimeout(
        () => {

            showFunnyPopup(
                "hmm definitely coffee ☕"
            );

        },
        1200
    );


    /*
     * Continue
     */

    setTimeout(
        () => {

            questionFour();

        },
        3000
    );

}


/* =========================================================
   QUESTION 4 — FAVORITE GAME
========================================================= */

function questionFour() {

    predictionQuestion.textContent =
        "What's your favorite game?";

    predictionResult.textContent = "";

    predictionMemory.textContent = "";

    predictionButtons.innerHTML = `

        <button class="prediction-btn game-choice">
            Valorant
        </button>

        <button class="prediction-btn game-choice">
            Dota 2
        </button>

        <button class="prediction-btn game-choice">
            Stardew Valley
        </button>

        <button class="prediction-btn game-choice">
            Assassin's Creed
        </button>

    `;


    const gameChoices =
        predictionButtons.querySelectorAll(
            ".game-choice"
        );


    gameChoices.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    showFunnyPopup(
                        "Nah u like everything 😭"
                    );


                    gameChoices.forEach(
                        choice => {

                            choice.disabled =
                                true;

                        }
                    );


                    setTimeout(
                        () => {

                            questionFive();

                        },
                        1800
                    );

                }
            );

        }
    );

}


/* =========================================================
   QUESTION 5 — FAVORITE ANIMAL
========================================================= */

function questionFive() {

    predictionQuestion.textContent =
        "What's your favorite animal?";

    predictionResult.textContent = "";

    predictionMemory.textContent = "";

    predictionButtons.innerHTML = `

        <button
            class="prediction-btn animal-choice"
            data-animal="cat"
        >
            🐱 Cat
        </button>

        <button
            class="prediction-btn animal-choice"
            data-animal="dog"
        >
            🐶 Dog
        </button>

        <button
            class="prediction-btn animal-choice"
            data-animal="bunny"
        >
            🐰 Bunny
        </button>

    `;


    const animalChoices =
        predictionButtons.querySelectorAll(
            ".animal-choice"
        );


    animalChoices.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const animal =
                        button.dataset.animal;


                    if (
                        animal === "cat"
                    ) {

                        showCatAnimation();

                    } else if (
                        animal === "dog"
                    ) {

                        showFunnyPopup(
                            "A doggo! 🐶"
                        );

                    } else {

                        showFunnyPopup(
                            "A bunny! 🐰"
                        );

                    }


                    animalChoices.forEach(
                        choice => {

                            choice.disabled =
                                true;

                        }
                    );


                    setTimeout(
                        () => {

                            questionSix();

                        },
                        3000
                    );

                }
            );

        }
    );

}


/* =========================================================
   QUESTION 6 — FAVORITE PERSON
========================================================= */

function questionSix() {
    predictionTitle.textContent = "THE WEBSITE KNOWS YOU.";
    predictionQuestion.textContent = "Who's your favorite person?";

    // Clear previous choices
    predictionButtons.innerHTML = "";

    let hexButton = document.createElement("button");
    hexButton.className = "prediction-btn hex-person-button";
    hexButton.textContent = "Hex ❤️";

    // Put the button inside the normal choices area first
    predictionButtons.appendChild(hexButton);

    let clicks = 0;

    hexButton.addEventListener("click", () => {
        clicks++;

        // After 10 clicks
        if (clicks >= 10) {
            hexButton.remove();

            showFunnyPopup("I KNEW IT. ❤️");

            setTimeout(() => {
                showScreen(12);
            }, 1800);

            return;
        }

        // Move the button to a random location
        hexButton.style.position = "fixed";

        // Keep it away from the extreme edges
        const randomX = 10 + Math.random() * 80;
        const randomY = 15 + Math.random() * 70;

        const randomRotation =
            Math.floor(Math.random() * 60) - 30;

        const randomScale =
            0.8 + Math.random() * 0.5;

        hexButton.style.left = randomX + "vw";
        hexButton.style.top = randomY + "vh";

        hexButton.style.transform =
            `translate(-50%, -50%) rotate(${randomRotation}deg) scale(${randomScale})`;

        // Keep it above everything
        hexButton.style.zIndex = "99999";
    });
}

/* =========================================================
   FUNNY POPUP
========================================================= */

function showFunnyPopup(
    message
) {

    const popup =
        document.createElement("div");


    popup.className =
        "funny-popup";


    popup.textContent =
        message;


    document.body.appendChild(
        popup
    );


    setTimeout(
        () => {

            popup.classList.add(
                "show"
            );

        },
        10
    );


    setTimeout(
        () => {

            popup.classList.remove(
                "show"
            );

        },
        1400
    );


    setTimeout(
        () => {

            popup.remove();

        },
        1900
    );

}


/* =========================================================
   CAT ANIMATION
========================================================= */

function showCatAnimation() {

    const cat =
        document.createElement("div");


    cat.className =
        "walking-cat";


    cat.innerHTML =
        "🐈";


    document.body.appendChild(
        cat
    );


    showFunnyPopup(
        "Definitely a cat. 🐱"
    );


    setTimeout(
        () => {

            cat.remove();

        },
        5000
    );

}


/* =========================================================
   START QUESTION 1
========================================================= */

questionOne();


/* =========================================================
   RANDOM LOVE GENERATOR
========================================================= */

const loveMessages = [

    "💗 You are illegally cute today.",

    "💗 Your boyfriend misses you.",

    "💗 You owe me a hug.",

    "💗 Emergency: boyfriend requires lambing.",

    "💗 Reminder: You are someone's favorite person.",

    "💗 System notification: Nicoleh is loved.",

    "💗 WARNING: excessive Wifey detected.",

    "💗 Hex.exe is thinking about you again.",

    "💗 You are the favorite notification.",

    "💗 Relationship status: still obsessed."

];


const generatedLove =
    document.getElementById(
        "generatedLove"
    );

const generateLove =
    document.getElementById(
        "generateLove"
    );

let generationCount = 0;


generateLove.addEventListener(
    "click",
    () => {

        generationCount++;

        if (generationCount < 5) {

            const random =
                Math.floor(
                    Math.random() *
                    loveMessages.length
                );

            generatedLove.textContent =
                loveMessages[random];

        } else {

            generatedLove.innerHTML = `
                GENERATING...<br>
                GENERATING...<br>
                GENERATING...<br><br>

                <strong>
                ERROR 404
                </strong>
                <br><br>

                There are not enough words
                to describe how much he loves you. ❤️
            `;

            setTimeout(
                () => showFinal(),
                3500
            );

        }

    }
);
/* =========================================================
   SOMETHING IS FOLLOWING YOU
========================================================= */

const followText = document.getElementById("followText");
const followCounter = document.getElementById("followCounter");
const followMessage = document.getElementById("followMessage");
const followContinue = document.getElementById("followContinue");

let followedHearts = 0;
let followStarted = false;
let followFinished = false;
let followHeartElements = [];


// Start the effect when Screen 12 appears
function startFollowingEffect() {

    if (followStarted) return;

    followStarted = true;
    followedHearts = 0;
    followHeartElements = [];

    followText.textContent =
        "Move your mouse...";

    followCounter.textContent =
        "Something is watching you. 👀";


    // Create the first heart after a short delay
    setTimeout(() => {

        createFollowingHeart();

    }, 500);

}


// Create a heart that follows the mouse
function createFollowingHeart() {

    if (followFinished) return;

    followedHearts++;

    const heart = document.createElement("div");

    heart.className = "mouse-heart";

    heart.textContent = "♥";

    heart.style.left = "50%";
    heart.style.top = "50%";

    document.body.appendChild(heart);

    followHeartElements.push(heart);


    // Update counter
    followCounter.textContent =
        `${followedHearts} hearts detected.`;


    // Different messages as more hearts appear

    if (followedHearts === 1) {

        followText.textContent =
            "Wait... did you see that? 👀";

    }

    if (followedHearts === 5) {

        followText.textContent =
            "Something is following you...";

    }

    if (followedHearts === 10) {

        followText.textContent =
            "There are more of them now. 😭";

    }

    if (followedHearts === 20) {

        followText.textContent =
            "WHY ARE THERE SO MANY?!";

    }


    // Make the heart follow the mouse
    heart.dataset.followIndex =
        followHeartElements.length - 1;


    // Stop at 37 hearts
    if (followedHearts >= 37) {

        finishFollowing();

        return;

    }


    // Create another heart
    setTimeout(() => {

        createFollowingHeart();

    }, 180);

}


// Mouse movement
document.addEventListener("mousemove", (event) => {

    if (currentScreen !== 12) return;

    if (!followStarted) {

        startFollowingEffect();

    }


    followHeartElements.forEach((heart, index) => {

        if (!heart || !heart.isConnected) return;

        // Each heart follows the mouse,
        // but with a different delay/offset

        const delay = index * 25;

        setTimeout(() => {

            if (!heart || !heart.isConnected) return;

            heart.style.left =
                event.clientX + "px";

            heart.style.top =
                event.clientY + "px";

        }, delay);

    });

});


// Final message
function finishFollowing() {

    if (followFinished) return;

    followFinished = true;


    followText.textContent =
        "You've been followed by 37 hearts.";

    followCounter.textContent =
        "You've been followed by 37 hearts.";


    followMessage.innerHTML = `
        Actually...
        <br><br>

        <strong>
            You've been followed by me.
        </strong>
        ❤️
    `;


    if (followContinue) {

        followContinue.classList.remove("hidden");

    }

}


// Continue button
if (followContinue) {

    followContinue.addEventListener(
        "click",
        () => {

            showScreen(13);

        }
    );

}
/* =========================================================
   FINAL PASSWORD
========================================================= */

const finalPasswordInput =
    document.getElementById(
        "finalPasswordInput"
    );

const finalPasswordBtn =
    document.getElementById(
        "finalPasswordBtn"
    );

const finalPasswordMessage =
    document.getElementById(
        "finalPasswordMessage"
    );


if (finalPasswordBtn) {

    finalPasswordBtn.addEventListener(
        "click",
        () => {

            const answer =
                finalPasswordInput
                    ? finalPasswordInput.value
                        .trim()
                        .toLowerCase()
                    : "";


            if (
                answer === "1026" ||
                answer === "october26" ||
                answer === "october 26"
            ) {

                if (finalPasswordMessage) {

                    finalPasswordMessage.innerHTML = `
                        <strong>
                            PASSWORD ACCEPTED.
                        </strong>
                        <br><br>
                        Welcome home, ${HER_NAME}. ❤️
                    `;

                }


                if (finalPasswordInput) {

                    finalPasswordInput.style.display =
                        "none";

                }


                finalPasswordBtn.style.display =
                    "none";


                setTimeout(
                    () => showScreen(14),
                    2500
                );


            } else {

                if (finalPasswordMessage) {

                    finalPasswordMessage.textContent =
                        "ACCESS DENIED. You have seen the clue before. 👀";

                }

            }

        }
    );

}
/* =========================================================
   THE INFINITE LETTER
========================================================= */

const letterText =
    document.getElementById(
        "letterText"
    );

const nextLetterBtn =
    document.getElementById(
        "nextLetterBtn"
    );

const letterProgress =
    document.getElementById(
        "letterProgress"
    );

const finalLetterEnding =
    document.getElementById(
        "finalLetterEnding"
    );


const letterLines = [

    "I didn't know...",

    "...that someone could become...",

    "...such an important part of my life.",

    "But then I met you.",

    "Somewhere between the games...",

    "...the conversations...",

    "...the calls...",

    "...the laughs...",

    "...and all the random little moments...",

    "you became my favorite person.",

    "I don't know exactly when it happened.",

    "I just know that it did.",

    "And I'm really glad it did.",

    "Because now...", 

    "...I can't imagine my life without you.",

    "You became my Wifey.",

    "My baby.",

    "My favorite person to annoy.",

    "My favorite person to love.",

    "And somehow...",

    "out of billions of people...",

    "I found you. ❤️"

];


let letterIndex = 0;


function showLetterLine() {

    if (
        letterIndex >=
        letterLines.length
    ) {

        finishLetter();

        return;

    }


    if (letterText) {

        letterText.style.animation =
            "none";

        // Force animation restart
        void letterText.offsetWidth;

        letterText.style.animation =
            "letterAppear 0.8s ease forwards";


        letterText.textContent =
            letterLines[
                letterIndex
            ];

    }


    if (letterProgress) {

        letterProgress.textContent =
            `MESSAGE ${
                String(
                    letterIndex + 1
                ).padStart(2, "0")
            } / ${
                letterLines.length
            }`;

    }


    letterIndex++;

}


function finishLetter() {

    if (letterText) {

        letterText.style.display =
            "none";

    }


    if (nextLetterBtn) {

        nextLetterBtn.style.display =
            "none";

    }


    if (letterProgress) {

        letterProgress.textContent =
            "MESSAGE COMPLETE ❤️";

    }


    if (finalLetterEnding) {

        finalLetterEnding.classList.add(
            "show"
        );

    }


    // Hearts everywhere
    for (
        let i = 0;
        i < 50;
        i++
    ) {

        setTimeout(
            createHeart,
            i * 80
        );

    }

}


if (nextLetterBtn) {

    nextLetterBtn.addEventListener(
        "click",
        showLetterLine
    );

}
/* =========================================================
   FINAL REVEAL
========================================================= */

function showFinal() {

    showScreen(13);

    document.body.style.background =
        "#000";

    setTimeout(
        () => {

            document
                .getElementById(
                    "finalLetter"
                )
                .classList.add("show");

            for (let i = 0; i < 30; i++) {

                setTimeout(
                    createHeart,
                    i * 100
                );

            }

        },
        2500
    );

}


/* =========================================================
   INITIALIZE
========================================================= */

updateProgress();