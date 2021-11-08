const inputElm = document.querySelector("#name-input");
const outputElm = document.querySelector("#name-output");


inputElm.addEventListener("input", (event) => {
    if (!inputElm.value) {
        return (outputElm.textContent = "Anonymous")
    }
    outputElm.textContent = event.currentTarget.value;
});