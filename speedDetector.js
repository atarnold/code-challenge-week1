//Defines the speed limit and exceed limit
const prompt = require("prompt-sync")({ sigint: true });
const speedLimit = 70;
const exceedLimit = 5;

//Prompts user for speed input
function promptUserForInput() {
     return prompt('Speed limit?');
}

//Results after speed is detected
function speedInput(speed) {
    if (speed <= speedLimit) {
        return 'Ok';
    }else if (speed > speedLimit && speed <= speedLimit + exceedLimit ) {
         return 'Points: 2';
    }else {
        return 'Limit exceeded';
    }
}
//If no speed input prompt is called
const driverSpeed = promptUserForInput();
console.log(speedInput(driverSpeed));