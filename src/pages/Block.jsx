import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Exercise from '../components/rutines/Exercise';

import { getRutines } from '../services';

export default function Block() {
  const { id } = useParams();
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    getRutines(id).then(exercise => {
      setExercises(exercise);
    });
  }, []);

  return (
    <div>
      {exercises.map(({ exerciseId, series, comments, id }) => (
        <Exercise
          key={id}
          exerciseId={exerciseId}
          series={series}
          comments={comments}
        />
      ))}
    </div>
  );
}
