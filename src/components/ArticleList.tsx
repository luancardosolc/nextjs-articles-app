import articleStyle from '../styles/Article.module.css';
import Article from '../types/article';
import ArticleItem from './ArticleItem';

const ArticleList = ({ articles }: { articles: Article[] }) => {
  return (
    <div className={articleStyle.grid}>
      {articles.map((article: Article) => (
        <ArticleItem article={article} key={'article-' + article.id} />
      ))}
    </div>
  )
}

export default ArticleList
