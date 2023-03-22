export default ids => {
  return ids.map(id => `id=${id}`).join('&');
};
