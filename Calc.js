const display = document.getElementById("calcDisplay");
const mainBg = document.querySelector(".bg-white")
const toggleBtn = document.querySelector("#toggleMode")

let operator = "";

toggleBtn.addEventListener("click", toggleMode);

function toggleMode() {
  mainBg.classList.toggle("bg-white")
  mainBg.classList.toggle("calDarkMode")

}

function showNum(value) {
  if (value === "") {
    operator = "";
    display.textContent = "";
    return;
  }

  if (typeof value === "undefined") {
    operator = operator.slice(0, -1);
    display.textContent = operator;
    return;
  }

  if (value === "=") {
    operator = eval(operator).toString();
    display.textContent = operator;
    return;
  }

  operator += value;
  display.textContent = operator;
}
