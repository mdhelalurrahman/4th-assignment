function mindGame(number) {
  if (typeof number == "string") {
    console.log("This is string");
  }

  let multiplication = number * 3;
  let sum = multiplication + 10;
  let divided = sum / 2;
  let subtration = divided - 5;
  return subtration;
}
console.log(mindGame("15"));

// ----------------------------------------
/* let names = "chatgpt";
let result = evenOdd(names);
console.log(result);
function evenOdd(names) {
  let list = names.length;
  if (list % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
} */
// ------------------------------------

/* rakhben ,, examples:
If( typeof numbers != 'number'{
return ' please input number ';
} */

/* function isLGSeven(number) {
  let inputNumber = number;
  let subtrationResult = inputNumber - 7;
  if (subtrationResult >= 7) {
    return (inputNumber *= 2);
  } else {
    return subtrationResult;
  }
}
let number = 15;
let result = isLGSeven(number);
console.log(result);
 */

// -----------------

/* function findingBadData(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
let number = [1, 2, 5];
let result = findingBadData(number);
console.log(result);
 */

/* function findingBadData(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    if (element< 0) {
      result++;
    } else {
      result;
    }
  }
  return result;
}
let numbers = [1, 2, 3];
console.log(findingBadData(numbers));
 */

// ---------------

/* function gemsToDiamond(g1, g2, g3) {
  const totalDiamonds = g1 * 21 + g2 * 32 + g3 * 43;
  if (totalDiamonds > 2000) {
    return totalDiamonds - 2000;
  }
  return 0;
}
console.log(gemsToDiamond(1, 1, 1));
 */

/* function gemsToDiamond(rokib, helal, setu) {
  const totalDiamonds = rokib * 21 + helal * 32 + setu * 43;

  if (totalDiamonds > 2000) {
    return totalDiamonds - 2000;
  } else {
    return totalDiamonds;
  }
}
let total = gemsToDiamond(100, 5, 1);
console.log(total); */
