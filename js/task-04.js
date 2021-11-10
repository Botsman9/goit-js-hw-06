let counterValue = 0;

const num = document.querySelector(`#value`);
const btnRefs = document.querySelectorAll(`button`);

[...btnRefs].forEach(item => {
    item.addEventListener("click", addateValue)
 });




    function addateValue(event) {
        const dataNum = event.target.dataset.action;
        
    if (dataNum === "decrement") {
       counterValue -= 1;
        num.textContent = counterValue ;
        
    }
    if (dataNum === "increment") {
    counterValue += 1;
    num.textContent = counterValue;
        
        }
        
};


    
    

