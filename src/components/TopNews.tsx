interface Article {
  title: string;
  abstract: string;
  multimedia?: { url: string }[];
}

interface TopNewsProps {
  articles: Article[];
}

export default function TopNews({ articles }: TopNewsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {articles.map((article, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden mb-6"
        >
          {article.multimedia && article.multimedia[0] && (
            <img
              src={article.multimedia[0].url}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 font-serif">
              {article.title}
            </h3>
            <p className="text-gray-700">
              {article.abstract || "No abstract available"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
