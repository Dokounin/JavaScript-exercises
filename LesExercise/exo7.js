function loadStyle(e) {
  e.target.className = "dynamicStyle";
}

document.querySelector("main").addEventListener("click", loadStyle);
