import { useEffect, useState } from 'react';
import { getMovement } from '../../services';
import getExercise from '../../services/getExercise';

export default function Exercise({ exerciseId, series, comments }) {
  const [exercise, setExercise] = useState({});
  const [movement, setMovement] = useState('');

  useEffect(() => {
    getExercise(exerciseId).then(exercise => {
      setExercise(exercise);
      if (exercise.movementId) {
        getMovement(exercise.movementId).then(movement => setMovement(movement.name));
      }
    });
  }, []);

  return (
    <div>
      <div>{exercise.name}</div>
      <div>{exercise.type}</div>
      <div>{exercise.type === 'Variant' ? movement : ''}</div>
      <div>
        {series.map(({ reps, weight, unit, type }) => (
          <div key={weight}>
            <div>{reps}</div>
            <div>{weight}</div>
            <div>{unit}</div>
            <div>{type}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
