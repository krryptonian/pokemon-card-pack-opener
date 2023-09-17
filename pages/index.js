import { Fragment, useState } from 'react';
import Head from 'next/head';
import Card from '../components/Card';
import SearchInput from '../components/SearchInput';

function Home({ sets }) {
  const [search, setSearch] = useState('');

  return (
    <Fragment>
      <Head>
        <title>Pokémon</title>
        <meta name='description' content='Digital Pokémon card pack opener' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <div className='py-4'>
        <SearchInput search={search} setSearch={setSearch} />
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
          {sets
            .filter((set) => {
              if (!search) {
                return set;
              }
              if (set.name.toLowerCase().includes(search.toLowerCase())) {
                return set;
              }
            })
            .map((set) => (
              <Card key={set.id} set={set} />
            ))}
        </div>
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://api.pokemontcg.io/v2/sets?order');
  const json = await res.json();
  const data = json.data;

  const sets = data.sort(
    (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
  );

  return {
    props: {
      sets,
    },
  };
}

export default Home;
