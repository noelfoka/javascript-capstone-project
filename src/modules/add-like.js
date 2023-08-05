async function addLike(id) {
  const key = 'tnE2k6P5BdZ2HCTjbd0V';
  fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${key}/likes/`,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        likes: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Accept: 'application/json',
      },
    },
  ).then((response) => response.json());
}
export default addLike;
