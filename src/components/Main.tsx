import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Main() {
  const [news, setNews] = useState([]); // Stato per memorizzare le notizie

  const fetchNews = async () => {
    try {
      const res = await axios.get(
        "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=YOUR_API_KEY"
      );
      setNews(res.data.results);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchNews(); // Recupera le notizie al caricamento del componente
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Home news={news} /> {/* Passiamo le notizie al componente Home */}
        <Sidebar news={news} /> {/* Passiamo le notizie anche alla Sidebar */}
      </div>
    </div>
  );
}
