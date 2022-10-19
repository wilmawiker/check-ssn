let usersInput = document.getElementById("usersSsnInput");
let checkSsnBtn = document.getElementById("checkSsnBtn");

checkSsnBtn.addEventListener("click", checkSsn);

function checkSsn() {
  let numbersToMultiplyWithTwo = [];
  let numbersToMultiplyWithOne = [];
  let sumOfNumbersToMultiplyWithTwo = 0;
  let sumOfNumbersToMultiplyWithOne = 0;
  document.getElementById("lastDigitResult").innerText = "Din sista siffra är:";
  //Hämta användarens inmatade värde, gör om till en lista utav siffror.
  let usersSsn = usersInput.value.split("");
  console.log(usersSsn);
  console.log(usersSsn);
  //Skapa en lista med varannan siffra som ska multipliceras med 2.
  for (let i = 0; i < usersSsn.length; i += 2) {
    numbersToMultiplyWithTwo.push(usersSsn[i]);
  }

  //Skapa en lista med övriga siffror som ska multipliceras med 1.
  for (let i = 1; i < usersSsn.length; i += 2) {
    numbersToMultiplyWithOne.push(usersSsn[i]);
  }
  console.log(numbersToMultiplyWithTwo);
  console.log(numbersToMultiplyWithOne);

  //Ta listan med siffror som ska multipliceras med två, gör multiplikationen för varje siffra och lägger ihop summan. Om en multiplikation resulterar i ett tvåsiffrigt tal, gör om det till en lista bestående av de två siffrorna. Och plussa ihop summan av de två i listan.
  for (let i = 0; i < numbersToMultiplyWithTwo.length; i++) {
    let digit = numbersToMultiplyWithTwo[i] * 2;
    if (digit > 9) {
      digit = digit.toString().split("");
      let newDigits = digit.map(Number);
      console.log(newDigits);
      digit = Number(newDigits[0] + newDigits[1]);
    }

    //Förvara resultatet av alla summerade tal från hela listan i en variabel.
    sumOfNumbersToMultiplyWithTwo += digit;
  }
  console.log(sumOfNumbersToMultiplyWithTwo);

  //Gör samma som ovanstående for-loop men med den andra listan, innehållande siffrorna som ska multipliceras med 1.
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

  //Ta fram summan av de två listorna.
  let sum = sumOfNumbersToMultiplyWithTwo + sumOfNumbersToMultiplyWithOne;

  // Ta fram kontrollnumret med modulus 10-operation.
  let controlNumber = (10 - (sum % 10)) % 10;
  console.log(controlNumber);

  //Presentera resultatet i html-sidan.
  document.getElementById("lastDigitResult").innerText += controlNumber;
}
