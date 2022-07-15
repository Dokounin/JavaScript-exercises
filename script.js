// First exercise
const hello = "Hello World!!!";
console.log(hello);

//second exercise

document.body.innerHTML = "Hello world";

//third exercise

const helloWorldH1 = document.createElement("h1");

document.body.appendChild(helloWorldH1).innerHTML = hello;

//fourth exercise

document.querySelector("#greetings").innerHTML = hello;

// fifth exercise

const students = [
  "Alexandre",
  "Béatrice",
  "Benoît",
  "Émeric",
  "Florian",
  "Gwenaëlle",
  "Jérémy",
  "Johan",
  "Justine M",
  "Justine P",
  "Justine T",
  "Kévin",
  "Loïc",
  "Mathieu",
  "Matthias",
  "Rémi",
  "Samuel",
  "Sébastien",
  "Sullivan",
  "Thomas",
  "Tiffany",
  "Valentin",
  "Yann",
];

students.forEach((element) => {
  console.log(element);
});

// six exercise

students.forEach((element) => {
  const li = document.createElement("li");
  document.querySelector("#studentList").appendChild(li).innerHTML = element;
});



