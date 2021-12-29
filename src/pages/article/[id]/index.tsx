import Link from "next/link";
import { useRouter } from "next/router"
import Article from '../../../types/article';

const ArticleComponent = ({ article }: { article: Article }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'> Go Back</Link>
    </>
  )
}

export const getStaticProps = async (context: any) => {
  const rest = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

  const article = await rest.json();

  return {
    props: {
      article
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')

  const articles = await res.json();

  const ids = articles.map((article: Article) => article.id);
  const paths = ids.map((id: any) => ({params: {id: id.toString()}}));

  return {
    paths,
    fallback: false
  }

}

export default ArticleComponent
