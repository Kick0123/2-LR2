// Вариант 1
function max(arr) {
    return Math.max(...arr);
  }
  
  const numbers1 = [1.5, 3.8, -2.4, 7.1, 0.3];
  console.log("Вариант 1");
  console.log(max(numbers1));
  console.log("");

// Вариант 2
function min(arr) {
    return Math.min(...arr);
  }
  
  const numbers2 = [1.5, 3.8, -2.4, 7.1, 0.3];
  console.log("Вариант 2");
  console.log(min(numbers2));
  console.log("");

// Вариант 3
function average(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
  }
  
  const numbers3 = [10, 20, 30, 40, 50];
  console.log("Вариант 3");
  console.log(average(numbers3));
  console.log("");

// Вариант 4
function median(arr) {
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
  }
  
  const numbers4 = [1, 5, 3, 2, 4];
  console.log("Вариант 4");
  console.log(median(numbers4));
  console.log("");

// Вариант 5
function maxNegative(arr) {
    const negatives = arr.filter(num => num < 0);
    return Math.max(...negatives);
  }
  
  const numbers5 = [10, -5, 3, -1, -9];
  console.log("Вариант 5");
  console.log(maxNegative(numbers5));
  console.log("");

// Вариант 6
function minPositive(arr) {
    const positives = arr.filter(num => num > 0);
    return Math.min(...positives);
  }
  
  const numbers6 = [-10, -5, 3, 0, 9];
  console.log("Вариант 6");
  console.log(minPositive(numbers6));
  console.log("");