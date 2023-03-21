import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const fetchBlocks = id => {
  let url = `http://localhost:3000/chapters/${parseInt(id)}/blocks`;
  return fetch(url)
    .then(res => res.json())
    .then(res => {
      return res;
    });
};

const fetchPhase = ids => {};

export default function Chapter() {
  const { id } = useParams();

  useEffect(() => {
    const blocks = fetchBlocks(id);
    blocks.then(res => {
      let phasesId = [...new Set(res.map(({ phaseId }) => phaseId))];
      /*       Promise.all([]).then(() => {});
       */
    });
  }, [id]);
  /*  */
  return <div>{/* blocks.map({}) */}</div>;
}
