// Description: This function takes an input. After that multiplication, addition, division, subtraction is performed. After that the result of the function is returned.

function mindGame(number) {
  let multiplication = number * 3;
  let sum = multiplication + 10;
  let divided = sum / 2;
  const result = divided - 5;
  return result;
}

// String is taken as an input in this function. After that the length of the string is extracted. After that even if the number and odd is returned.

function evenOdd(names) {
  let name = names.length;
  if (name % 2 == 0) {
    return "even";
  } else {
    return "Odd";
  }
}

// Is taken as an input to this function. 7 is then subtracted. A comparison is then made. After that the function is returned.

function isLGSeven(number) {
  let num = number;
  let subtration = num - 7;
  if (subtration >= 7) {
    return (num *= 2);
  } else {
    return subtration;
  }
}

// This function takes an array as an input. A comparison is then made. After that the function is returned.

function findingBadData(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    if (element < 0) {
      result++;
    } else {
      result;
    }
  }
  return result;
}

// This function takes three as inputs. After that the product is added. A comparison is then made. After that the function is returned.

function gemsToDiamond(helal, rokib, setu) {
  const totalDiamonds = helal * 21 + rokib * 32 + setu * 43;
  if (totalDiamonds >= 2000) {
    return totalDiamonds - 2000;
  } else {
    return totalDiamonds;
  }
}
