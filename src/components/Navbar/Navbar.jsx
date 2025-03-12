import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [greeting, setGreeting] = useState("");
    
    // 动态生成问候语
    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) {
            setGreeting("Good Morning!"); // 早上好
        } else if (hour < 18) {
            setGreeting("Good Afternoon!"); // 下午好
        } else {
            setGreeting("Good Evening!"); // 晚上好
        }
    }, []);
    
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Articles", path: "/category/articles" },
        { name: "Workshop", path: "/category/workshop" },
        { name: "Photos", path: "/category/photos" },
        { name: "Contacts", path: "/category/contacts" },
    ];
    
    return (
        <nav className="fixed top-0 left-0 w-full bg-[#121212] shadow-lg py-4 z-50 border-b border-gray-700">
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* 添加动态问候语 */}
                <span className="text-2xl font-bold text-white">
                    {greeting}
                </span>
                
                {/* 大屏幕导航 */}
                <ul className="hidden md:flex items-center space-x-8">
                    {navLinks.map((item) => (
                        <li key={item.path} className="relative group">
                            <Link
                                to={item.path}
                                className={`text-lg font-semibold transition-all duration-300 ${
                                    location.pathname === item.path
                                        ? "text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text scale-110"
                                        : "text-gray-200 hover:text-white"
                                }`}
                            >
                                {item.name}
                                <span
                                    className={`absolute left-0 bottom-[-4px] h-[2px] w-full bg-gradient-to-r from-blue-400 to-pink-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                                        location.pathname === item.path ? "scale-x-100" : ""
                                    }`}
                                ></span>
                            </Link>
                        </li>
                    ))}
                </ul>
                
                {/* 小屏幕按钮 */}
                <button
                    className="md:hidden text-gray-300 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
            
            {/* 移动端导航菜单 */}
            {isOpen && (
                <ul className="md:hidden bg-[#121212] border-t border-gray-700 py-4">
                    {navLinks.map((item) => (
                        <li key={item.path} className="px-4 py-2">
                            <Link
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`block text-lg font-semibold ${
                                    location.pathname === item.path
                                        ? "text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text"
                                        : "text-gray-200 hover:text-white"
                                }`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
