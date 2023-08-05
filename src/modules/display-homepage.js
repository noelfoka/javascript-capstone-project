import showPopupComment from "./show-popup-comment.js";

async function getData() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s"
  );
  const data = await response.json();
  const header = document.querySelector(".head");
  const random = document.querySelector(".random");
  const listSection = document.querySelector(".home");
  listSection.before(header);
  listSection.before(random);
  for (let i = 0; i < 20; i += 1) {
    const list = document.createElement("div");
    list.className = "meal";

    const div = document.createElement("div");
    div.className = "div-img";
    list.appendChild(div);

    const descrpt1 = document.createElement("img");
    descrpt1.src = `${data.meals[i].strMealThumb}`;
    div.appendChild(descrpt1);

    const div2 = document.createElement("div");
    div2.className = "div-like";
    list.appendChild(div2);

    const p = document.createElement("p");
    p.textContent = `${data.meals[i].strMeal}`;
    div2.appendChild(p);

    const like = document.createElement("i");
    like.className = "fa-regular fa-heart";
    div2.appendChild(like);

    const button = document.createElement("button");
    button.id = data.meals[i].idMeal;
    button.innerHTML = "Comment";
    list.appendChild(button);

    listSection.append(list);

    button.addEventListener("click", (e) => {
      const { id } = e.target;
      showPopupComment(id);
    });
  }
}

export default getData;
