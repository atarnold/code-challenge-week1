const prompt = require("prompt-sync")({ sigint: true });

//Prompts user when no marks are input
function promptUserInput() {
    const noInput = prompt('Please enter your marks: ');
    return noInput;
}

//Results after mark input
function gradeGenerator(mark) {
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60 && mark <= 79) {
        return 'B';
    } else if (mark >= 49 && mark <= 59) {
        return 'C';
    } else if (mark >= 40 && mark <= 49){
        return 'D';
    } else if (mark >= 0 && mark <=39 ) {
        return 'E';
    } else {
        return 'Invalid';
    }
} 

//Calls prompt when input is >= 0 and when <=100
const userMarks = promptUserInput();

if (userMarks >= 0 && userMarks <= 100){
    const grade = gradeGenerator(userMarks);
} 
