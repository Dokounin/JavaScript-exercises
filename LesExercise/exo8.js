// function pour Addition de nombre integer
const additionFn = document
  .querySelector("#equal")
  .addEventListener("click", () => {
    const nombre1 = parseInt(document.querySelector("#nombre1").value);
    const nombre2 = parseInt(document.querySelector("#nombre2").value);
    const result = document.querySelector("#total");
    total = nombre1 + nombre2;
    result.innerHTML = total;
    return total;
  });
