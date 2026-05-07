const dolor = document.getElementById("dolor");
const valorDolor = document.getElementById("valorDolor");

dolor.addEventListener("input", () => {
    valorDolor.textContent = dolor.value;
});
