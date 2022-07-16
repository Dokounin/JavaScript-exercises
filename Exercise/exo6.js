students = [
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

students.forEach((element) => {
  const li = document.createElement("li");
  document.querySelector("#studentList").appendChild(li).innerHTML = element;
});
