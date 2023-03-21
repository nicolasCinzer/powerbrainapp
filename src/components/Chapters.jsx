import ChapterBubble from './ChapterBubble.jsx';
import AddChapter from './AddChapter.jsx';
import { useNavigate, Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

const fetchChapters = () => {
  return fetch('http://localhost:3000/chapters')
    .then(res => res.json())
    .then(res => {
      return res;
    });
};

export default function Chapters() {
  const navigate = useNavigate();
  const [chaptersBubble, setChaptersBubble] = useState([]);
  const [chapterSelected, setChapterSelected] = useState(0);
  const [addChapter, setAddChapter] = useState(0);

  console.log(addChapter);
  const handleClickBubble = evt => {
    setAddChapter(option => (option != 0 ? false : 0));
    let idNode = evt.target.id || evt.target.parentElement.id;
    setChapterSelected(idNode);
  };

  const handleClickAdd = () => {
    setAddChapter(!addChapter);
    setChapterSelected(0);
    navigate('/');
  };

  const handleClickLogo = () => {
    setChapterSelected(0);
    navigate('/');
  };

  useEffect(() => {
    const chapters = fetchChapters();
    chapters.then(chapters => setChaptersBubble(chapters));
  }, []);

  return (
    <>
      <div className='grid grid-cols-3'>
        <div className='pl-10 py-4 text-secondary-color font-bold text-3xl bg-primary-color rounded-tr-3xl cursor-default animate__animated animate__slideInDown'>
          CHAPTERS
        </div>
        <div className='flex justify-start items-end animate__animated animate__slideInDown'>
          <div
            onClick={handleClickAdd}
            className='px-4 text-secondary-color font-bold text-2xl bg-primary-color text-center rounded-tr-2xl cursor-pointer border border-primary-color hover:bg-bg-color hover:text-primary-color hover:border-primary-color hover:border transition-all duration-300'
          >
            +
          </div>
        </div>
        <div
          onClick={handleClickLogo}
          className='py-4 text-secondary-color font-bold text-3xl bg-primary-color text-center rounded-tl-full cursor-pointer animate__animated animate__slideInDown'
        >
          PowerBrain
        </div>
      </div>
      <div className='pt-4 pl-4 border-t-2 border-primary-color flex gap-3 overflow-x-scroll scroll-smooth scrollbar-hide animate__animated animate__slideInUp'>
        {chaptersBubble?.map(({ name, duration, id }) => {
          return (
            <Link
              to={`/chapters/${id}`}
              key={id}
            >
              <ChapterBubble
                id={id}
                name={name}
                duration={duration}
                chapterSelected={chapterSelected}
                onClick={handleClickBubble}
              />
            </Link>
          );
        })}
      </div>
      <Outlet></Outlet>
      {addChapter ? <AddChapter addChapter={addChapter} /> : <></>}
      {addChapter === false ? <AddChapter addChapter={addChapter} /> : <></>}
    </>
  );
}
