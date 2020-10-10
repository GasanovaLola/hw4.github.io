//Практика Task 1
/*
var arr = [1,2,3,4,5,6];
var temp = 0;

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
        temp = arr[i];
    }
    else {
        arr[i-1] = arr[i];
        arr[i] = temp;
    }
}

console.log(arr);

//Практика Task 2

var arr1 = new Array(3);
var sum = 0;
var max = 0;
var min = 0;

for (let i = 0, size = arr1.length; i < size; i++) {
    arr1[i] = new Array(2);

    sum = 0;
    for (let j = 0; j < size; j++) {
        arr1[i][j] = Math.round(Math.random() * (15 - 1) + 1);
        sum += arr1[i][j];
    }

    if (i == 0) {
        min = sum;
        max = sum;
    }

    if (sum <= min) {
        min = sum;
    }

    if (sum > max) {
        max = sum;
    }
}

console.log(arr1);
console.log(min, "min");
console.log(max, "max");

// Тест Task 1

var arr2 = [1, 2, 3, 4, 5];
console.log(arr2.join("_"));

// Task 2 

var arr3 = [6,7,2,3,5,7];
console.log("<ul>\n")

for (let i = 0; i < arr3.length; i++) {
    console.log("    <li>" + arr3[i] + "</li>\n");
}

console.log("</ul>");

// Task 3 

var arr4 = [1,2,3,4,5,6];
var temp = 0; 

console.log(arr4);

if (arr4.length % 2 === 0) {
    temp = arr4.length / 2;
    arr4.splice(temp-1,2);
}
else {
    temp = (arr4.length-1) / 2;
    arr4.splice(temp,1);
}

console.log(arr4);

// Task 4

var arr5 = [1,2,3] ;

var temp = prompt("Enter number");

while (temp !== "&") {
    arr5.push(temp);   
    temp = prompt("Enter number");
}

console.log(arr5);
*/

// Лекция 

/*В двумерном массиве A размером n на m. Заполнить случайными числами. 
1. Найти ряд, где сумма элементов наименьшая 
2. Найти ряд, где сумма элементов найбольшая 
3. Поменять ряды местами (1 и 2 пункт) */


var n = 4;
var m = 3;
var A = new Array(n);

var sum2 = 0;
var sumIndexMAX = 0;
var sumIndexMIN = 0;
var tempI = 0;

for (let i = 0; i < n; i++) {
    A[i] = new Array(m);

    sum2 = 0;
    for (let j = 0; j < m; j++) {
        A[i][j] = Math.round(Math.random() * (15 - 1) + 1);
        sum2 += A[i][j];
    }

    if (i == 0) {
        min = sum2;
        max = sum2;
    }

    if (sum2 <= min) {
        min = sum2;
        sumIndexMIN = i;
    }

    if (sum2 > max) {
        max = sum2;
        sumIndexMAX = i;
    }
}

console.log(A);

tempI = A[sumIndexMIN];
A[sumIndexMIN] = A[sumIndexMAX];
A[sumIndexMAX] = tempI;

console.log(A);

console.log(min + "-" + sumIndexMIN, "min");
console.log(max + "-" + sumIndexMAX, "max");
