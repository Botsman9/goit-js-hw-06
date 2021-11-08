const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredien = document.querySelector("#ingredients");

const yyy = ingredients.map((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  return li;
});

ingredien.append(...yyy);
console.log(yyy);


