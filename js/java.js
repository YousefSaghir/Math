var f = setInterval(myArr, 50);
var t = setInterval(myArr2, 50);
function myFunction() {
  var myNumber = Math.floor(Math.random() * 9) + 1;
  return myNumber;
}
var firstListNumber;
var newArray = [];
function myArr() {
  var myNumber2 = myFunction();
  if (newArray.indexOf(myNumber2) < 0) {
    newArray.unshift(myNumber2);
  } else if (newArray.indexOf(myNumber2) > 0) {
    var s = newArray.indexOf(myNumber2);
    newArray[s] = myNumber2;
  } else if (newArray.length == 9) {
    clearInterval(f);

    gg();
  }
}
function gg() {
  firstListNumber = newArray;
  myTheFirstNumber.textContent = firstListNumber[0];
}
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
var myPhotoUN = document.querySelectorAll(".back");
function gg2() {
  secondListNumber = newArray2;
  myStart.innerHTML = "Let's Gooooo";
  myStart.style.color = "red";
  myStart.style.fontSize = "2em";
  myTheSecondNumber.textContent = secondListNumber[0];
  myInput.focus();
  for (var num = 0, ad = 1; num < myPhotoUN.length; ad++, num++) {
    myPhotoUN[num].innerHTML = `<img src=image/${
      secondListNumber[0]
    }/${ad}.png />`;
  }
}

var myStart = document.querySelector("#let");
var myButton = document.querySelector("#but");
var myTheFirstNumber = document.querySelector("#first");
var myTheSecondNumber = document.querySelector("#second");
var myInput = document.querySelector("#in");
var myResult = document.querySelector("#sum");
var myPuzzl = document.querySelectorAll(".puzzl");
var myDivS = document.querySelector(".s");
var myDivG = document.querySelector(".divG");
var mySpanG = document.querySelectorAll(".spanGood");
myButton.addEventListener("click", sumTotal);
var nn = 0;

function sumTotal() {
  var numP = firstListNumber[nn];
  if (
    myTheFirstNumber.textContent * myTheSecondNumber.textContent ==
    myInput.value
  ) {
    myResult.innerHTML = "<img src='./images/yes2.gif'/>";
    if (nn == 8) {
      myPuzzl[--numP].classList.add("animation");
      nn = 0;
      myDivG.classList.remove("rot");
      myDivS.classList.remove("goo");
      for (var ff = 0; ff < mySpanG.length; ff++) {
        mySpanG[ff].classList.remove("bravo");
      }
      setTimeout(removeClass, 4000);
    } else {
      myPuzzl[--numP].classList.add("animation");
      nn++;
    }

    myInput.value = "";
    myInput.focus();

    setTimeout(putNumber, 2000);
  } else {
    myResult.innerHTML = "<img src='./images/no2.gif'/>";
    myInput.value = "";
    myInput.focus();
  }
}
var countF = 1;
function removeClass() {
  for (var remove = 0; remove < myPuzzl.length; remove++) {
    myPuzzl[remove].classList.remove("animation");
  }
  for (var num = 0, ad = 1; num < myPhotoUN.length; ad++, num++) {
    myPhotoUN[num].innerHTML = `<img src=image/${
      secondListNumber[countF]
    }/${ad}.png />`;
  }
  countF++;
}
var i = 1;
var j = 0;
function putNumber() {
  myTheFirstNumber.textContent = firstListNumber[i];
  myTheSecondNumber.textContent = secondListNumber[j];

  if (i == firstListNumber.length - 1) {
    i = 0;
    if (j == secondListNumber.length) {
      myTheFirstNumber.textContent = "DONE";
      myTheSecondNumber.textContent = "DONE";
      j = 0;
      myDivG.classList.remove("rot");
      myDivS.classList.remove("goo");
      for (var ff = 0; ff < mySpanG.length; ff++) {
        mySpanG[ff].classList.remove("bravo");
      }
    } else {
      j++;
    }
  } else {
    i++;
  }
}

myInput.addEventListener("keydown", function() {
  myResult.textContent = "";
});

var cars = [
  { make: "Ford", model: "Fiesta", colour: "Red" },
  { make: "Land Rover", model: "Defender", colour: "Muddy" },
  { make: "Toyota", model: "Prius", colour: "Silver" },
  { make: "Honda", model: "Civic", colour: "Yellow" }
];

function paintCars(obj, color) {
  var copyArr = JSON.parse(JSON.stringify(obj));
  copyArr.filter(car => {
    if (car.make == "Ford") {
      car.colour = color;
    }
  });

  return copyArr;
}
console.log(paintCars(cars, "Pink"));
console.log(typeof carsSold);
