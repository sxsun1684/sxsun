import {Link, useLocation} from "react-router-dom";

const Navbar = () => {
    const location = useLocation (); // 获取当前路径，高亮当前页面
    
    return (
        <nav className="fixed top-0 left-0 w-full bg-[#121212] shadow-lg py-4 z-50 border-b border-gray-700">
            {/* 响应式导航栏 */}
            <ul className="flex justify-center items-center space-x-12 list-none">
                {[
                    {name : "Home", path : "/"},
                    {name : "Articles", path : "/category/articles"},
                    {name : "Workshop", path : "/category/workshop"},
                    {name : "Photos", path : "/category/photos"},
                    {name : "Contacts", path : "/category/contacts"},
                ].map ((item) => (
                    <li key={item.path} className="relative group">
                        <Link
                            to={item.path}
                            className={`relative text-xl font-semibold transition-all duration-300
                                ${
                                location.pathname === item.path
                                    ? "text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text scale-110 shadow-lg"
                                    : "text-gray-200 hover:text-white transition-all"
                            }`}
                        >
                            {item.name}
                            {/* 修正下划线，让它与文字对齐 */}
                            <span
                                className={`absolute left-0 bottom-[-4px] h-[2px] w-full bg-gradient-to-r from-blue-400 to-pink-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                                    location.pathname === item.path ? "scale-x-100" : ""
                                }`}></span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
