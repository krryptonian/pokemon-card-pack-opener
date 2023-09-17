import Router from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import { format } from 'timeago.js';

function set({ set, cards }) {
  return (
    <Fragment>
      <Head>
        <title>{set.name} - Pokémon</title>
        <meta
          name='description'
          content={`${set.name}'s digital pokémon card pack`}
        />
        <link rel='icon' href={set.images.symbol} />
      </Head>
      <div className='mt-5'>
        <button
          onClick={() => Router.back()}
          className='flex items-center rounded-md border hover:bg-gray-200 px-3 py-2 transition duration-150 ease-in-out'
        >
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </span>
          <span className='ml-3 font-medium'>Go Back</span>
        </button>
      </div>
      <div className='py-5'>
        <div className='flex flex-row items-center space-x-2'>
          <Image
            width={20}
            height={20}
            className='h-5 w-5 mr-2 opacity-50 filter grayscale'
            src={set.images.symbol}
            alt={set.name}
            loading='lazy'
          />
          <div className='font-bold text-xl uppercase'>{set.name}</div>
        </div>
        <div className='mt-1 text-gray-400'>
          {set.series}
          <span className='mx-1'>&#8226;</span>
          {format(set.releaseDate)}
        </div>
      </div>
      <hr className='mb-5' />
      <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 justify-center'>
        {cards.map((card) => {
          return (
            <div key={card.id}>
              <Image
                className=''
                width={245}
                height={342}
                loading='lazy'
                src={card.images.large}
              />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://api.pokemontcg.io/v2/sets');
  const json = await res.json();
  const data = json.data;

  const paths = data.map((set) => {
    return {
      params: { id: set.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch('https://api.pokemontcg.io/v2/sets/' + id);
  const json = await res.json();
  const set = json.data;

  const cardResponse = await fetch(
    'https://api.pokemontcg.io/v2/cards?q=set.id:' + id
  );
  const cardJson = await cardResponse.json();
  const cards = cardJson.data;

  return {
    props: {
      set,
      cards,
    },
  };
}

export default set;
