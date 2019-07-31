var firstNumber = document.getElementById("first");
var secondNumber = document.getElementById("second");
var inputNumber = document.getElementById("inputNumber");
var clickBtn = document.getElementById("btn");
var listNumber100 = [
  64,
  32,
  20,
  36,
  45,
  50,
  66,
  33,
  27,
  84,
  14,
  91,
  21,
  30,
  79,
  65,
  83,
  6,
  77,
  43,
  95,
  74,
  71,
  92,
  80,
  81,
  18,
  101,
  25,
  17,
  35,
  62,
  76,
  99,
  23,
  89,
  75,
  29,
  19,
  70,
  16,
  72,
  67,
  52,
  93,
  82,
  53,
  2,
  49,
  97,
  90,
  34,
  10,
  57,
  22,
  4,
  44,
  98,
  47,
  56,
  15,
  28,
  100,
  26,
  60,
  94,
  3,
  58,
  55,
  54,
  5,
  63,
  86,
  24,
  59,
  51,
  8,
  31,
  73,
  42,
  78,
  37,
  13,
  9,
  40,
  96,
  46,
  11,
  87,
  39,
  85,
  48,
  61,
  12,
  88,
  68,
  7,
  69,
  41
];

var divideA2 = listNumber100.filter(num => {
  return num % 2 === 0;
});
var divideA3 = listNumber100.filter(num => {
  return num % 3 === 0;
});
var divideA4 = listNumber100.filter(num => {
  return num % 4 === 0;
});
var divideA5 = listNumber100.filter(num => {
  return num % 5 === 0;
});
var divideA6 = listNumber100.filter(num => {
  return num % 6 === 0;
});
var divideA7 = listNumber100.filter(num => {
  return num % 7 === 0;
});
var divideA8 = listNumber100.filter(num => {
  return num % 8 === 0;
});
var divideA9 = listNumber100.filter(num => {
  return num % 9 === 0;
});
var divideA1 = listNumber100.filter(num => {
  return num % 1 === 0;
});
console.log(divideA6);
var divide51 = divideA1.slice(0, 50);
console.log(divide51);
console.log(divideA9);
console.log(divideA8);
console.log(divideA7);
console.log(divideA6);
console.log(divideA5);
console.log(divideA4);
console.log(divideA3);
console.log(divideA2);

var t = setInterval(myArr2, 50);
function myFunction2() {
  var myNumber = Math.floor(Math.random() * 9) + 1;
  return myNumber;
}
var secondListNumber;
var newArray2 = [];
function myArr2() {
  var myNumber2 = myFunction2();
  if (newArray2.indexOf(myNumber2) < 0) {
    newArray2.unshift(myNumber2);
  } else if (newArray2.indexOf(myNumber2) > 0) {
    var s = newArray2.indexOf(myNumber2);
    newArray2[s] = myNumber2;
  } else if (newArray2.length == 9) {
    clearInterval(t);

    gg2();
  }
}
// var myPhotoUN = document.querySelectorAll(".back");
function gg2() {
  secondListNumber = newArray2;
  console.log(secondListNumber);
  /*  myButton.innerHTML = "Let's Gooooo";
  myButton.style.color = "red";
  myButton.style.fontSize = "2em"; */
  /* for (var num = 0, ad = 1; num < myPhotoUN.length; ad++, num++) {
    myPhotoUN[num].innerHTML =
      "<img src=image/" + secondListNumber[0] + "/" + ad + ".png />";
  } */
  chickNumber();
}
clickBtn.addEventListener("click", chickSumNumber);

function chickSumNumber() {
  if (inputNumber.value == firstNumber.textContent / secondNumber.textContent) {
    document.getElementById("gifPhoto").innerHTML = `<img src='./images/yes${
      secondNumber.textContent
    }.gif' />`;
    inputNumber.value = "";
    inputNumber.focus();
    chickNumber();
  } else {
    inputNumber.value = "";
    inputNumber.placeholder = "Try Again";
    document.getElementById(
      "gifPhoto"
    ).innerHTML = `<img src='./images/no2.gif' />`;
  }
}

var i = 0;
var j = 0;
var numSecond;

function chickNumber() {
  inputNumber.focus();
  var numSecond = secondListNumber[i];
  console.log(numSecond);

  switch (numSecond) {
    case 2:
      divideA2Num();
      break;
    case 2:
      divideA2Num();
      break;
    case 3:
      divideA3Num();
      break;
    case 4:
      divideA4Num();
      break;
    case 5:
      divideA5Num();
      break;
    case 6:
      divideA6Num();
      break;
    case 7:
      divideA7Num();
      break;
    case 8:
      divideA8Num();
      break;
    case 9:
      divideA9Num();
      break;
    case 1:
      divideA1Num();
      break;
    default:
      break;
  }
}

