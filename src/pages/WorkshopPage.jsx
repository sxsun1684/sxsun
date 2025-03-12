const projects = [
    {
        id : 1,
        name : "AI-Powered Language Assessment",
        description : "An AI-driven system for automated language proficiency assessment using NLP and speech recognition.",
        image : "/imgs/ai-language-assessment.jpg",
        link : "https://github.com/yourusername/ai-language-assessment"
    },
    {
        id : 2,
        name : "News Recommendation System",
        description : "A real-time news recommendation system using collaborative filtering and Elasticsearch.",
        image : "/imgs/news-recommendation.jpg",
        link : "https://github.com/yourusername/news-recommendation"
    },
    {
        id : 3,
        name : "Real-Time Stock Prediction",
        description : "A deep learning model predicting stock market trends using LSTMs and real-time data.",
        image : "/imgs/stock-prediction.jpg",
        link : "https://github.com/yourusername/stock-prediction"
    }
];

const WorkshopPage = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white p-10">
            <h1 className="text-5xl font-bold text-center text-violet-400 mb-12">
                My Projects
            </h1>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map ((project) => (
                    <div key={project.id} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition">
                        <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-md"/>
                        <h2 className="text-2xl font-semibold mt-4 text-violet-300">{project.name}</h2>
                        <p className="mt-2 text-gray-400">{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                           className="mt-4 inline-block bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkshopPage;
