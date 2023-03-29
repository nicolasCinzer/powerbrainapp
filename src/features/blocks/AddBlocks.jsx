export default function AddBlocks() {
  return (
    <div className='grid grid-cols-4 m-12 p-8 gap-4 border border-primary-color rounded-2xl bg-primary-color'>
      <select className='border border-primary-color rounded-xl py-2 px-4 bg-bg-color text-primary-color text-lg col-span-4'></select>
      <select
        type='text'
        placeholder='a'
        className='border border-primary-color rounded-xl py-2 px-4 bg-bg-color text-primary-color text-lg col-span-2'
      ></select>
      <input
        type='text'
        placeholder='Duration'
        className='border border-primary-color rounded-xl py-2 px-4 bg-bg-color text-primary-color text-lg col-span-1'
      />
      <button className='font-bold border-2 border-secondary-color bg-bg-color text-secondary-color hover:bg-secondary-color hover:border-2 hover:border-primary-color rounded-xl hover:text-third-color transition-all duration-300 col-span-1'>
        ADD BLOCK
      </button>
    </div>
  );
}
