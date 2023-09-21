import employees from "./employees.js";

const selectElement = document.getElementById("team-filter");
const mainElement = document.getElementById("main");

// loop through employees array and get a list of unique teams
const uniqueTeams = [];
for (const employee of employees) {
  if (!uniqueTeams.includes(employee.team)) {
    uniqueTeams.push(employee.team);
  }
}

for (const team of uniqueTeams) {
  const firstLetter = team.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = team.slice(1);
  const capitalizedTeam = firstLetterCap + remainingLetters;
  selectElement.innerHTML += `<option value="${team}">${capitalizedTeam}</option>`;
}

for (const emp of employees) {
  mainElement.innerHTML += `  <div class="employee-card">
                <img src=./images/photos/${emp.image} alt="Jeremy Robson" class="profile-photo">
                <p>${emp.name}</p>
                <p>${emp.title}</p>
                <p>${emp.bio}</p>
                </p>
                <img src="./images/linkedin.png" alt="LinkedIn" class="socials">

            </div>
            `;
}
