import { articles } from '../../../../data';

export default function handler({query: {id}}: any, res: any) {
  const article = articles.filter(item => item.id === id);

  if (article.length > 0) {
    res.status(200).json(article[0]);
  } else {
    res.status(404).json({message: `Article '${id}' not found`})
  }
}
