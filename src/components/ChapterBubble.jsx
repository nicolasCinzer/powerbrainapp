import useLocation from 'wouter/use-location';

export default function Chapter({ name, duration, id }) {
  const [, pushLocation] = useLocation();

  const handleClick = () => {
    pushLocation(`chapters/${id}`);
  };

  return (
    <div
      className='min-w-max text-secondary-color border border-primary-color p-4 rounded-2xl bg-primary-color text-lg flex flex-col-reverse font-bold cursor-pointer hover:bg-bg-color hover:text-primary-color hover:border-primary-color hover:border transition-all'
      onClick={handleClick}
    >
      <div className=''>{name}</div>
      <div className=''>{duration} Months</div>
    </div>
  );
}
