import type { NextPage } from 'next';
import Head from 'next/head';

const page = {
  title: '',
  description: '',
};

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
