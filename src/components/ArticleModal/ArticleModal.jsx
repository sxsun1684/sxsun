import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ArticleModal = ({ articleName, onClose }) => {
    const [markdownContent, setMarkdownContent] = useState("");
    
    useEffect(() => {
        fetch(`/articles/${articleName}.md`)
            .then((res) => res.text())
            .then((text) => setMarkdownContent(text))
            .catch(() => setMarkdownContent("# 404 - Article Not Found"));
    }, [articleName]);
    
    // Function to copy code to clipboard
    const copyToClipboard = (code) => {
        navigator.clipboard.writeText(code).then(() => {
            alert("Code copied to clipboard!");
        }).catch(() => {
            alert("Failed to copy. Please try manually.");
        });
    };
    
    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 sm:p-6">
            <div className="bg-gray-900 text-white max-w-5xl w-full sm:w-11/12 md:w-4/5 lg:w-3/4 h-[85vh] sm:h-[90vh] p-6 rounded-lg shadow-lg relative flex flex-col">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 sm:top-5 sm:right-5 text-gray-400 hover:text-white text-lg sm:text-xl"
                >
                    ✖
                </button>
                
                {/* Markdown Content */}
                <div className="prose max-w-full text-gray-300 flex-1 overflow-y-auto leading-normal text-left break-words text-base sm:text-lg">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            h1: ({ children }) => <h1 className="text-3xl sm:text-4xl font-bold text-white">{children}</h1>,
                            h2: ({ children }) => <h2 className="text-2xl sm:text-3xl font-bold text-white">{children}</h2>,
                            h3: ({ children }) => <h3 className="text-xl sm:text-2xl font-semibold text-white">{children}</h3>,
                            strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
                            ul: ({ children }) => <ul className="list-disc pl-6 marker:text-gray-400">{children}</ul>,
                            ol: ({ children }) => <ol className="list-decimal pl-6 marker:text-gray-400">{children}</ol>,
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || "");
                                const codeContent = String(children).replace(/\n$/, "");
                                
                                return !inline && match ? (
                                    <div className="relative group">
                                        {/* Copy Button */}
                                        <button
                                            onClick={() => copyToClipboard(codeContent)}
                                            className="absolute top-2 right-2 px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            Copy
                                        </button>
                                        <SyntaxHighlighter
                                            style={oneDark}
                                            language={match[1]}
                                            PreTag="div"
                                            className="rounded-lg overflow-x-auto p-3 bg-gray-900 whitespace-pre-wrap break-words"
                                        >
                                            {codeContent}
                                        </SyntaxHighlighter>
                                    </div>
                                ) : (
                                    <code className="bg-gray-800 text-pink-400 px-1 rounded break-words whitespace-pre-wrap">
                                        {children}
                                    </code>
                                );
                            }
                        }}
                    >
                        {markdownContent}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

ArticleModal.propTypes = {
    articleName: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ArticleModal;