function divideA2Num() {
  secondNumber.textContent = secondListNumber[i];
  if (i == 8) {
    i = 0;
    j++;
  } else {
    i++;
  }
  if (j == divideA2.length - 1) {
    var num = secondListNumber.indexOf(2);
    secondNumber.splice(num, 1);
    j = 0;
  } else {
    firstNumber.textContent = divideA2[j];
  }
}
function divideA3Num() {
  secondNumber.textContent = secondListNumber[i];
  if (i == 8) {
    i = 0;
    j++;
  } else {
    i++;
  }
  if (j == divideA3.length - 1) {
    var num = secondListNumber.indexOf(3);
    secondNumber.splice(num, 1);

    j = 0;
  } else {
    firstNumber.textContent = divideA3[j];
  }
}
function divideA4Num() {
  secondNumber.textContent = secondListNumber[i];
  if (i == 8) {
    i = 0;
    j++;
  } else {
    i++;
  }
  if (j == divideA4.length - 1) {
    var num = secondListNumber.indexOf(4);
    secondNumber.splice(num, 1);
    j = 0;
  } else {
    firstNumber.textContent = divideA4[j];
  }
}
function divideA5Num() {
  secondNumber.textContent = secondListNumber[i];
  if (i == 8) {
    i = 0;
    j++;
  } else {
    i++;
  }
  if (j == divideA5.length - 1) {
    var num = secondListNumber.indexOf(5);
    secondNumber.splice(num, 1);
    j = 0;
  } else {
    firstNumber.textContent = divideA5[j];
  }
}
function divideA6Num() {
  secondNumber.textContent = secondListNumber[i];
  if (i == 8) {
    i = 0;
    j++;
  } else {
    i++;
  }
  if (j == divideA6.length - 1) {
    var num = secondListNumber.indexOf(6);
    secondNumber.splice(num, 1);
    j = 0;
  } else {
    firstNumber.textContent = divideA6[j];
  }
}
function divideA7Num() {
  secondNumber.textContent = secondListNumber[i];
  if (i == 8) {
    i = 0;
    j++;
  } else {
    i++;
  }
  if (j == divideA7.length - 1) {
    var num = secondListNumber.indexOf(7);
    secondNumber.splice(num, 1);
    j = 0;
  } else {
    firstNumber.textContent = divideA7[j];
  }
}
function divideA8Num() {
  secondNumber.textContent = secondListNumber[i];
  if (i == 8) {
    i = 0;
    j++;
  } else {
    i++;
  }
  if (j == divideA8.length - 1) {
    var num = secondListNumber.indexOf(8);
    secondNumber.splice(num, 1);
    j = 0;
  } else {
    firstNumber.textContent = divideA8[j];
  }
}
function divideA9Num() {
  secondNumber.textContent = secondListNumber[i];
  if (i == 8) {
    i = 0;
    j++;
  } else {
    i++;
  }
  if (j == divideA9.length - 1) {
    var num = secondListNumber.indexOf(9);
    secondNumber.splice(num, 1);
    j = 0;
  } else {
    firstNumber.textContent = divideA9[j];
  }
}
function divideA1Num() {
  secondNumber.textContent = secondListNumber[i];
  if (i == 8) {
    i = 0;
    j++;
  } else {
    i++;
  }
  if (j == divide51.length - 1) {
    var num = secondListNumber.indexOf(1);
    secondNumber.splice(num, 1);
    j = 0;
  } else {
    firstNumber.textContent = divide51[j];
  }
}

/*
var myButton = document.querySelector("#but");
var firstNumber = document.querySelector("#first");
var secondNumber = document.querySelector("#second");
var inputNumber = document.querySelector("#in");
var resultNumber = document.querySelector("#sum");
var resultTrueNumber = document.querySelector("#tr");
var resultFalseNumber = document.querySelector("#fal");
var myPhoto = document.querySelectorAll(".puzzl");
var myDivS = document.querySelector(".s");
var myDivG = document.querySelector(".divG");
var mySpanG = document.querySelectorAll(".spanGood");
var i = 0;
var j = 0;
myButton.addEventListener("click", function() {
  inputNumber.focus();
  firstNumber.textContent = listNumber100[i];
  secondNumber.textContent = secondListNumber[j];

  resultNumber.textContent = " ";

  if (i == listNumber100.length - 1) {
    i = 0;
    j++;
    myDivG.classList.add("rot");
    myDivS.classList.add("goo");
    for (var ff = 0; ff < mySpanG.length; ff++) {
      mySpanG[ff].classList.add("bravo");
    }
  } else if (j == 8) {
    secondNumber.textContent = "DONE";
    firstNumber.textContent = "DONE";
    j = 0;
  } else {
    i++;
  }
});

document.querySelector("#equal").addEventListener("click", tryRsult);

var countF = 1;
var nf = 0;
function tryRsult() {
  if (firstNumber.textContent * secondNumber.textContent == inputNumber.value) {
    var count = listNumber100[nf];
    var countN = count - 1;
    console.log(count);
    resultNumber.textContent = "YES";
    inputNumber.value = "";
    myDivG.classList.remove("rot");
    myDivS.classList.remove("goo");
    for (var ff = 0; ff < mySpanG.length; ff++) {
      mySpanG[ff].classList.remove("bravo");
    }
    if (nf < myPhoto.length) {
      myPhoto[countN].classList.add("animation");
      nf++;
    } else {
      for (var remove = 0; remove < myPhoto.length; remove++) {
        myPhoto[remove].classList.remove("animation");
        nf = 0;
      }

      for (var num = 0, ad = 1; num < myPhotoUN.length; ad++, num++) {
        myPhotoUN[num].innerHTML =
          "<img src=image/" + secondListNumber[countF] + "/" + ad + ".png />";
      }
      countF++;
    }
  } else {
    resultNumber.textContent = "NO";
  }
}
 */
var co = document.querySelector("#canvasGame");
var ctx = co.getContext("2d");
ctx.beginPath();
ctx.arc(150, 30, 10, 0, 2 * Math.PI);

ctx.moveTo(150, 10);
ctx.lineTo(10, 10);
ctx.moveTo(10, 100);
ctx.lineTo(10, 10);
ctx.moveTo(150, 20);
ctx.lineTo(150, 10);
ctx.stroke();
