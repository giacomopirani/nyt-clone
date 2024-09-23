import axios from "axios";
import { News } from "../components/Home";
type Response = {
  copyright: string;
  last_updated: string;
  num_results: number;
  results: News[];
  section: string;
  status: string;
};
export const getTopNewsResponse = async () => {
  try {
    const response = await axios.get(
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=rwgaROyZJvGpZslsTzVD87nUIBkvLQld"
    );
    return response.data;
  } catch (error) {
    console.error("Errore nel recupero delle notizie", error);
  }
};

export const getLatestNewsResponse = async () => {
  try {
    const response = await axios.get(
      "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=rwgaROyZJvGpZslsTzVD87nUIBkvLQld"
    );
    return response.data;
  } catch (error) {
    console.error("Errore nel recupero delle notizie", error);
  }
};
