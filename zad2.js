// Вариант 1
function sumTuple(tuple) {
    return tuple.reduce((acc, num) => acc + num, 0);
  }
  
  const tuple1 = [1, 2, 3];
  console.log("Вариант 1");
  console.log(sumTuple(tuple1));
  console.log("");

// Вариант 2
function concatStrings(tuple) {
    return tuple.join('');
  }
  
  const tuple2 = ['Hello', ' my ', 'World'];
  console.log("Вариант 2");
  console.log(concatStrings(tuple2));
  console.log("");

// Вариант 3
function formatString(tuple) {
    const [str1, str2, num] = tuple;
    return `${str1} – ${num} – ${str2}`;
  }
  
  const tuple3 = ['First', 'Second', 42];
  console.log("Вариант 3");
  console.log(formatString(tuple3));
  console.log("");

// Вариант 4
function productOfNumbers(tuple) {
    return tuple[0] * tuple[1];
  }
  
  const tuple4 = [3, 5];
  console.log("Вариант 4");
  console.log(productOfNumbers(tuple4));
  console.log("");

// Вариант 5
function concatStringsInFormat(tuple) {
    const [num, str0, str1] = tuple;
    return `${str1}: ${str0}`;
  }
  
  const tuple5 = [10, 'Hello', 'World'];
  console.log("Вариант 5");
  console.log(concatStringsInFormat(tuple5));
  console.log("")

// Вариант 6
function areDigitSumsEqual(tuple) {
  const sumDigits = num => num.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
  return sumDigits(tuple[0]) === sumDigits(tuple[1]);
}

const tuple6 = [123, 321];
console.log("Вариант 6");
console.log(areDigitSumsEqual(tuple6));
console.log("");