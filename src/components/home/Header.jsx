export default function Header({ handleClickAdd, handleClickLogo }) {
  return (
    <div className='grid grid-cols-3 border-b-2 border-primary-color animate__animated animate__fadeIn'>
      <div className='pl-10 py-4 text-secondary-color font-bold text-3xl bg-primary-color rounded-tr-3xl cursor-default'>CHAPTERS</div>
      <div className='flex justify-start items-end'>
        <div
          onClick={handleClickAdd}
          className='px-4 text-secondary-color font-bold text-2xl bg-primary-color text-center rounded-tr-2xl cursor-pointer border border-primary-color hover:bg-bg-color hover:text-primary-color hover:border-primary-color hover:border transition-all duration-300'
        >
          +
        </div>
      </div>
      <div
        onClick={handleClickLogo}
        className='py-4 text-secondary-color font-bold text-3xl bg-primary-color text-center rounded-tl-full cursor-pointer'
      >
        PowerBrain
      </div>
    </div>
  );
}
