import { useEffect, useState } from 'react';
import { BiDownArrow } from 'react-icons/bi';
import { IoIosRemove } from 'react-icons/io';
import { FiEdit2 } from 'react-icons/fi';
import AddSerie from '../../features/Exercise/AddSerie';

import { getMovement } from '../../services';
import getExercise from '../../services/getExercise';
import Serie from './Serie';

export default function Exercise({ exerciseId, series, comments }) {
  const [currentSeries, setCurrentSeries] = useState([]);
  const [exercise, setExercise] = useState({});
  const [movement, setMovement] = useState('');
  const [activeReadOnly, setActiveEdit] = useState(true);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    setCurrentSeries(series);
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

  const handleShowComments = () => {
    setShowComments(!showComments);
  };

  const handleDeleteSerie = idR => {
    const modifiedSeries = currentSeries.filter(({ id }) => id !== idR);

    setCurrentSeries(modifiedSeries);
  };

  return (
    <div className='text-third-color flex flex-col py-4 border border-primary-color bg-primary-color rounded-2xl'>
      <div className='flex justify-evenly'>
        <input
          type='text'
          placeholder={exercise.name || 'Exercise'}
          readOnly={activeReadOnly}
          disabled={activeReadOnly}
          className='border-0 px-4 rounded-2xl bg-bg-color'
        />
        <button
          onClick={handleShowComments}
          className={`text-l h-fit p-2 rounded-full transition-all duration-300 ${
            !showComments ? 'text-bg-color hover:bg-secondary-color hover:text-bg-color' : 'text-third-color hover:bg-bg-color'
          }`}
        >
          <BiDownArrow />
        </button>
        <div className='flex flex-col gap-2'>
          {currentSeries.map(({ reps, weight, unit, type, id }) => (
            <div
              key={id}
              id={id}
              className='flex gap-2'
            >
              <Serie
                activeReadOnly={activeReadOnly}
                reps={reps}
                weight={weight}
                unit={unit}
                type={type}
              />
              <button
                onClick={() => handleDeleteSerie(id)}
                className='w-10 flex justify-center items-center text-bg-color rounded-3xl hover:bg-secondary-color transition-all duration-300'
              >
                <IoIosRemove />
              </button>
            </div>
          ))}
          <AddSerie />
        </div>
        <div>{exercise.type}</div>
        <div>{exercise.type === 'Variant' ? movement : ''}</div>
        <button
          onClick={handleActiveEdit}
          className={`h-fit p-2 rounded-full ${
            activeReadOnly ? 'bg-primary-color text-bg-color hover:bg-secondary-color hover:text-bg-color' : 'text-third-color hover:bg-bg-color'
          }  transition-all duration-300`}
        >
          <FiEdit2 />
        </button>
      </div>
      {showComments ? (
        <input
          type='text'
          placeholder={comments || 'Comentarios...'}
          readOnly={activeReadOnly}
          disabled={activeReadOnly}
          className='mt-4 mx-6 border-0 px-4 py-2 rounded-2xl bg-bg-color'
        />
      ) : null}
    </div>
  );
}
