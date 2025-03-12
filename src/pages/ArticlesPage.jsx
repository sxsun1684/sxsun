import { useState } from "react";
import ArticleModal from "../components/ArticleModal/ArticleModal"; // 引入 Modal

const articles = [
    { title: "Resolving Kafka Startup Issues: Missing Environment Variable KAFKA_LISTENERS", date: "March 11, 2024", tags: ["Python", "Kafka"], slug: "/sxhub/2025031102" },
    // { title: "Deep Dive into AI and NLP", date: "March 5, 2025", tags: ["AI", "NLP"], slug: "ai-nlp" },
];

const ArticlesPage = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);
    
    return (
        <div className="min-h-screen bg-black text-white p-10">
            <h1 className="text-4xl font-bold mb-8">Articles</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                    <div key={article.slug}
                         className="block bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition cursor-pointer"
                         onClick={() => setSelectedArticle(article.slug)}>
                        <h2 className="text-2xl font-bold text-violet-400">{article.title}</h2>
                        <p className="text-gray-400 mt-2">{article.date}</p>
                        <div className="mt-3">
                            {article.tags.map((tag) => (
                                <span key={tag} className="mr-2 px-3 py-1 text-sm bg-violet-600 rounded-full">{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            
            {/* 弹出 Modal */}
            {selectedArticle && <ArticleModal articleName={selectedArticle} onClose={() => setSelectedArticle(null)} />}
        </div>
    );
};

export default ArticlesPage;
