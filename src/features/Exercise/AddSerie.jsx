import Serie from '../../components/rutines/Serie';

import { CiNoWaitingSign } from 'react-icons/ci';
import { AiOutlineCheck } from 'react-icons/ai';
import { useState } from 'react';

export default function AddSerie({ activeReadOnly, reps, weight, unit, type }) {
  const [add, setAdd] = useState(false);

  const handleAddSerie = () => {};

  const handleCancelSerie = () => {
    setAdd(false);
  };

  return (
    <>
      {add ? (
        <div className='flex gap-2'>
          <Serie
            activeReadOnly={activeReadOnly}
            reps={reps}
            weight={weight}
            unit={unit}
            type={type}
          />
          <button
            className=''
            onClick={handleAddSerie}
          >
            <AiOutlineCheck />
          </button>
          <button>
            <CiNoWaitingSign onClick={handleCancelSerie} />
          </button>
        </div>
      ) : (
        <button
          onClick={() => setAdd(true)}
          className='border border-bg-color bg-bg-color rounded-2xl text-secondary-color text-l hover:border hover:border-secondary-color hover:text-third-color  transition-all duration-300'
        >
          +
        </button>
      )}
    </>
  );
}
