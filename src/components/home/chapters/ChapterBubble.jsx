export default function ChapterBubble({ name, duration, id, chapterSelected, handleClickBubble }) {
  return (
    <div
      id={id}
      className={`w-56 ${
        id == chapterSelected ? 'text-third-color' : 'text-secondary-color'
      } border border-primary-color p-4 rounded-2xl bg-primary-color text-lg flex flex-col-reverse cursor-pointer hover:bg-bg-color hover:text-primary-color hover:border-primary-color hover:border transition-all duration-300`}
      onClick={handleClickBubble}
    >
      <div className='text-xl'>{name}</div>
      <div className='font-bold'>{duration} Months</div>
    </div>
  );
}
