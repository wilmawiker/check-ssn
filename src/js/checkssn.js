let usersInput = document.getElementById("usersSsnInput");
let checkSsnBtn = document.getElementById("checkSsnBtn");

checkSsnBtn.addEventListener("click", checkSsn);

function checkSsn() {
  let numbersToMultiplyWithTwo = [];
  let numbersToMultiplyWithOne = [];
  let sumOfNumbersToMultiplyWithTwo = 0;
  let sumOfNumbersToMultiplyWithOne = 0;
  document.getElementById("lastDigitResult").innerText = "Din sista siffra är:";
  let usersSsn = usersInput.value.split("");
  console.log(usersSsn);
  console.log(usersSsn);
  for (let i = 0; i < usersSsn.length; i += 2) {
    numbersToMultiplyWithTwo.push(usersSsn[i]);
  }
  for (let i = 1; i < usersSsn.length; i += 2) {
    numbersToMultiplyWithOne.push(usersSsn[i]);
  }
  console.log(numbersToMultiplyWithTwo);
  console.log(numbersToMultiplyWithOne);

  for (let i = 0; i < numbersToMultiplyWithTwo.length; i++) {
    let digit = numbersToMultiplyWithTwo[i] * 2;
    if (digit > 9) {
      digit = digit.toString().split("");
      let newDigits = digit.map(Number);
      console.log(newDigits);
      digit = Number(newDigits[0] + newDigits[1]);
    }
    sumOfNumbersToMultiplyWithTwo += digit;
  }
  console.log(sumOfNumbersToMultiplyWithTwo);

  for (let i = 0; i < numbersToMultiplyWithOne.length; i++) {
    let digit = numbersToMultiplyWithOne[i] * 1;
    if (digit > 9) {
      digit = digit.toString().split("");
      let newDigits = digit.map(Number);
      console.log(newDigits);
      digit = Number(newDigits[0] + newDigits[1]);
    }
    sumOfNumbersToMultiplyWithOne += digit;
  }
  console.log(sumOfNumbersToMultiplyWithOne);

  let sum = sumOfNumbersToMultiplyWithTwo + sumOfNumbersToMultiplyWithOne;
  let controlNumber = (10 - (sum % 10)) % 10;
  console.log(controlNumber);

  document.getElementById("lastDigitResult").innerText += controlNumber;
}
