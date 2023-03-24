import { useEffect, useState } from 'react';
import { BiDownArrow } from 'react-icons/bi';
import { FiEdit2,  } from 'react-icons/fi';

import { getMovement } from '../../services';
import getExercise from '../../services/getExercise';

export default function Exercise({ exerciseId, series, comments }) {
  const [exercise, setExercise] = useState({});
  const [movement, setMovement] = useState('');
  const [activeReadOnly, setActiveEdit] = useState(true);

  useEffect(() => {
    getExercise(exerciseId).then(exercise => {
      setExercise(exercise);
      if (exercise.movementId) {
        getMovement(exercise.movementId).then(movement => setMovement(movement.name));
      }
    });
  }, []);

  const handleActiveEdit = () => {
    setActiveEdit(!activeReadOnly);
  };

  const handleShowComments = () => {};

  return (
    <div className='text-third-color flex flex-col py-4 border border-primary-color bg-primary-color rounded-2xl'>
      <div className='flex justify-evenly'>
        <input
          type='text'
          placeholder={exercise.name}
          readOnly={activeReadOnly}
          className='border-0 px-4 rounded-2xl bg-bg-color'
        />
        <button onClick={handleShowComments} className='text-bg-color text-xl h-fit p-2 rounded-full bg-bg-color'>
          <BiDownArrow />
        </button>
        <div className='flex flex-col gap-2'>
          {series.map(({ reps, weight, unit, type }, i) => (
            <div
              key={i}
              className='flex gap-4'
            >
              <input
                readOnly={activeReadOnly}
                type='text'
                placeholder={reps}
                className='border-0 px-2 rounded-2xl bg-bg-color w-12 text-center outline-none focus:placeholder-transparent'
              />
              <div>reps</div>
              <input
                readOnly={activeReadOnly}
                type='text'
                placeholder={weight}
                className='border-0 px-4 rounded-2xl bg-bg-color'
              />
              <select defaultValue={unit}>
                <option value='lbs'>LBs</option>
                <option value='kgs'>KGs</option>
              </select>
              <input
                readOnly={activeReadOnly}
                type='text'
                placeholder={type}
                className='border-0 px-4 rounded-2xl bg-bg-color'
              />
            </div>
          ))}
        </div>
        <div>{exercise.type}</div>
        <div>{exercise.type === 'Variant' ? movement : ''}</div>
        <button
          onClick={handleActiveEdit}
          className={`h-fit p-2 rounded-full ${
            activeReadOnly ? 'bg-bg-color text-secondary-color hover:bg-secondary-color hover:text-bg-color' : 'bg-third-color text-bg-color'
          }  transition-all duration-300`}
        >
          <FiEdit2 />
        </button>
      </div>
      <input
        type='text'
        placeholder={comments}
        readOnly={activeReadOnly}
        className='mt-4 mx-6'
      />
    </div>
  );
}
