const count = () => {
  const box = document.getElementById('data');

  const directChildren = box.children.length;
  const counter = document.getElementById('meals');
  counter.innerHTML = `Meals (${directChildren})`;
};

export default count;
