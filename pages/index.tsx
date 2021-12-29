import type { NextPage, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Article from '../types/article';

const Home = (articles: Article[]) => {
  console.log('articles', articles);
  return (
    <div>
      <Head>
        <title>NextJS Article App</title>
        <meta name='keyworkds' content='web development, programming, nextjs, javascript' />
      </Head>
      <h1>Welcome to articles app</h1>
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  console.log('testando ando');
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}
