import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper/modules";
import "../app.css"; // 引入 Tailwind Swiper 样式

const photos = [
    {
        id: 1,
        title: "Gold Coast",
        description: "Golden beaches, endless sunshine, and vibrant coastal vibes—Gold Coast is where the ocean meets adventure.",
        images: ["/imgs/gc1.jpg", "/imgs/gc2.jpg", "/imgs/gc3.jpg"],
    },
    {
        id: 2,
        title: "Brisbane City Walk",
        description: "The Brisbane River is a winding waterway flowing through Brisbane, Australia, known for its scenic views.",
        images: ["/imgs/brisbane-city.jpg", "/imgs/southbank.jpg", "/imgs/bc2.jpg", "/imgs/bc3.jpg"],
    },
    {
        id: 3,
        title: "Napa Winery in California",
        description: "A peaceful winery visit with hilltop views, scenic tram rides, and exquisite wines.",
        images: ["/imgs/napa1.png", "/imgs/napa2.png", "/imgs/napa3.png", "/imgs/napa4.png"],
    },
    // {
    //     id: 4,
    //     title: "Ocean Waves",
    //     description: "Crystal-clear waves crashing onto the beach under the blue sky.",
    //     images: ["/imgs/ocean1.jpg", "/imgs/ocean2.jpg", "/imgs/ocean3.jpg"],
    // }
];

const PhotosPage = () => {
    return (
        <div className="min-h-screen bg-gray-950 text-white p-10">
            <h1 className="text-6xl font-extrabold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-md mb-12">
                Photo Gallery
            </h1>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {photos.map((photo) => (
                    <div
                        key={photo.id}
                        className="relative bg-white bg-opacity-20 p-6 rounded-lg shadow-2xl hover:scale-105 transition-all duration-500 backdrop-blur-lg overflow-hidden"
                    >
                        {/* 轮播图容器 */}
                        <div className="w-full h-72 md:h-80 lg:h-96 rounded-lg">
                            <Swiper
                                modules={[Autoplay, Scrollbar]}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                loop={true}
                                scrollbar={{ draggable: true }}
                                className="w-full h-full"
                            >
                                {photo.images.map((imgSrc, index) => (
                                    <SwiperSlide key={index} className="flex justify-center items-center">
                                        <img
                                            src={imgSrc}
                                            alt={`${photo.title} - ${index + 1}`}
                                            className="w-full h-full object-cover rounded-lg shadow-lg transition-all duration-700 ease-in-out"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        
                        {/* 文字部分 */}
                        <h2 className="text-3xl font-bold mt-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                            {photo.title}
                        </h2>
                        <p className="mt-2 text-gray-200 text-lg font-medium tracking-wide">
                            {photo.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotosPage;
