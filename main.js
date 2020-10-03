//Практика Task 1

var arr = [1,2,3,4,5,6];
var temp = 0;

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
        temp = arr[i];
    }
    else {
        arr[i-1] = arr[i];
        arr[i] = temp;
    }
}

console.log(arr);

//Практика Task 2

/*var arr1 = new Array(3);
var sumMass = [];

var sum = 0;
var max = 0;
var min = 0;

for (var i = 0; i < arr1.length; i++) {
    arr1[i] = new Array(2);
}

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
        arr1[i][j] = Math.round(Math.random() * (15 - 1) + 1);
    }
}

console.log(arr1);

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
        sum += arr1[i][j];
        console.log(sum + "-----SUM i="+i+" j="+j);

        console.log(arr1[i][j]);
        console.log(arr1[i][j] + " i=" + i + " j=" + j);

        if (i === (arr1.length - 1)) {
            sumMass.push(sum);
            console.log(sum , "sum" + i);
            sum = 0;
        }
    }
}

console.log(min, "min");
console.log(max, "max");

console.log(sumMass);*/

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


// Лекция 

/*В двумерном массиве A размером n на m. Заполнить случайными числами. 
1. Найти ряд, где сумма элементов наименьшая 
2. Найти ряд, где сумма элементов найбольшая 
3. Поменять ряды местами (1 и 2 пункт) */


/*var n = 3;
var m = 3;

var sumMas = [];

var a = new Array(n);

for (var i = 0; i < a.length; i++) {
    a[i] = new Array(m);
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        a[i][j] = Math.round(Math.random() * (5 - 1) + 1);
    }
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        
        sum += a[i][j];
        console.log(sum , "--"+ i + "--" + j);
        if (j === m-1) {
            sumMas[i] = sum;
        }
    }
}

console.log(sumMas);
console.log(a);
console.log(sum);*/