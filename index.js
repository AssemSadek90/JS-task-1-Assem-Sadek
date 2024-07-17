examGradeIf = (grade) => {
  if (isNaN(grade)) return "Not a number";

  if (grade >= 85 && grade <= 100) {
    if (grade == 100) return "Perfect Score!";
    return "You got an A";
  } else if (grade >= 75 && grade < 85) return "You got a B";
  else if (grade >= 65 && grade < 75) return "You got a C";
  else if (grade >= 50 && grade < 65) return "You got a D";
  else if (grade >= 0 && grade < 50) return "You got an F";
  else if (grade > 100 || grade < 0) return "Invalid score";
};

const examGradeSwitch = (grade) => {
  if (isNaN(grade)) return "Not a number";

  switch (true) {
    case grade == 100:
      return "Perfect Score!";
    case grade >= 85 && grade < 100:
      return "You got an A";
    case grade >= 75 && grade < 85:
      return "You got a B";
    case grade >= 65 && grade < 75:
      return "You got a C";
    case grade >= 50 && grade < 65:
      return "You got a D";
    case grade >= 0 && grade < 50:
      return "You got an F";
    case grade > 100 || grade < 0:
      return "Invalid score";
    default:
      return "Invalid input";
  }
};

document
  .getElementById("gradeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const gradeInput = document.getElementById("grade").value;
    const grade = Number(gradeInput);
    const result = examGradeIf(grade);

    document.getElementById("result").textContent = result + " (using if)";
  });

document
  .getElementById("gradeFormSwitch")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const gradeInput = document.getElementById("gradeSwitch").value;
    const grade = Number(gradeInput);
    const result = examGradeSwitch(grade);

    document.getElementById("result").textContent = result + " (using switch)";
  });
