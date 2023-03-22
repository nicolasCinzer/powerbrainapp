import { useState } from 'react';

export default function addChapter({ addChapter }) {
  const [valueName, setValueName] = useState('');
  const [valueDuration, setValueDuration] = useState('');

  const handleClick = () => {
    fetch('http://localhost:3000/chapters', {
      method: 'POST',
      headers: 'application/json',
      body: JSON.stringify({
        name: valueName,
        duration: valueDuration,
      }),
    }).then(res => console.log(res));
  };

  const handleChangeName = ({ target }) => {
    setValueName(target.value);
  };
  const handleChangeDuration = ({ target }) => {
    setValueDuration(target.value);
  };

  return (
    <div
      className={`grid grid-cols-4 bg-center gap-4 p-8 m-12 bg-primary-color rounded-2xl transition-all animate__animated ${
        addChapter ? 'animate__fadeInLeft' : 'animate__fadeOutLeft'
      } `}
    >
      <input
        className='border border-primary-color rounded-xl py-2 px-4 bg-bg-color text-primary-color text-lg col-span-4'
        type='text'
        placeholder='Name'
        onChange={handleChangeName}
      />
      <input
        className='border border-primary-color rounded-xl py-2 px-4 bg-bg-color text-primary-color text-lg col-span-3'
        type='text'
        placeholder='Duration on Months'
        onChange={handleChangeDuration}
      />
      <button
        onClick={handleClick}
        className='bg-secondary-color border-2 border-primary-color rounded-xl text-third-color font-bold hover:border-2 hover:border-secondary-color hover:bg-bg-color hover:text-secondary-color transition-all duration-300'
      >
        ADD CHAPTER
      </button>
    </div>
  );
}
