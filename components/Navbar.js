import Link from 'next/link'

function Navbar() {
  return (
    <nav className='w-full py-4 bg-gray-100 shadow text-gray-900'>
      <div className='container'>
        <div className='h-full w-full flex flex-row items-center justify-between'>
          <Link href='/'>
            <a>
              <div className='font-medium text-lg'>
                <div className='flex items-center'>
                  <img className='h-8 w-8' src='/favicon.png' loading='lazy' decoding='async' />
                  <span className='ml-2 font-bold'>
                    Pok<span className='text-red-600'>é</span>mon
                  </span>
                </div>
              </div>
            </a>
          </Link>
          <div className=''>
            <ul className='flex flex-row'>
              <li className='px-4 py-2 rounded cursor-pointer hover:bg-gray-50 hover:bg-opacity-25 transition duration-150 ease-in-out'>
                About
              </li>
              <li className='px-4 py-2 rounded cursor-pointer hover:bg-gray-50 hover:bg-opacity-25 transition duration-150 ease-in-out'>
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
