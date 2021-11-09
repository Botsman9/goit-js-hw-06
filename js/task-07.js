const refs = {
    inputRef: document.querySelector("#font-size-control"),
    textRef: document.querySelector("#text"),
}
console.log(refs);

inputRef.addEventListener("input", () => {
    textRef.textContent.datasetSize = inputRef.value;
 })