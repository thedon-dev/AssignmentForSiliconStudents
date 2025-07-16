const display = document.getElementById('calcDisplay');
const dackMode = document.getElementById()

let operator = "";

function showNum(value) {
    if (value === "") {
        operator = "";
        display.textContent = "0";
        return;
    }

    if (typeof value === "undefined") {
        operator = operator.slice(0, -1);
        display.textContent = operator || "0";
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

