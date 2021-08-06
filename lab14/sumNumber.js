let sum = 0;
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

getNumber();

function getNumber() {
  readline.question("Enter a number: ", (input) => {
    if (input != "stop") {
      sum += parseInt(input);
      getNumber();
    } else {
      console.log("The sum of the numbers is " + sum);
      readline.close();
    }
  });
}
