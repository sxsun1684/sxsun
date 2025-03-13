import React, { useState } from "react";

const projects = [
    
    {
        id: 1,
        name: "News Recommendation System(In-progress)",
        description: "A real-time news recommendation system using collaborative filtering and Elasticsearch.",
        image: "/imgs/news-recommend.png",
        link: "https://github.com/yourusername/news-recommendation",
        tags: ["Python", "Redis", "DynamoDB","Elasticsearch", "Kafka","LLM","React","Tailwind CSS"]
    },
    {
        id: 2,
        name: "Personalized Campus Second-Hand Platform",
        description: "A second-hand trading platform using collaborative filtering for personalized recommendations.",
        image: "/imgs/campus.png",
        link: "https://github.com/yourusername/stock-prediction",
        tags: ["Java","MySQL", "Spring Boot","Collaborative Filtering", "Vue.js","Element-UI"]
    },
    {
        id: 3,
        name: "AI-Powered Note-Taking App",
        description: "An AI-driven system for automated language proficiency assessment using NLP and speech recognition.",
        image: "/imgs/ai-pdf.png",
        link: "https://github.com/yourusername/ai-language-assessment",
        tags: ["Clerk", "Convex DB","Next.js","Gemini API","React","Tailwind CSS","LangChain"]
    },
];

const WorkshopPage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    
    return (
        <div className="min-h-screen bg-gray-900 text-white p-10">
            <h1 className="text-5xl font-bold text-center text-violet-400 mb-12">
                My Projects
            </h1>
            <span className="text-2xl mb-2.5 block">
                Sorry, at the moment I only intend to provide relevant GitHub links in my personal resume.
            </span>
            
            {/* 项目卡片 */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div key={project.id} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition">
                        {/* 点击图片打开预览 */}
                        <div className="cursor-pointer" onClick={() => setSelectedImage(project.image)}>
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-48 object-cover rounded-md bg-black"
                            />
                        </div>
                        
                        <h2 className="text-3xl font-semibold mt-4 text-violet-300 text-center">
                            {project.name}
                        </h2>
                        <p className="mt-2 text-lg text-gray-400 text-center">
                            {project.description}
                        </p>
                        
                        {/* 技能标签 - 居中 & 变大 */}
                        <div className="flex flex-wrap justify-center gap-3 mt-4">
                            {project.tags?.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-lg font-semibold px-4 py-2 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        
                        <div className="flex justify-center mt-4">
                            <a href={project.link} target="_blank" rel="noopener noreferrer"
                               className="mt-4 bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition text-lg font-bold">
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* 图片预览 Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
                     onClick={() => setSelectedImage(null)}>
                    <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-lg"></div>
                    
                    <div className="relative flex items-center justify-center w-screen h-screen">
                        <button
                            className="absolute top-5 right-5 bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl hover:bg-red-500 z-50"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✕
                        </button>
                        
                        <img src={selectedImage} alt="Preview"
                             className="w-screen h-screen object-contain rounded-lg"/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WorkshopPage;

