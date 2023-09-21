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
  selectElement.innerHTML += `
  <option value="${team}">${capitalizedTeam}</option>
  `;
}

selectElement.addEventListener("change", function (e) {
  console.log("change triggered");
  const selectedTeam = e.target.value;
  let filteredEmployees;

  if (selectedTeam === "everyone") {
    filteredEmployees = employees;
  } else {
    filteredEmployees = employees.filter(
      (employee) => employee.team === selectedTeam
    );
  }

  renderEmployees(filteredEmployees);
});

function renderEmployees(employeeArray) {
  mainElement.innerHTML = "";
  for (const emp of employeeArray) {
    mainElement.innerHTML += `  <div class="employee-card">
                <img src=./images/photos/${emp.image} alt="Jeremy Robson" class="profile-photo">
                <p>${emp.name}</p>
                <p>${emp.title}</p>
                <p class="bio">${emp.bio}</p>
                <img src="./images/linkedin.png" alt="LinkedIn" class="socials">

            </div>
            `;
  }
}

renderEmployees(employees);
