//make first variable

let first = "Brennan";

//make last variable

let last = "Day";

//log them out

console.log(first + " " + last);

//Make a variable for button (get)

var button = document.querySelector("button");

// Define Function

function logName() {
  console.log(first + " " + last);
}

function appendName() {
  //creat p element
  let p = document.createElement("p");

  //put text inside the p element
  p.innerText = first + " " + last;

  //append the p element as a cild of the page's body
  document.body.appendChild(p);
}

//Attach function to click on button

button.addEventListener("click", appendName);

//Make array of hobbies
let hobbies = ["Plants", "Cooking", "Reading"];
let ul = document.createElement("ul");

// Loop through the array and log each item using console
for (let i = 0; i < hobbies.length; i++) {
  let li = document.createElement("li");
  li.innerText = hobbies[i];
  ul.appendChild(li);
}

document.body.appendChild(ul);

// hobbies.forEach((hobby) => {
//   console.log(hobby);
// });
