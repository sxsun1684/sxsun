import Avatar from "../components/Avatar/Avatar";

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8">
            {/* 头像容器 */}
            <div className="relative flex items-center justify-center mb-10">
                {/* 霓虹光环 */}
                <div className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 opacity-50 blur-[80px] animate-spin-slow"></div>
                <Avatar
                    src="../../imgs/photo.jpg"
                    alt="User Avatar"
                    srcSet="../../imgs/photo-small.jpg 1x, ../../imgs/photo-large.jpg 2x"
                    aria-label="User's profile picture"
                />
            </div>
            
            {/* 介绍卡片 */}
            <div className="flex flex-col items-center text-center
                bg-white/10 backdrop-blur-lg shadow-2xl hover:shadow-3xl transition-all duration-500
                rounded-3xl p-8 sm:p-12 w-full sm:w-4/5 max-w-3xl hover:ring-4 hover:ring-pink-300 animate-fadeIn hover:scale-105">
                
                {/* 标题 */}
                <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 hover:scale-110 transition-transform duration-300">
                    Hi, I&apos;m Sixia Sun!
                </h1>
                
                {/* 欢迎语句 */}
                <p className="mt-6 text-gray-100 text-xl">
                    Welcome to my blog!
                </p>
                
                {/* 个人介绍 */}
                <p className="mt-6 text-gray-200 text-lg leading-relaxed">
                    I specialize in <span className="text-purple-400 font-semibold">Natural Language Processing (NLP)</span>, <span className="text-blue-400 font-semibold">distributed systems</span>, and <span className="text-pink-400 font-semibold">cloud computing</span>.
                    Passionate about <span className="text-yellow-400 font-semibold">AI-powered applications</span>, I create high-performance systems using <span className="text-green-400 font-semibold">Python, Java, and JavaScript</span>.
                </p>
                
                {/* 学历介绍（使用 `{}` 方式修正单引号） */}
                <p className="mt-6 text-gray-400 italic text-base">
                    {"Holding dual Master's degrees in Information Technology (UQ, Australia) and Computer Software Engineering (Northeastern, USA), I bring a deep technical foundation and a global perspective to software development."}
                </p>
                
                {/* 个人签名 */}
                <p className="text-yellow-400 font-semibold mt-8 text-2xl animate-pulse">By S.X.SUN</p>
                
                {/* 社交媒体图标 */}
                <div className="mt-8 flex space-x-4">
                    <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                        <i className="fab fa-twitter text-xl"></i>
                    </a>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                        <i className="fab fa-github text-xl"></i>
                    </a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                        <i className="fab fa-linkedin text-xl"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
