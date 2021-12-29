import Head from 'next/head'
import ArticleList from '../components/ArticleList';
import { server } from '../config';

const Home = (props: any) => {
  const { articles } = props;
  // console.log('articles', articles);
  return (
    <div>
      <Head>
        <title>NextJS Article App</title>
        <meta name='keyworkds' content='web development, programming, nextjs, javascript' />
      </Head>
      <ArticleList articles={articles}></ArticleList>
    </div>
  )
}

export default Home

// Local API example
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}

// Remote API example
// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//   const articles = await res.json();

//   return {
//     props: {
//       articles
//     }
//   }
// }
