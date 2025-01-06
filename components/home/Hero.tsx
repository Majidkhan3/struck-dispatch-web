"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Add these imports
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
const slides = [
  {
    id: 1,
    type: "video",
    videoUrl:
      "https://trucking42.com/wp-content/uploads/2024/09/DISPATCHER-LIFESTYLE1-Social-Media_4.mp4",
    title: "Reliable Truck Dispatching Services Across the USA",
  },
  {
    id: 2,
    backgroundImage: "/assets/imgs/banner4.png",
    title: "Reliable Truck Dispatching Services Across the USA",
  },
  {
    id: 3,
    backgroundImage: "/assets/imgs/banner4.png",
    title: "Reliable Truck Dispatching Services Across the USA",
  },
];
const VideoSlide = ({
  videoUrl,
  title,
}: {
  videoUrl: string;
  title: string;
}) => (
  <div className="relative w-full h-full">
    <video
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src={videoUrl} type="video/mp4" />
    </video>
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 bg-black/40">
      <h2 className="text-4xl md:text-5xl font-medium text-white max-w-3xl mx-auto leading-tight">
        {title}
      </h2>
      <div className="mt-8">
        <Link
          className="inline-flex items-center px-6 py-3 text-white border-2 border-white hover:bg-white hover:text-black transition-colors duration-300"
          href="/service"
        >
          View Our Services
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </Link>
      </div>
    </div>
  </div>
);
const ImageSlide = ({
  backgroundImage,
  title,
}: {
  backgroundImage: string;
  title: string;
}) => (
  <div className="relative w-full h-full">
    <div
      className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />

    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <h1 className="text-4xl md:text-5xl font-medium text-white max-w-3xl mx-auto leading-tight">
        {title.split(" ").slice(0, 3).join(" ")}
        <br className="hidden lg:block" />
        {title.split(" ").slice(3).join(" ")}
      </h1>
      <div className="mt-8">
        <Link
          className="inline-flex items-center px-6 py-3 text-white border-2 border-white hover:bg-white hover:text-black transition-colors duration-300"
          href="/service"
        >
          View Our Services
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </Link>
      </div>
    </div>
  </div>
);
export default function Hero() {
  const options = {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".spb22",
      clickable: true,
    },
    modules: [Pagination, Autoplay],
    autoplay: {
      delay: 10000,
    },
  };

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <Swiper {...options} className="w-full h-full">
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            {slide.type === "video" ? (
              <VideoSlide videoUrl={slide.videoUrl} title={slide.title} />
            ) : (
              <ImageSlide
                backgroundImage={slide.backgroundImage ?? "/default-image.png"}
                title={slide.title}
              />
            )}
          </SwiperSlide>
        ))}

        <div className="absolute bottom-6 left-0 right-0 z-10">
          <div className="spb22 flex justify-center gap-2">
            {/* Pagination dots will be auto-injected here */}
          </div>
        </div>
      </Swiper>
    </section>
  );
}
