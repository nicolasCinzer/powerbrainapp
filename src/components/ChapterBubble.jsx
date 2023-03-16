export default function Chapter({ name, duration, id, chapterSelected, onClick }) {
  return (
    <div
      id={id}
      className={`min-w-max ${
        id == chapterSelected ? 'text-third-color' : 'text-secondary-color'
      } border border-primary-color p-4 rounded-2xl bg-primary-color text-lg flex flex-col-reverse font-bold cursor-pointer hover:bg-bg-color hover:text-primary-color hover:border-primary-color hover:border transition-all duration-300`}
      onClick={onClick}
    >
      <div className=''>{name}</div>
      <div className=''>{duration} Months</div>
    </div>
  );
}
