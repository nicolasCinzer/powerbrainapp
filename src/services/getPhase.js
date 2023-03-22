export default id => {
  const URL = `http://localhost:3000/phases/${id}`;

  return fetch(URL)
    .then(res => res.json())
    .then(res => {
      return res;
    });
};
