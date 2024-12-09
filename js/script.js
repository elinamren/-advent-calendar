// script.js
const asciiArt = `
t.                                 w_                                 v1
t                               r.-w(_)                                v2
t                              r/ _/                                  v3
t                           r.-'   \\                                  v4
t                          r/       '.                                v5
t                        w,-~--~-~-~-~-,                              v6
t                       w{__.._...__..._}             y,888,           v7
t       y,888,          v/\\##"  s6  6  v"##/\\          y,88' \`88,         v8
t     y,88' '88,b__     v|(\\\`    b(__)    v\`/)|     b__y,88'     \`88        v9
t    y,88'   .8b(_ \\r_____v\\_    r'----'    v_/r_____b/ _)y8.       8'       v10
t    y88    b(___) \\ \\     '-.__    __.-'      / /(___)               v11
t    y88    b(___)y88 b|          '--'          | y88b(___)               v12
t    y8'      b(__)y88,r___/                \\___y,88b(__)                 v13
t              g__y\`88,g_r/g__________________r\\g_y,88\`g__                   v14
t             g/    y\`88,       |88|       ,88'    g\\                  v15
t            g/        y\`88,    |88|   , 88'        g\\                 v16
t           g/y____________\`88,_\\88/_,88\`____________g\\                v17
t          y/88888888888888888;8888;88888888888888888\\               v18
t         g/t^^^^^^^^^^^^^^^^^^\`/88\\\\^^^^^^^^^^^^^^^^^^g\\              v19
t        g/                    y|88| \\w==========,       g\\             v20
t       g/_  __  __  __   _ __ t|88|g_w|y^   rGOD    w| g_  ___\\            v21
t       g|;:.                  y|88| w|    rJUL!   w|       g|            v22
t       g|;;:.                 y|88| w'==========='       g|            v23
t       g|;;:.                 y|88|                     g|            v24
`;

// w = white with glow
// v = white
// r = red
// g = green
// y = yellow
// b = beige


const calendarContainer = document.querySelector(".calendar");
const totalDays = 24; // Antalet dagar i kalendern

// Hämta dagens datum
const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth() + 1; // Månader är 0-indexerade

// Retrieve saved data from local storage
let solvedDays = JSON.parse(localStorage.getItem('solvedDays')) || [];
let score = parseInt(localStorage.getItem('score')) || 0;

// Update score display
document.getElementById('score').textContent = score;

// Split the ASCII art into lines
const asciiLines = asciiArt.trim().split('\n');

// Function to wrap characters in spans with color classes
function wrapWithColor(line) {
  return line.replace(/([a-z])([^a-z]*)/g, (match, p1, p2) => {
    return `<span class="color-${p1}">${p2.replace(/ /g, '&nbsp;')}</span>`;
  });
}

// Function to mark a day as solved
function markDayAsSolved(day) {
  if (!solvedDays.includes(day)) {
    solvedDays.push(day);
    localStorage.setItem('solvedDays', JSON.stringify(solvedDays));
  }
}

// Generera kalendern
asciiLines.forEach((line, index) => {
  const day = index + 1;
  let dayElement;

  if (currentMonth === 12 && day <= currentDay) {
    // Current and previous dates in December
    dayElement = document.createElement("div");
    dayElement.addEventListener("click", () => openPopup(day));
    dayElement.classList.add("calendar-day", `calendar-day${day}`, "open");
    dayElement.innerHTML = wrapWithColor(line); // Preserve spaces and add colors
    if (solvedDays.includes(day)) {
      dayElement.classList.add("solved");
    }
  } else if (currentMonth === 12 && day === currentDay + 1) {
    // Tomorrow's date
    dayElement = document.createElement("div");
    dayElement.classList.add("calendar-day", `calendar-day${day}`, "tomorrow");
    dayElement.innerHTML = line.replace(/[a-z]/g, '').replace(/ /g, '&nbsp;'); // Preserve spaces
  } else if (currentMonth === 12 && day > currentDay + 1) {
    // Future dates
    dayElement = document.createElement("div");
    const dayNumber = line.match(/\d+$/)[0];
    const spaces = ' '.repeat(line.length - dayNumber.length);
    dayElement.innerHTML = spaces + dayNumber;
    dayElement.classList.add("calendar-day", `calendar-day${day}`, "locked", "future");
  } else {
    // Past dates
    dayElement = document.createElement("div");
    dayElement.classList.add("calendar-day", `calendar-day${day}`, "locked");
    dayElement.innerHTML = line.replace(/ /g, '&nbsp;'); // Preserve spaces
  }

  calendarContainer.appendChild(dayElement);
});

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
  const popupStory = document.getElementById("popup-story");
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
  popupStory.innerHTML = puzzle.story;
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

  if (answer.toLowerCase() === correctAnswer.toString().toLowerCase()) {
    // Uppdatera poäng
    score++;
    updateScore();
    localStorage.setItem('score', score);

    // Animation: Visa stjärnfall
    createFallingStars();

    // Markera dagen som löst
    const currentDayElement = document.querySelector(`.calendar-day${day}`);
    if (currentDayElement) {
      currentDayElement.classList.add("solved");
      markDayAsSolved(day)
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
  scoreElement.innerText = score;
}

// Stäng popup när man klickar på x
document.getElementById("close-popup").addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
});
