import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ArticleDetail = () => {
    const { articleName } = useParams();
    const [markdownContent, setMarkdownContent] = useState("");
    
    useEffect(() => {
        fetch(`/articles/${articleName}.md`) // 直接获取 Markdown 资源
            .then((res) => res.text())
            .then((text) => setMarkdownContent(text))
            .catch(() => setMarkdownContent("# Article Not Found"));
    }, [articleName]);
    
    return (
        <div className="min-h-screen bg-black text-white p-10">
            <ReactMarkdown className="prose lg:prose-xl max-w-3xl mx-auto"
                           remarkPlugins={[remarkGfm]}>
                {markdownContent}
            </ReactMarkdown>
        </div>
    );
};

export default ArticleDetail;
