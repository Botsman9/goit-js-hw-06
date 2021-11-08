const numberCategories = document.querySelectorAll(`li.item`);
console.log(`Number of categories:${numberCategories.length}`);

const category = categories.querySelectorAll(`ul`);
const nameCategories = categories.querySelectorAll(`h2`);

 
const elementsAnimals = category[0].querySelectorAll(`li`);
console.log(`Category:${nameCategories[0].textContent}`);
console.log(`Elements:${elementsAnimals.length}`);

const elementsProducts = category[1].querySelectorAll(`li`);
console.log(`Category:${nameCategories[1].textContent}`);
console.log(`Elements:${elementsProducts.length}`);

const elementsTechnologies = category[2].querySelectorAll(`li`);
console.log(`Category:${nameCategories[2].textContent}`);
console.log(`Elements:${elementsTechnologies.length}`);

