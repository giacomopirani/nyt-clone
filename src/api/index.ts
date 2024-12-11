import axios from "axios";
import { NewsArticle, SearchArticle } from "../types";

type NYTResponse<T> = {
  status: string;
  num_results: number;
  results: T[];
};

type NYTSearchResponse<T> = {
  status: string;
  response: {
    docs: T[];
  };
};

const client = axios.create({
  baseURL: `https://api.nytimes.com/svc/`,
  params: {
    "api-key": process.env.REACT_APP_NYT_API_KEY,
  },
});

export const getTopNews = () => {
  return client.get<NYTResponse<NewsArticle>>(`topstories/v2/home.json`);
};

export const getLatestNews = () => {
  return client.get<NYTResponse<NewsArticle>>(`mostpopular/v2/emailed/7.json`);
};

export const searchNews = (query: string) => {
  return client.get<NYTSearchResponse<SearchArticle>>(
    `search/v2/articlesearch.json`,
    {
      params: { q: query },
    }
  );
};
