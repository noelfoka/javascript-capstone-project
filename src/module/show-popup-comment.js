async function showPopupComment(id) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await response.json();

  const mainSection = document.querySelector("header");
  const meal = document.createElement("div");
  meal.className = "meal-popup";

  const closeIcon = document.createElement("a");
  closeIcon.className = "meal-popup-close-icon fa fa-times";
  meal.appendChild(closeIcon);

  closeIcon.addEventListener("click", () => {
    meal.remove();
  });

  const div = document.createElement("div");
  div.className = "meal-popup-div-img";
  meal.appendChild(div);

  const img = document.createElement("img");
  img.src = `${data.meals[0].strMealThumb}`;
  div.appendChild(img);

  const p1 = document.createElement("h2");
  p1.textContent = `${data.meals[0].strMeal}`;
  meal.appendChild(p1);

  const p2 = document.createElement("p");
  p2.textContent = `Category: ${data.meals[0].strCategory}`;
  meal.appendChild(p2);

  const p3 = document.createElement("p");
  p3.textContent = `Area: ${data.meals[0].strArea}`;
  meal.appendChild(p3);

  const d = document.createElement("p");
  d.textContent = `${data.meals[0].strInstructions}`;
  meal.appendChild(d);

  mainSection.appendChild(meal);
}

export default showPopupComment;
