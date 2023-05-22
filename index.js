console.log("Hello World")

let name="John";

let admin= name;
alert(admin)

const myInt = 5;
const myFloat = 6.667;
myInt;
myFloat;
typeof myFloat;
typeof myInt;

const lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;


let myNumber = "74";
myNumber = Number(myNumber) + 3;
alert(myNumber)


let b = 50; let r = 50;

// Edit the two lines below here ONLY
b = 43 + 7 ;
r = 25 * 3;

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, b, r);
alert(b,r);

const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "Start machine") {
    btn.textContent = "Stop machine";
    txt.textContent = "The machine has started!";
  } else {
    btn.textContent = "Start machine";
    txt.textContent = "The machine is stopped.";
  }
}

    