import Chapter from './ChapterBubble.jsx';

import { useEffect, useState } from 'react';

const fetchChapters = () => {
  return fetch('http://localhost:3000/chapters')
    .then(res => res.json())
    .then(res => {
      return res;
    });
};

export default function Chapters() {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const chapters = fetchChapters();
    chapters.then(chapters => setChapters(chapters));
  }, []);

  return (
    <div className=''>
      <div className='grid grid-cols-3'>
        <div className='pl-4 py-4 text-secondary-color font-bold text-3xl bg-primary-color text-center rounded-tr-full'>Chapters</div>
        <div className='flex justify-center items-center text-secondary-color font-bold text-xl bg-primary-color text-center rounded-full'>Add</div>
        <div className='py-4 text-secondary-color font-bold text-3xl bg-primary-color text-center rounded-tl-full'>PowerBrain</div>
      </div>
      <div className='pt-4 pl-4 border-t-2 border-secondary-color flex gap-3 overflow-x-scroll scroll-smooth scrollbar-hide'>
        {chapters?.map(({ name, duration, id }) => {
          return (
            <Chapter
              key={id}
              id={id}
              name={name}
              duration={duration}
            />
          );
        })}
      </div>
    </div>
  );
}
