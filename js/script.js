// script.js
const asciiArt = `
.                                 _                                 1
                               .-(_)                                2
                              / _/                                  3
                           .-'   \\                                  4
                          /       '.                                5
                        ,-~--~-~-~-~-,                              6
                       {__.._...__..._}             ,888,           7
       ,888,          /\\##"  6  6  "##/\\          ,88' \`88,         8
     ,88' '88,__     |(\\\`    (__)    \`/)|     __,88'     \`88        9
    ,88'   .8(_ \\_____\\_    '----'    _/_____/ _)8.       8'       10
    88    (___) \\ \\     '-.__    __.-'      / /(___)               11
    88    (___)88 |          '--'          | 88(___)               12
    8'      (__)88,___/                \\___,88(__)                 13
              __\`88,_/__________________\\_,88\`__                   14
             /    \`88,       |88|       ,88'    \\                  15
            /        \`88,    |88|   , 88'        \\                 16
           /____________\`88,_\\88/_,88\`____________\\                17
          /88888888888888888;8888;88888888888888888\\               18
         /^^^^^^^^^^^^^^^^^^\`/88\\\\^^^^^^^^^^^^^^^^^^\\              19
        /                    |88| \\==========,       \\             20
       /_  __  __  __   _ __ |88|_|^   GOD    | _  ___\\            21
       |;:.                  |88| |    JUL!   |       |            22
       |;;:.                 |88| '==========='       |            23
       |;;:.                 |88|                     |            24
`;

const calendarContainer = document.querySelector(".calendar");
const totalDays = 24; // Antalet dagar i kalendern

// Hämta dagens datum
const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth() + 1; // Månader är 0-indexerade

console.log(currentDay);


// Split the ASCII art into lines
const asciiLines = asciiArt.trim().split('\n');

console.log(asciiLines);


// Generera kalendern
asciiLines.forEach((line, index) => {
  const day = index + 1;
  const dayElement = document.createElement(currentMonth === 12 && day <= currentDay ? "a" : "div");

  if (currentMonth === 12 && day <= currentDay) {
    dayElement.href = `/2024/day/${day}`;
    dayElement.classList.add("calendar-day", `calendar-day${day}`, "calendar-verycomplete");
  } else {
    dayElement.classList.add("calendar-day", `calendar-day${day}`, "locked");
  }

  dayElement.innerHTML = line.replace(/ /g, '&nbsp;'); // Preserve spaces
  calendarContainer.appendChild(dayElement);
});

// Globala variabler
let score = 0; // Poängräknare

// Dynamiskt rendera dagar och låsa dem beroende på datum
document.querySelectorAll(".day").forEach(day => {
  const dayNumber = parseInt(day.dataset.day);

  // Lås upp dagens lucka
  if (dayNumber <= currentDay) {
    day.classList.remove("locked");
    day.addEventListener("click", () => openPopup(dayNumber));
  }
});

// Funktion för att öppna popup med dynamiska data från puzzles.js
function openPopup(day) {
  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popup-title");
  const popupDescription = document.getElementById("popup-description");
  const answerField = document.getElementById("answer");
  const submitButton = document.getElementById("submit");

  // Hämta kluring från puzzles.js
  const puzzle = puzzles[day];
  if (!puzzle) {
    alert("Ingen kluring för denna dag ännu!");
    return;
  }

  // Visa popup med korrekt innehåll
  popup.style.display = "block";
  popupTitle.innerText = puzzle.title;
  popupDescription.innerHTML = puzzle.description;

  // Reset event listeners för submit-knappen
  submitButton.replaceWith(submitButton.cloneNode(true));
  const newSubmitButton = document.getElementById("submit");
  newSubmitButton.addEventListener("click", () => {
    validateAnswer(puzzle.answer, day);
  });
}

// Funktion för att skapa fallande stjärnor
function createFallingStars() {
  const container = document.getElementById("star-animation-container");

  // Skapa flera stjärnor
  for (let i = 0; i < 30; i++) {
    const star = document.createElement("div");
    star.classList.add("star-falling");

    // Random position och fördröjning
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDelay = `${Math.random() * 1.5}s`;
    star.style.animationDuration = `${2 + Math.random()}s`;

    // Lägg till stjärnan i containern
    container.appendChild(star);

    // Ta bort stjärnan efter animationen
    setTimeout(() => {
      star.remove();
    }, 2500);
  }
}

// Funktion för att validera svar
function validateAnswer(correctAnswer, day) {
  const answerField = document.getElementById("answer");
  const answer = answerField.value.trim();
  const nextDay = day + 1;

  if (answer.toLowerCase() === correctAnswer.toString().toLowerCase()) {
    // Uppdatera poäng
    score++;
    updateScore();

    // Animation: Visa stjärnfall
    createFallingStars();

    // Lås upp nästa dag
    const nextDayElement = document.querySelector(`.day[data-day="${nextDay}"]`);
    if (nextDayElement) {
      nextDayElement.classList.remove("locked");
    }

    // Markera dagen som löst
    const currentDayElement = document.querySelector(`.day[data-day="${day}"]`);
    if (currentDayElement) {
      currentDayElement.classList.add("solved");
    }

    // Stäng popup
    const popup = document.getElementById("popup");
    popup.style.display = "none";
    answerField.value = "";
  } else {
    alert("Fel svar, försök igen!");
  }
}


// Funktion för att uppdatera poäng
function updateScore() {
  const scoreElement = document.getElementById("score");
  scoreElement.innerText = `Poäng: ${score}`;
}

// Stäng popup när man klickar utanför
window.addEventListener("click", (event) => {
  const popup = document.getElementById("popup");
  if (event.target === popup) {
    popup.style.display = "none";
  }
});
