function SearchInput({ setSearch, search }) {
  return (
    <div className='mb-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
      <div className='bg-white rounded shadow'>
        <div className='flex items-center'>
          <input
            autoComplete='off'
            className='py-2 px-4 w-full outline-none'
            type='text'
            placeholder='Search for set...'
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <div className='py-2 px-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-gray-400'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchInput
