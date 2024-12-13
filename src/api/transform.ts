import { NewsArticle, SearchArticle } from "../types/index-type";

export default function transformArticle(input: SearchArticle): NewsArticle {
  const output: NewsArticle = {
    title: input.headline.main,
    abstract: input.abstract,
    published_date: input.pub_date,
    url: input.web_url,
    multimedia: [
      {
        url: `https://www.nytimes.com/${input.multimedia[0].url}`,
      },
    ],
  };
  return output;
}
