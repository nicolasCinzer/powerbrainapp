import MovementSection from '../components/blocks/MovementSection';

import { getBlocks } from '../services';

import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

export default function Chapter() {
  const { id } = useParams();
  const [movements, setMovements] = useState([]);
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    getBlocks(id).then(blocks => {
      setMovements([...new Set(blocks.map(block => block.movementId))]);
      setBlocks(blocks);
    });
  }, [id]);

  return (
    <>
      <div className='flex justify-evenly gap-4 mt-4'>
        {movements.map(id => (
          <MovementSection
            key={id}
            blocks={blocks.filter(block => block.movementId == id)}
            movementId={id}
          />
        ))}
      </div>
      <Outlet />
    </>
  );
}
