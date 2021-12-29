import { useRouter } from "next/router"


const ArticleComponent = (props: any) => {
  const { article } = props;
  const router = useRouter();
  const {id} = router.query;
  console.log('article', article);
  return (
    <div>
      This is an article {id}
    </div>
  )
}

export const getServerSideProps = async (context: any) => {
  const rest = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  
  const article = await rest.json();

  return {
    props: {
      article
    }
  }
}

export default ArticleComponent
