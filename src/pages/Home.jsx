import Header from '../components/home/Header.jsx';
import Chapters from '../components/home/Chapters.jsx';
import AddChapter from '../features/chapters/AddChapter.jsx';

import { getChapters } from '../services';

import { useNavigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Home() {
  const navigate = useNavigate();
  const [chaptersBubble, setChaptersBubble] = useState([]);
  const [chapterSelected, setChapterSelected] = useState(0);
  const [addChapter, setAddChapter] = useState(0);
  const [chapterAdded, setChapterAdded] = useState(false);

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
    getChapters().then(chapters => setChaptersBubble(chapters));
  }, [chapterAdded]);

  return (
    <>
      <Header
        handleClickAdd={handleClickAdd}
        handleClickLogo={handleClickLogo}
      />
      <Chapters
        chaptersBubble={chaptersBubble}
        chapterSelected={chapterSelected}
        handleClickBubble={handleClickBubble}
      />
      {addChapter ? (
        <AddChapter
          addChapter={addChapter}
          chapterAdded={chapterAdded}
          setChapterAdded={setChapterAdded}
        />
      ) : (
        <></>
      )}
      {addChapter === false ? <AddChapter addChapter={addChapter} /> : <></>}
      <Outlet />
    </>
  );
}
