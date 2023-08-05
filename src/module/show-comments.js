async function showCommentsList(id) {
  const apiKey = 'tnE2k6P5BdZ2HCTjbd0V';
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/comments?item_id=${id}`,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

  try {
    const data = await response.json();

    const parent = document.querySelector('.meal-popup-comments-container');
    parent.innerHTML = '';
    const title = document.createElement('h3');
    title.className = 'meal-popup-comments-title';
    title.innerHTML = `Comments (${data.length || 0})`;
    parent.appendChild(title);

    data.forEach((comment) => {
      const commentRow = document.createElement('p');
      commentRow.className = 'meal-popup-comments-row';
      commentRow.innerHTML = `${comment.creation_date} ${comment.username}: ${comment.comment} `;
      parent.appendChild(commentRow);
    });
  } catch (err) {
    // do nothing
  }
}

export default showCommentsList;
