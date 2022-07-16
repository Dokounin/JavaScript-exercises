// function pour Addition de nombre integer
document.querySelector("#equal").addEventListener("click", () => {
  const nombre1 = parseInt(document.querySelector("#nombre1").value);
  const nombre2 = parseInt(document.querySelector("#nombre2").value);
  const result = document.querySelector("#total");
  const total = nombre1 + nombre2;
  result.innerHTML = total;
  return total;
});
