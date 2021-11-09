const form = document.querySelector(".login- form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    console.dir(login, password);
    let flag = false;
    const formData = new FormData(form);
    const object = {};
    formData.forEach((value, key) => {
        object[key] = value;
        if (!value) {
            flag = true;
        }
    });
    if (flag) {
        return alert("text")
    }
    console.log(object);
}
