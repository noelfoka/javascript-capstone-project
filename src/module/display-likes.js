async function showlikes(id) {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/otoY0fxXk5LjLMlhzjv8/likes',
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

  try {
    const data = await response.json();
    const likeCount = document.getElementById(`id${id}`);
    data.map((like) => {
      if (like.item_id === id) {
        likeCount.textContent = `${like.likes} likes`;
      }
      return true;
    });
  } catch (err) {
    // do nothing
  }
}

export default showlikes;