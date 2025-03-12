import PropTypes from "prop-types";
const Avatar = ({src, alt}) => {
    return (
        <div className="flex justify-center items-center mt-12 relative">
            {/* 霓虹光环（扩大） */}
            <div
                className="absolute w-56 h-56 rounded-full border-2 border-fuchsia-50 opacity-50 animate-spin-slow"></div>
            
            {/* 呼吸光晕（扩大） */}
            <div
                className="absolute inset-0 w-72 h-72 rounded-full bg-gradient-to-r from-lime-500 to-purple-500 blur-2xl opacity-40 animate-pulse"></div>
            
            {/* 头像本体（扩大） */}
            <img
                src={src}
                alt={alt}
                className="relative w-48 h-48 rounded-full border-6 border-gray-300 shadow-xl object-cover transition-transform duration-300 ease-in-out hover:scale-125 hover:rotate-6 hover:shadow-amber-50 animate-wave"
            />
        </div>
    );
};
Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};
export default Avatar;

