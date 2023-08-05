import addNewComment from './add-new-comment.js';
import showCommentsList from './show-comments.js';

async function showPopupComment(id) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await response.json();

  const mainSection = document.querySelector('header');
  const meal = document.createElement('div');
  meal.className = 'meal-popup';

  const closeIcon = document.createElement('a');
  closeIcon.className = 'fa fa-times';
  meal.appendChild(closeIcon);

  closeIcon.addEventListener('click', () => {
    meal.remove();
  });

  const div = document.createElement('div');
  div.className = 'meal-popup-div-img';
  meal.appendChild(div);

  const img = document.createElement('img');
  img.src = `${data.meals[0].strMealThumb}`;
  div.appendChild(img);

  const p1 = document.createElement('h2');
  p1.textContent = `${data.meals[0].strMeal}`;
  meal.appendChild(p1);

  const IngredientsDiv = document.createElement('div');
  IngredientsDiv.className = 'Ingredients';
  meal.appendChild(IngredientsDiv);

  const Ingredients = document.createElement('ul');
  IngredientsDiv.appendChild(Ingredients);

  const IngredientsItems1 = document.createElement('li');
  Ingredients.appendChild(IngredientsItems1);

  const imgIngredients1 = document.createElement('img');
  imgIngredients1.src = `https://www.themealdb.com/images/ingredients/${data.meals[0].strIngredient1}.png`;
  IngredientsItems1.appendChild(imgIngredients1);

  const IngredientsName1 = document.createElement('h3');
  IngredientsName1.textContent = data.meals[0].strIngredient1;
  IngredientsItems1.appendChild(IngredientsName1);

  const IngredientsItems2 = document.createElement('li');
  Ingredients.appendChild(IngredientsItems2);

  const imgIngredients2 = document.createElement('img');
  imgIngredients2.src = `https://www.themealdb.com/images/ingredients/${data.meals[0].strIngredient2}.png`;
  IngredientsItems2.appendChild(imgIngredients2);

  const IngredientsName2 = document.createElement('h3');
  IngredientsName2.textContent = data.meals[0].strIngredient2;
  IngredientsItems2.appendChild(IngredientsName2);

  const IngredientsItems3 = document.createElement('li');
  Ingredients.appendChild(IngredientsItems3);

  const imgIngredients3 = document.createElement('img');
  imgIngredients3.src = `https://www.themealdb.com/images/ingredients/${data.meals[0].strIngredient3}.png`;
  IngredientsItems3.appendChild(imgIngredients3);

  const IngredientsName3 = document.createElement('h3');
  IngredientsName3.textContent = data.meals[0].strIngredient3;
  IngredientsItems3.appendChild(IngredientsName3);

  const IngredientsItems4 = document.createElement('li');
  Ingredients.appendChild(IngredientsItems4);

  const imgIngredients4 = document.createElement('img');
  imgIngredients4.src = `https://www.themealdb.com/images/ingredients/${data.meals[0].strIngredient4}.png`;
  IngredientsItems4.appendChild(imgIngredients4);

  const IngredientsName4 = document.createElement('h3');
  IngredientsName4.textContent = data.meals[0].strIngredient4;
  IngredientsItems4.appendChild(IngredientsName4);

  const IngredientsItems5 = document.createElement('li');
  Ingredients.appendChild(IngredientsItems5);

  const imgIngredients5 = document.createElement('img');
  imgIngredients5.src = `https://www.themealdb.com/images/ingredients/${data.meals[0].strIngredient5}.png`;
  IngredientsItems5.appendChild(imgIngredients5);

  const IngredientsName5 = document.createElement('h3');
  IngredientsName5.textContent = data.meals[0].strIngredient5;
  IngredientsItems5.appendChild(IngredientsName5);

  const IngredientsItems6 = document.createElement('li');
  Ingredients.appendChild(IngredientsItems6);

  const imgIngredients6 = document.createElement('img');
  imgIngredients6.src = `https://www.themealdb.com/images/ingredients/${data.meals[0].strIngredient6}.png`;
  IngredientsItems6.appendChild(imgIngredients6);

  const IngredientsName6 = document.createElement('h3');
  IngredientsName6.textContent = data.meals[0].strIngredient6;
  IngredientsItems6.appendChild(IngredientsName6);

  const Category = document.createElement('h4');
  Category.textContent = 'Category: ';
  meal.appendChild(Category);

  const CategorySpan1 = document.createElement('span');
  CategorySpan1.textContent = data.meals[0].strCategory;
  Category.appendChild(CategorySpan1);

  const Area = document.createElement('h4');
  Area.textContent = 'Area: ';
  meal.appendChild(Area);

  const CategorySpan2 = document.createElement('span');
  CategorySpan2.textContent = data.meals[0].strArea;
  Area.appendChild(CategorySpan2);

  const d = document.createElement('p');
  d.textContent = `${data.meals[0].strInstructions}`;
  meal.appendChild(d);

  // Comments
  const commentsContainer = document.createElement('div');
  commentsContainer.className = 'meal-popup-comments-container';
  meal.appendChild(commentsContainer);

  showCommentsList(id);

  const form = document.createElement('form');
  form.className = 'meal-popup-add-comment-form';
  meal.appendChild(form);

  const formTitle = document.createElement('h3');
  formTitle.className = 'meal-popup-add-comment-form-title';
  formTitle.innerHTML = 'Add a comment';
  form.appendChild(formTitle);

  const formUsername = document.createElement('input');
  formUsername.className = 'meal-popup-add-comment-form-username';
  formUsername.setAttribute('placeholder', 'Your name');
  form.appendChild(formUsername);

  const formComment = document.createElement('textarea');
  formComment.className = 'meal-popup-add-comment-form-comment';
  formComment.setAttribute('placeholder', 'Your insights');
  form.appendChild(formComment);

  const formBtn = document.createElement('button');
  formBtn.className = 'meal-popup-add-comment-form-btn';
  formBtn.setAttribute('placeholder', 'Your comment');
  formBtn.innerHTML = 'Comment';
  form.appendChild(formBtn);

  const formResContainer = document.createElement('p');
  formResContainer.className = 'meal-popup-add-comment-form-res';
  form.appendChild(formResContainer);

  formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (formUsername.value && formComment.value) {
      addNewComment(id, formUsername.value, formComment.value);
    } else {
      const formRes = document.createElement('p');
      formRes.className = 'meal-popup-add-comment-form-res';
      formRes.innerHTML = 'Username and comment should not be empty';
      formResContainer.innerHTML = '';
      formResContainer.appendChild(formRes);
    }
  });

  mainSection.appendChild(meal);
}

export default showPopupComment;
