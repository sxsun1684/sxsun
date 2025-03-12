import { FaEnvelope, FaLinkedin, FaKaggle } from "react-icons/fa";

const contacts = [
    {
        id: 1,
        name: "Email",
        icon: <FaEnvelope />,
        link: "mailto:sixia.sun@outlook.com",
        color: "text-red-400",
        bgColor: "from-red-500 to-red-700",
        displayText: "sixia.sun@outlook.com"
    },
    {
        id: 2,
        name: "LinkedIn",
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/in/sxsun-neu",
        color: "text-blue-500",
        bgColor: "from-blue-500 to-blue-700",
        displayText: "linkedin.com/in/sxsun-neu"
    },
    {
        id: 3,
        name: "Kaggle",
        icon: <FaKaggle />,
        link: "https://www.kaggle.com/your-kaggle-profile", // ❗ 这里换成你的 Kaggle 主页
        color: "text-purple-400",
        bgColor: "from-purple-500 to-purple-700",
        displayText: "kaggle.com/your-kaggle-profile"
    }
];

const ContactsPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-10">
            <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-12">
                Contact Me
            </h1>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {contacts.map((contact) => (
                    <a
                        key={contact.id}
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:rotate-2
                        hover:ring-4 hover:ring-opacity-50 hover:shadow-2xl
                        hover:ring-gradient-to-r hover:from-green-400 hover:to-cyan-400 animate-pulse"
                    >
                        {/* 炫光 Icon */}
                        <div className={`text-6xl ${contact.color} mb-4`}>
                            {contact.icon}
                        </div>
                        <h2 className="text-2xl font-semibold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
                            {contact.name}
                        </h2>
                        <p className="mt-2 text-gray-300 hover:text-white transition">
                            {contact.displayText}
                        </p>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ContactsPage;

