import { useState } from 'react';

export default function addChapter({ addChapter, chapterAdded, setChapterAdded }) {
  const [valueName, setValueName] = useState('');
  const [valueDuration, setValueDuration] = useState('');

  const handleClick = () => {
    if (!valueName || !valueDuration) return;
    fetch('http://localhost:3000/chapters', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: valueName,
        duration: valueDuration,
      }),
    })
      .then(res => res.json())
      .then(() => {
        setChapterAdded(!chapterAdded);
        setValueName('');
        setValueDuration('');
      })
      .catch(err => console.error(err));
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
        value={valueName}
        onChange={handleChangeName}
      />
      <input
        className='border border-primary-color rounded-xl py-2 px-4 bg-bg-color text-primary-color text-lg col-span-3'
        type='text'
        placeholder='Duration on Months'
        value={valueDuration}
        onChange={handleChangeDuration}
      />
      <button
        onClick={handleClick}
        className='font-bold border-2 border-secondary-color bg-bg-color text-secondary-color hover:bg-secondary-color hover:border-2 hover:border-primary-color rounded-xl hover:text-third-color transition-all duration-300'
      >
        ADD CHAPTER
      </button>
    </div>
  );
}
