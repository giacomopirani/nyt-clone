import React from "react";

interface NewsCardProps {
  article: {
    multimedia: [{ url: string }];
    title: string;
    abstract: string;
    url: string;
  };
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6 h-full">
      {article.multimedia && article.multimedia[0] && (
        <img
          src={article.multimedia[0].url}
          alt={article.title}
          className="w-full h-80 object-cover"
        />
      )}
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-semibold mb-2 font-serif">
            {article.title}
          </h3>
          <p className="text-gray-700 font-serif">
            {article.abstract || "No abstract available"}
          </p>
        </div>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-20 mt-4 bg-gray-700 text-white text-center font-bold py-2 px-4 rounded shadow-lg transition-all duration-300 ease-in-out transform hover:bg-gray-900 hover:shadow-xl hover:scale-105 flex items-center justify-center"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
