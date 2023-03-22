import { useEffect, useState } from 'react';
import { getPhase } from '../../services';

export default function Block({ phaseId, movementId, duration }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    getPhase(phaseId).then(phase => setPhase(phase.name));
  }, []);

  return (
    <div className='flex justify-between py-4 px-5 border border-primary-color rounded-2xl bg-primary-color text-third-color w-64'>
      <div className='text-2xl text-center'>{phase}</div>
      <div className='flex justify-center items-center'>{`${duration} Month`}</div>
    </div>
  );
}
