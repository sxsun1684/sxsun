import { useState } from "react";
import { Search } from "lucide-react"; // 现代化搜索图标
import PropTypes from "prop-types";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");
    
    // 触发搜索
    const handleSearch = () => {
        if (query.trim() !== "") {
            onSearch(query);
        }
    };
    
    // 监听回车键
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };
    
    return (
        <div
            className="flex items-center space-x-2 w-full bg-white shadow-lg border border-gray-200 px-4 py-2 rounded-2xl transition-all duration-300 focus-within:ring-2 focus-within:ring-violet-400">
            {/* 搜索图标 */}
            <Search className="text-gray-400 w-6 h-6"/>
            
            {/* 输入框 */}
            <input
                type="text"
                placeholder="Search keywords..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown} // 监听回车
                className="flex-grow h-[40px] px-3 border-none outline-none text-gray-800 placeholder-gray-400 bg-transparent"
            />
            
            {/* 搜索按钮 */}
            <button
                onClick={handleSearch}
                className="flex-none h-[40px] bg-gradient-to-r from-violet-500 to-purple-500 text-white px-5 rounded-lg hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg"
            >
                Search
            </button>
        </div>
    );
};

// ✅ 修正 `Searchbar.propTypes` 为 `SearchBar.propTypes`
SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
