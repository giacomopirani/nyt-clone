interface Article {
  title: string;
  abstract: string;
  multimedia?: { url: string }[];
}

interface newsProps {
  news: Article[];
}

export default function Home({ news }: newsProps) {
  return (
    <div className="w-8/12 p-4">
      <h2 className="font-bold text-lg mb-4">Top News</h2>
      {news.length > 0 ? (
        news.map((article, index) => (
          <div key={index} className="flex mb-4">
            <div>
              <h3 className="font-semibold">{article.title}</h3>
              <p>{article.abstract}</p>
            </div>
            {article.multimedia && (
              <img
                src={article.multimedia[0].url}
                alt={article.title}
                className="ml-4 w-48"
              />
            )}
          </div>
        ))
      ) : (
        <p>No news available</p>
      )}
    </div>
  );
}
