// Вариант 1
function hasNegative(matrix) {
    return matrix.some(row => row.some(num => num < 0));
  }
  
  const matrix1 = [
    [1, 2, 3],
    [4, -5, 6],
    [7, 8, 9]
  ];
  console.log("Вариант 1");
  console.log(hasNegative(matrix1));
  console.log("");

// Вариант 2
function countZeros(matrix) {
    return matrix.flat().filter(num => num === 0).length;
  }
  
  const matrix2 = [
    [1, 0, 3],
    [0, 4, 0],
    [7, 0, 9]
  ];
  console.log("Вариант 2");
  console.log(countZeros(matrix2));
  console.log("");

// Вариант 3
function countInRange(matrix, min, max) {
    return matrix.flat().filter(num => num >= min && num <= max).length;
  }
  
  const matrix3 = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
  ];
  console.log("Вариант 3");
  console.log(countInRange(matrix3, 20, 80));
  console.log("");

// Вариант 4
function countNonZeroInRange(matrix, min, max) {
    return matrix.flat().filter(num => num !== 0 && num >= min && num <= max).length;
  }
  
  const matrix4 = [
    [10, 0, 30],
    [0, 50, 60],
    [70, 80, 0]
  ];
  console.log("Вариант 4");
  console.log(countNonZeroInRange(matrix4, 10, 50));
  console.log("");

// Вариант 5
function booleanToNumberMatrix(matrix) {
    return matrix.map(row => row.map(value => value ? 1 : 0));
  }
  
  const matrix5 = [
    [true, false, true],
    [false, true, false],
    [true, true, false]
  ];
  console.log("Вариант 5");
  console.log(booleanToNumberMatrix(matrix5));
  console.log("");

// Вариант 6
function stringToBooleanMatrix(matrix) {
    return matrix.map(row => row.map(value => value.length % 2 !== 0));
  }
  
  const matrix6 = [
    ['apple', 'banana', 'cherry'],
    ['kiwi', 'pear', 'grape'],
    ['plum', 'melon', 'peach']
  ];
  console.log("Вариант 6");
  console.log(stringToBooleanMatrix(matrix6));
  console.log("");