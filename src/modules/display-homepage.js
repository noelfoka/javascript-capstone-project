import showPopupComment from './show-popup-comment';
import count from './count-items';
import addLike from './add-like';

function getData() {
  fetch(
    'https://www.themealdb.com/api/json/v1/1/search.php?s',
  )
    .then((res) => res.json())
    .then((data) => {
      const lengthData = data.meals.length;
      const header = document.querySelector('.head');
      const random = document.querySelector('.random');
      const listSection = document.querySelector('.home');
      listSection.before(header);
      listSection.before(random);
      // .replaceChildren();

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
        div2.appendChild(div3);

        const like = document.createElement('i');
        like.className = 'fa-solid fa-heart';
        const likeid = data.meals[i].idMeal;
        div3.appendChild(like);

        const button = document.createElement('button');
        button.id = likeid;
        button.innerHTML = 'Comment';
        list.appendChild(button);

        listSection.append(list);

        button.addEventListener('click', (e) => {
          const { id } = e.target;
          showPopupComment(id);
        });

        function renderlike() {
          const apikey = 'tnE2k6P5BdZ2HCTjbd0V';
          fetch(
            `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apikey}/likes?`,
          )
            .then((response1) => response1.json())
            .then((data1) => {
              const likesData = data1;
              const likeData = likesData.find((element) => element.item_id === likeid);
              const likeCount = document.createElement('span');
              likeCount.innerHTML = `likes:${likeData.likes}`;
              div3.appendChild(likeCount);

              like.addEventListener('click', () => {
                if (likeData) {
                  likeData.likes += 1;
                  likeCount.innerHTML = `likes:${likeData.likes}`;
                }
                addLike(likeid);
              });
            });
        }
        renderlike();
      }
      count();
    });
}

export default getData;
