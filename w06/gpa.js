function getGrades(inputSelector) {
  // get grades from the input box
  // split them into an array (String.split(','))
  // clean up any extra spaces, and make the grades all uppercase. (Array.map())   
  // return grades
    return document.querySelector(inputSelector).value.split(",").map(
        a => {return a.replaceAll(" ", "").toUpperCase();}
    );
}
function lookupGrade(grade) {
  // converts the letter grade to it's GPA point value and returns it
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
        case "F":
            grade = 0;
            break;
    }
    return grade;
}
function calculateGpa(grades) {
  // gets a list of grades passed in
  // convert the letter grades to gpa points
  // calculates the GPA
    const gpaPoints = grades.map(lookupGrade).reduce((a, b) => (a + b))/grades.length;
  // return the GPA
    return Math.round(gpaPoints*100)/100;
}
function outputGpa(gpa, selector) {
  // takes a gpa value and displays it in the HTML in the element identified by the selector
  document.querySelector(selector).innerHTML = gpa;
}
function clickHandler() {
  // when the button in our html is clicked:
  // get the grades entered into the input
  // calculate the gpa from the grades entered
  // display the gpa
    outputGpa(calculateGpa(getGrades("#grades")), "#output");
}
document.querySelector("#submitButton").addEventListener("click", clickHandler);