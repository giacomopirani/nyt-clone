interface Article {
  title: string;
  abstract?: string;
  url: string;
}

interface LatestNewsProps {
  articles: Article[];
}

export default function LatestNews({ articles }: LatestNewsProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-black">Latest News</h2>
      {articles.map((article, index) => (
        <div
          key={index}
          className="bg-gray-100 shadow-lg rounded-lg p-4 mb-6 max-w-xs"
        >
          <h3 className="text-lg font-bold mb-2">{article.title}</h3>
          <p className="text-gray-600">
            {article.abstract || "No abstract available"}
          </p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800"
          >
            Read more
          </a>
        </div>
      ))}
    </div>
  );
}
