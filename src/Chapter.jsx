import { useEffect, useState } from 'react';

const fetchBlocks = id => {
  let url = `http://localhost:3000/chapters/${parseInt(id)}/blocks`;
  return fetch(url)
    .then(res => res.json())
    .then(res => {
      return res;
    });
};

export default function Chapter({ params }) {
  const [id, setId] = useState(params.id);
  useEffect(() => {
    setId(params.id);
    const blocks = fetchBlocks(id);
    blocks.then(res => console.log(res));
  }, [id]);

  return <div></div>;
}
