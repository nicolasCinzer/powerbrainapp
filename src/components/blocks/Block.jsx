import { useEffect, useState } from 'react';
import { CiNoWaitingSign } from 'react-icons/ci';
import { AiOutlineCheck } from 'react-icons/ai';

import { getPhase } from '../../services';

export default function Block({ phaseId, duration, readOnly, setAddBlock }) {
  const [phase, setPhase] = useState(0);
  const [inputsComplete, setInputsComplete] = useState(false);
  const [blockName, setBlockName] = useState('');
  const [blockDuration, setBlockDuration] = useState(0);

  const handleAcceptChanges = () => {};

  const handleDeniedChanges = () => {
    setAddBlock(false);
  };

  useEffect(() => {
    getPhase(phaseId).then(phase => setPhase(phase.name));
  }, []);

  useEffect(() => {
    blockDuration && blockName ? setInputsComplete(true) : setInputsComplete(false);
  }, [blockName, blockDuration]);

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between py-4 px-5 border border-primary-color rounded-2xl bg-primary-color w-64'>
        <input
          className={`text-xl text-secondary-color font-bold text-center ${
            !readOnly ? ' border-b rounded border-secondary-color' : ''
          } border-0 bg-primary-color w-28 placeholder:text-secondary-color hover:placeholder:text-third-color outline-none focus:placeholder-transparent`}
          readOnly={readOnly}
          disabled={readOnly}
          onChange={evt => setBlockName(evt.target.value)}
          placeholder={phase || 'Block'}
        />
        <input
          className={`text-center text-third-color w-20 bg-primary-color ${
            !readOnly ? ' border-b rounded border-secondary-color' : ''
          } placeholder:text-secondary-color hover:placeholder:text-third-color outline-none focus:placeholder-transparent`}
          readOnly={readOnly}
          type='number'
          disabled={readOnly}
          onChange={evt => setBlockDuration(evt.target.value)}
          placeholder={duration ? `${duration} Month` : 'Months'}
        />
      </div>
      {inputsComplete ? (
        <div className='flex justify-evenly gap-2'>
          <button
            onClick={handleAcceptChanges}
            className='transition-all duration-300 w-full flex justify-center items-center text-secondary-color bg-primary-color rounded-2xl py-1 border border-primary-color hover:border hover:border-primary-color hover:text-primary-color hover:bg-bg-color'
          >
            <AiOutlineCheck />
          </button>
          <button
            onClick={handleDeniedChanges}
            className='transition-all duration-300 w-full flex justify-center items-center text-secondary-color bg-primary-color rounded-2xl py-1 border border-primary-color hover:border hover:border-primary-color hover:text-primary-color hover:bg-bg-color'
          >
            <CiNoWaitingSign />
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
