import { Link } from 'react-router-dom';
import { useHorizontalScroll } from '../../utils';
import ChapterBubble from './chapters/ChapterBubble';

export default function Chapters({ chaptersBubble, chapterSelected, handleClickBubble }) {
  const scrollRef = useHorizontalScroll();

  return (
    <div
      className='pt-4 pl-4 flex gap-4 overflow-x-scroll scroll-smooth scrollbar-hide animate__animated animate__fadeInLeft'
      ref={scrollRef}
    >
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
              handleClickBubble={handleClickBubble}
            />
          </Link>
        );
      })}
    </div>
  );
}
