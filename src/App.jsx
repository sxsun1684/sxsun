import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import Searchbar from './components/Searchbar/Searchbar';
import CategoryPage from './pages/CategoryPage';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetail from './pages/ArticleDetail';
import WorkshopPage from "./pages/WorkshopPage";
import PhotosPage from "./pages/PhotosPage";
import ContactsPage from "./pages/ContactsPage";

function App () {
    return (
        <Router>
            <Navbar/>
            <div className="pt-8"></div>
            <Searchbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/category/:categoryName" element={<CategoryPage/>}/>
                
                {/* 添加文章列表页面 */}
                <Route path="/category/articles" element={<ArticlesPage/>}/>
                
                {/* 添加文章详情页面 */}
                <Route path="/articles/:articleName" element={<ArticleDetail/>}/>
                <Route path="/category/workshop" element={<WorkshopPage/>}/>
                <Route path="/category/photos" element={<PhotosPage/>}/>
                <Route path="/category/contacts" element={<ContactsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
