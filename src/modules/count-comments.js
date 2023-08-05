const countComments = () => {
  const comments = document.querySelectorAll('.meal-popup-comments-row');
  return comments.length;
};

export default countComments;
