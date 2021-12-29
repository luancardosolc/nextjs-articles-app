import Head from 'next/head'
import { Key } from 'react';
import Article from '../types/article';

const Home = (props: any) => {
  const { articles } = props;
  console.log('articles', articles);
  return (
    <div>
      <Head>
        <title>NextJS Article App</title>
        <meta name='keyworkds' content='web development, programming, nextjs, javascript' />
      </Head>
      {articles.map((article: Article) => <h3 key={'article-' + article.id}>{article.id} - {article.title}</h3>)}
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}
