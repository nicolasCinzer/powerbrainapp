export default id => {
  let url = `http://localhost:3000/chapters/${parseInt(id)}/blocks`;
  return fetch(url)
    .then(res => res.json())
    .then(res => {
      return res;
    });
};
