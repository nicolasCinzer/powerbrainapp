export default id => {
  const URL = `http://localhost:3000/rutines?blockId=${id}`;

  return fetch(URL)
    .then(res => res.json())
    .then(res => {
      return res;
    });
};
