import showPopupComment from './show-popup-comment.js';
import addLike from './add-like.js';
import count from './count-items.js';
import showlikes from './display-likes.js';

async function getData() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s');
  const data = await response.json();
  const lengthData = data.meals.length;
  const header = document.querySelector('.head');
  const random = document.querySelector('.random');
  const listSection = document.querySelector('.home');
  listSection.before(header);
  listSection.before(random);
  listSection.replaceChildren();
  for (let i = 0; i < lengthData; i += 1) {
    const list = document.createElement('div');
    list.className = 'meal';

    const div = document.createElement('div');
    div.className = 'div-img';
    list.appendChild(div);

    const descrpt1 = document.createElement('img');
    descrpt1.src = `${data.meals[i].strMealThumb}`;
    div.appendChild(descrpt1);

    const div2 = document.createElement('div');
    div2.className = 'div-like';
    list.appendChild(div2);

    const p = document.createElement('p');
    p.textContent = `${data.meals[i].strMeal}`;
    div2.appendChild(p);

    const div3 = document.createElement('div');
    div3.className = 'div-heart';
    div3.id = 'div-heart';
    div2.appendChild(div3);

    const like = document.createElement('i');
    like.className = 'fa-solid fa-heart';
    like.id = data.meals[i].idMeal;
    div3.appendChild(like);

    showlikes(data.meals[i].idMeal);

    const likeCount = document.createElement('label');
    likeCount.id = `id${data.meals[i].idMeal}`;
    likeCount.innerHTML = 'likes';
    div3.appendChild(likeCount);

    const button = document.createElement('button');
    button.id = data.meals[i].idMeal;
    button.innerHTML = 'Comment';
    list.appendChild(button);

    listSection.append(list);

    button.addEventListener('click', (e) => {
      const { id } = e.target;
      showPopupComment(id);
    });

    like.addEventListener('click', (e) => {
      const { id } = e.target;
      addLike(id);
      showlikes(id);
    });
  }
  const parent = document.getElementById('data');
  const counter = document.getElementById('meals');
  counter.innerHTML = `Meals (${count(parent)})`;
}

export default getData;
