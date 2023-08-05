async function addLike(id) {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/otoY0fxXk5LjLMlhzjv8/likes', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      likes: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json());
}
export default addLike;