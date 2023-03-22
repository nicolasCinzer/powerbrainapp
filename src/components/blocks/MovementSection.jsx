import Block from './Block';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovement } from '../../services';

export default function MovementSection({ blocks, movementId }) {
  const [movement, setMovement] = useState('');

  useEffect(() => {
    getMovement(movementId).then(movement => setMovement(movement.name));
  }, []);

  return (
    <div className='flex flex-col gap-3'>
      <div className='text-xl text-center text-secondary-color'>{movement}</div>
      <div className='flex flex-col gap-4'>
        {blocks.map(({ phaseId, movementId, duration, id }) => (
          <Link
            key={id}
            to={`blocks/${id}`}
          >
            <Block
              phaseId={phaseId}
              movementId={movementId}
              duration={duration}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
