const checkoutButton = document.querySelector(".button");
const answerHolder = document.querySelector("#total");
const navButtons = document.querySelectorAll("#nav .topping");
const orderDiv = document.querySelector(".order");
let total = 0;

checkoutButton.addEventListener("click", () => {
  total = 0;
  const ingredients = document.querySelectorAll(".order .topping");
  ingredients.forEach((ingredient) => {
    total += Number(ingredient.dataset.price);
  });
  total = total.toFixed(2);
  answerHolder.innerHTML = `The total cost of your burger is $${total}`;
});

navButtons.forEach((navButton) => {
  navButton.addEventListener("click", () => {
    const d = navButton.dataset;
    const name = d.ingredient.charAt(0).toUpperCase() + d.ingredient.slice(1);

    orderDiv.innerHTML += `<div class="topping ${d.ingredient}" data-ingredient=${d.ingredient} data-price=${d.price}>${name}</div>`;
  });
});
