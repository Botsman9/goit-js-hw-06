const color = document.querySelector("#validation-input");
console.log(color);

color.addEventListener("blur", () => {
    if (color.value.length === color.dataset.length) {
        update("valid", "invalid");
    } else {
        update("invalid", "valid");
    }
});

function update(add, rem) {
    color.classList.add(add);
    color.classList.remove(rem);
};



