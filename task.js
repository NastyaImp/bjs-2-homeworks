// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 100 || arr[i] < -100) {
      console.log("Введите число в диапозоне (-100; 100)")
    }
  }

  sum = null;
  min = arr[0];
  max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = arrOfArr[0][0];

  for (let i = 0; i < arrOfArr.length; i++) {
    let sum = func(arrOfArr[i]);
    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  let sum = 0;
  min = arr[0];
  max = arr[0];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  sum = Math.abs(max - min);
  return sum;
}
