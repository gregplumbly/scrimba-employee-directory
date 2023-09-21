import employees from "./employees.js";

const selectElement = document.getElementById("team-filter");
const mainElement = document.getElementById("main");
const inputElement = document.getElementById("name");

// get the unique teams to populate the select element so new teams are automatically added
const uniqueTeams = new Set(employees.map((employee) => employee.team));

// populate the select element with teams
uniqueTeams.forEach((team) => {
  const capitalizedTeam = `${team.charAt(0).toUpperCase()}${team.slice(1)}`;
  const option = document.createElement("option");
  option.value = team;
  option.textContent = capitalizedTeam;
  selectElement.appendChild(option);
});

let selectedTeam = "everyone";

selectElement.addEventListener("change", (e) => {
  selectedTeam = e.target.value;
  renderFilteredEmployees();
});

inputElement.addEventListener("input", () => {
  renderFilteredEmployees();
});

function getFilteredEmployees() {
  let teamFiltered =
    selectedTeam === "everyone"
      ? employees
      : employees.filter((employee) => employee.team === selectedTeam);

  const searchValue = inputElement.value.toLowerCase();
  return teamFiltered.filter((employee) =>
    employee.name.toLowerCase().includes(searchValue)
  );
}

function renderEmployees(employeeArray) {
  mainElement.innerHTML = "";
  for (const { image, name, title, bio, social } of employeeArray) {
    let socialLinks = "";

    if (social.twitter) {
      socialLinks += `<a href="${social.twitter}" target="_blank"><img src="./images/twitter.png" alt="Twitter" class="socials"></a>`;
    }

    if (social.linkedin) {
      socialLinks += `<a href="${social.linkedin}" target="_blank"><img src="./images/linkedin.png" alt="LinkedIn" class="socials"></a>`;
    }

    mainElement.innerHTML += `
      <div class="employee-card">
        <img src="./images/photos/${image}" alt="${name}" class="profile-photo">
        <p>${name}</p>
        <p>${title}</p>
            <div class="bio">${bio}</div>
                <div class="social-icons">${socialLinks}</div>

      </div>
    `;
  }
}

function renderFilteredEmployees() {
  const filteredEmployees = getFilteredEmployees();
  renderEmployees(filteredEmployees);
}

renderEmployees(employees);
