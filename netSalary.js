// Importing prompt module to take user input from the console
const prompt = require("prompt-sync")({ sigint: true });

//Constants for tax rates
const NHIF_RATE = 0.6;
const KRA_RATE = 0.8;
const NSSF_RATE = 0.1;

// Function to prompt user for salary input
function promptUserForSalary() {
    const salaryInput = prompt('Please enter net salary: ');
    return salaryInput;
}

// Function to calculate net salary based on basic salary and benefits
function calculateNetSalary(basicSalary, benefits) {
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate deductions for NHIF, KRA, and NSSF
    const nhifReduction = grossSalary * NHIF_RATE;
    const krafReduction = grossSalary * KRA_RATE;
    const nssfReduction = grossSalary * NSSF_RATE;

    // Calculate net salary after deductions
    let netSallary = grossSalary - nhifReduction - krafReduction - nssfReduction;

    // Apply additional deductions based on gross salary brackets
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

    return netSallary;
}

// Prompt user for salary input
const enterSalary = promptUserForSalary();

//Calculates and displays net salary
console.log(calculateNetSalary(enterSalary));



