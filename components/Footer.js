import Link from 'next/link'

function Footer() {
  return (
    <footer className='w-full text-gray-500 py-5 flex flex-col items-center'>
      <div>
        All data made available by the{' '}
        <a
          target='_blank'
          className='text-gray-900 hover:text-gray-500 font-medium hover:underline transition duration-150 ease-in-out'
          href='https://pokemontcg.io/'
        >
          Pokémon TCG API
        </a>
      </div>
      <div className='mt-3'>
        Made with&nbsp;<span className='text-red-500'>❤</span>&nbsp;by{' '}
        <span className='text-gray-900 font-medium'>Nirav Mandli</span>
      </div>
    </footer>
  )
}

export default Footer
