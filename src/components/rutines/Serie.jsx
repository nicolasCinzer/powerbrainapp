import { IoIosRemove } from 'react-icons/io';

export default function Serie({ activeReadOnly, reps, weight, unit, type }) {
  return (
    <div className='flex gap-4 transition-all duration-300'>
      <input
        readOnly={activeReadOnly}
        disabled={activeReadOnly}
        type='text'
        placeholder={reps || 'Reps'}
        className='border-0 px-2 rounded-2xl bg-bg-color w-12 text-center outline-none focus:placeholder-transparent'
      />
      <div>Reps</div>
      <input
        readOnly={activeReadOnly}
        disabled={activeReadOnly}
        type='text'
        placeholder={weight || unit}
        className='border-0 px-2 rounded-2xl bg-bg-color w-12 text-center outline-none focus:placeholder-transparent'
      />
      <select
        defaultValue={unit}
        className='border-0 px-2 rounded-2xl bg-bg-color w-16 outline-none'
      >
        <option value='lbs'>LBs</option>
        <option value='kgs'>KGs</option>
      </select>
      <input
        readOnly={activeReadOnly}
        disabled={activeReadOnly}
        type='text'
        placeholder={type || 'Type'}
        className='border-0 px-4 rounded-2xl bg-bg-color w-24'
      />
    </div>
  );
}
