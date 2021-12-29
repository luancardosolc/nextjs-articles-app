import { articles } from '../../../../data';

export default function handler({query: {id}}: any, res: any) {
  const article = articles.filter(item => item.id === id);
  res.status(200).json(article);
}
