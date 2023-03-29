import MovementSection from '../components/blocks/MovementSection';
import AddBlock from '../features/blocks/AddBlocks';

import { getBlocks } from '../services';

import { AiOutlinePlus } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

export default function Chapter() {
  const { id } = useParams();
  const [movements, setMovements] = useState([]);
  const [blocks, setBlocks] = useState([]);
  const [addBlock, setAddBlock] = useState(false);

  const handleAddBlock = () => {
    setAddBlock(!addBlock);
  };

  useEffect(() => {
    getBlocks(id).then(blocks => {
      setMovements([...new Set(blocks.map(block => block.movementId))]);
      setBlocks(blocks);
    });
  }, [id]);

  return (
    <>
      <div className='border-b-2 pt-4 border-primary-color'></div>
      <div className='flex'>
        <button
          onClick={handleAddBlock}
          className='py-2 px-4 bg-primary-color rounded-br-lg text-secondary-color border-b-2 border-r-2 border-primary-color hover:bg-bg-color hover:border-b-2 hover:border-r-2 hover:border-primary-color transition-all duration-300'
        >
          {' '}
          <AiOutlinePlus />
        </button>
        <div className='w-full text-center text-secondary-color text-2xl font-bold'>BLOCKS</div>
      </div>
      {addBlock ? (
        <>
          <AddBlock />
        </>
      ) : (
        <div className='flex justify-around gap-4 mt-4'>
          {movements.map(id => (
            <MovementSection
              key={id}
              blocks={blocks.filter(block => block.movementId == id)}
              movementId={id}
            />
          ))}
        </div>
      )}
      <Outlet />
    </>
  );
}
