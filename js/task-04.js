const counterValue = 0;

const num = document.querySelector(`#value`);
const btnRefs = document.querySelectorAll(`button`);

[...btnRefs].forEach(item => {
    item.addEventListener("click", addateValue)
});

function addateValue(element) {
    if (element.target.dataset.action === "decrement") {
    counterValue -= 1;
    num.textContent = counterValue;
        console.log(e.target.dataset.action);
    }
    if (element.target.dataset.action === "increment") {
    counterValue += 1;
    num.textContent = counterValue;
        console.log(e.target.dataset.action);
    }
};