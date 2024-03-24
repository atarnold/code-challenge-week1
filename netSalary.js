const prompt = require("prompt-sync")({ sigint: true });
const NHIF_RATE = 0.6;
const KRA_RATE = 0.8;
const NSSF_RATE = 0.1;

function promptUserForSalary() {
    const salaryInput = prompt('Please enter net salary: ');
    return salaryInput;
}


function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const nhifReduction = grossSalary + NHIF_RATE;
    const krafReduction = grossSalary + KRA_RATE;
    const nssfReduction = grossSalary + NSSF_RATE;

    let netSallary = grossSalary - nhifReduction - krafReduction - nssfReduction;

    if (grossSalary <= 40000) {
        return 1000;
    }else if (grossSalary <= 45000) {
        return 1100;
    }else if (grossSalary <= 50000) {
        return 1200;
    }else if (grossSalary <= 60000) {
        return 1300;
    }else if (grossSalary <= 70000) {
        return 300;
    }else if (grossSalary <= 80000 ) {
        return 1400;
    }else if (grossSalary <= 90000) {
        return 1500;
    }else if (grossSalary >= 100000) {
        return 1700;
    }
}

const enterSalary = promptUserForSalary();
console.log(calculateNetSalary(enterSalary))



