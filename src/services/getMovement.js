export default (id, flag) => {
  const URL = `http://localhost:3000/movements/${id}`;

  return fetch(URL)
    .then(res => res.json())
    .then(res => {
      return res;
    });
};
