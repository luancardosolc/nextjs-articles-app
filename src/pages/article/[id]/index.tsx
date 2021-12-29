import Link from "next/link";
import { useRouter } from "next/router"
import Article from '../../../types/article';
import { server } from '../../../config'

const ArticleComponent = ({ article }: { article: Article }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log('article', article);

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'> Go Back</Link>
    </>
  )
}

// Local API exemple
export const getStaticProps = async (context: any) => {
  const rest = await fetch(`${server}/api/articles/${context.params.id}`)

  const article = await rest.json();

  return {
    props: {
      article
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`)

  const articles = await res.json();

  const ids = articles.map((article: Article) => article.id);
  const paths = ids.map((id: any) => ({params: {id: id.toString()}}));

  return {
    paths,
    fallback: false
  }

}

// Remote API example
// export const getStaticProps = async (context: any) => {
//   const rest = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//   const article = await rest.json();

//   return {
//     props: {
//       article
//     }
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')

//   const articles = await res.json();

//   const ids = articles.map((article: Article) => article.id);
//   const paths = ids.map((id: any) => ({params: {id: id.toString()}}));

//   return {
//     paths,
//     fallback: false
//   }

// }

export default ArticleComponent
