export default (valueName, valueDuration) => {
  return fetch('http://localhost:3000/chapters', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: valueName,
      duration: valueDuration,
    }),
  }).then(res => res.json());
};
