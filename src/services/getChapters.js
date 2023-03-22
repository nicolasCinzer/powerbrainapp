export default () => {
  return fetch('http://localhost:3000/chapters')
    .then(res => res.json())
    .then(res => {
      return res;
    });
};
