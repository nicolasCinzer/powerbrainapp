import Block from './Block';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import { getMovement } from '../../services';

export default function MovementSection({ blocks, movementId }) {
  const [movement, setMovement] = useState('');
  const [addBlock, setAddBlock] = useState(false);

  useEffect(() => {
    getMovement(movementId).then(movement => setMovement(movement.name));
  }, []);

  const handleAddBlock = () => {
    setAddBlock(!addBlock);
  };

  return (
    <div className='flex flex-col gap-3'>
      <div className='text-xl text-secondary-color flex gap-3 justify-center items-center rounded-2xl hover:text-third-color hover:bg-primary-color transition-all duration-300'>
        {movement}
        <div
          onClick={handleAddBlock}
          className='hover:text-third-color'
        >
          <AiOutlinePlus />
        </div>
      </div>
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
              readOnly={true}
            />
          </Link>
        ))}
        {addBlock ? (
          <Block
            readOnly={false}
            setAddBlock={setAddBlock}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
