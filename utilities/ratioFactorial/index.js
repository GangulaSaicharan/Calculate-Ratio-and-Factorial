const factorialOfNumber = require("../factorial/index.js");
const ratioOfTwoNumbers = require("../ratio/index.js");

function ratioAndFactorial(one, two, three) {
  const ratio = ratioOfTwoNumbers(one, two);
  const factorial = factorialOfNumber(three);

  return { ratio, factorial };
}

module.exports = ratioAndFactorial;
