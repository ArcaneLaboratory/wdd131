//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join(" ");

const grades = ["A", "B", "A", "A"]
function listGrades(grade){
    switch(grade){
        case "A":
            grade = 4;
            break;
        case "B":
            grade = 3;
            break;
        case "C":
            grade = 2;
            break;
        case "D":
            grade = 1;
            break;
        case "E":
        case "F":
            grade = 0;
            break;
    }
    return grade;
}
const gradesHtml = grades.map(listGrades).map(listTemplate);
document.querySelector("#myList").innerHTML += gradesHtml.join(" ");

const gpaPoints = grades.map(listGrades).reduce((a, b) => (a + b))/grades.length;
document.querySelector("#myList").innerHTML += (`<li>${gpaPoints}</li>`);

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
document.querySelector("#myList").innerHTML += fruits.filter((word) => word.length < 6).map(listTemplate).join(" ");

const numberslol = [12, 34, 21, 54];
const luckyNumber = 21;
document.querySelector("#myList").innerHTML += (`<li>${numberslol.indexOf(luckyNumber)}</li>`)