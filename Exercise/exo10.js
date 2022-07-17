const students = [
  "Alexandre.C",
  "Alexandre.B",
  "Benoît",
  "Donatien",
  "Hugo",
  "Myriam",
  "Youcef",
  "Nicolas",
  "Vlad",
  "Quentin rmc",
  "Quentin Kiou",
  "Steven",
  "Loïc",
  "Julian",
  "Maxence",
  "Thomas",
  "Amandine",
  "Tristan",
];

students.sort();
students.reverse();

students.forEach((element) => {
  const li = document.createElement("li");
  document.querySelector("#triStudentList").appendChild(li).innerHTML = element;
});
