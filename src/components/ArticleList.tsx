import articleStyle from '../styles/Article.module.css';
import Article from '../types/article';

const ArticleList = (props: any) => {
  const { articles } = props;
  return (
    <div className={ articleStyle.grid}>
      {articles.map((article: Article) => (
        <h3 key={'article-' + article.id}>{article.id} - {article.title}</h3>
      ))}
    </div>
  )
}

export default ArticleList
