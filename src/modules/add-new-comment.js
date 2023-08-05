import showCommentsList from './show-comments.js';

async function addNewComment(itemId, username, comment) {
  const apiKey = 'tnE2k6P5BdZ2HCTjbd0V';
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/comments/`,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: itemId,
        username,
        comment,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  await response;

  const parent = document.querySelector('.meal-popup-comments-container');
  parent.innerHTML = '';

  showCommentsList(itemId, parent);
}

export default addNewComment;
