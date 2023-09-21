import employees from "./employees.js"

// loop through employees array and get a list of unique teams
const uniqueTeams = []
for (const employee of employees) {
  if (!uniqueTeams.includes(employee.team)) {
    uniqueTeams.push(employee.team)
  }
}

console.log(uniqueTeams)

const selectElement = document.getElementById("team-filter")

for (const team of uniqueTeams) {
const firstLetter = team.charAt(0)
const firstLetterCap = firstLetter.toUpperCase()
const remainingLetters = team.slice(1)
const capitalizedTeam = firstLetterCap + remainingLetters

    selectElement.innerHTML += `<option value="${team}">${capitalizedTeam}</option>`
}
