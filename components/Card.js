import Link from 'next/link'
import { convertDate } from '../helpers'
import { format } from 'timeago.js'

function Card({ set }) {
  return (
    <Link
      href={{
        pathname: '/sets/[id]',
        query: { id: set.id },
      }}
    >
      <div className='bg-gray-100 p-4 rounded shadow hover:shadow-md cursor-pointer transition duration-150 ease-in-out '>
        <div className='flex flex-col items-center mb-8'>
          <img className='h-32 w-auto object-contain' src={set.images.logo} alt={set.name} loading='lazy' />
        </div>
        <div className='flex items-center'>
          <img className='h-10 opacity-50 filter grayscale' src={set.images.symbol} alt={set.name} loading='lazy' />
          <div className='ml-5'>
            <div className='text-gray-900 text-lg font-medium'>{set.name}</div>
            <div className='text-gray-400'>{format(set.releaseDate)}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
