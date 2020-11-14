/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let blah = "some value"; //global scope
let myPar = document.querySelector("#myPar"); // Our paragraph

console.log("hello");

window.onload = function() {
  document
    .querySelector("#myButton")
    .addEventListener("click", changeParagraph);
  //   let myArr = ["Word", 2, 1, null, 232, 5, 3, 23, 234, 5, "hello"]; // local scope
  //   console.log("the length of my array is: ", myArr.length);
  //   console.log("the last value is: ", myArr[myArr.length - 1]);

  let a = 5;
  let b = 7;
  console.log(addTwo(a, b));
  console.log(5 + 7);
  //   if (a > 5) {
  //     console.log("a > b");
  //   } else {
  //     console.log("a < b");
  //   }
  //   let c = true;
  //   console.log(!c);
  let c = addTwo(a, b);
  console.log(c);

  let d = function(a, b) {
    return a + b;
  };

  let e = (a, b) => {
    return a + b;
  };
  //   traditional if/else
  //   if (a > b) {
  //     console.log("a>b");
  //   } else {
  //     console.log("a<b");
  //   }

  let f = a > b ? console.log("a>b") : console.log("a<b"); // ternary if

  console.log("anonymous", d(a, b));
  //   myPar.innerHTML = addTwo(a, b);
};

function addTwo(a, b) {
  return a + b;
}

function changeParagraph() {
  switch (myPar.innerHTML.toLowerCase()) {
    case "green":
      myPar.innerHTML = "blue";
      break;
    case "blue":
      myPar.innerHTML = "red";
      break;
    default:
      myPar.innerHTML = "green";
      break;
  }
  return false;
}
