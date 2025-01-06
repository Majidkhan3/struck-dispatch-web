"use client";
import { services5 } from "@/data/service";
import { addLeftPaddingSwiper } from "@/utils/addSwiperPadding";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Services() {
  useEffect(() => {
    addLeftPaddingSwiper();
    //add padding to .swiper-padding according to .swiper-title
    window.addEventListener("resize", addLeftPaddingSwiper);
    return () => {
      window.removeEventListener("resize", addLeftPaddingSwiper);
    };
  }, []);
  const settings = {
    slidesPerView: "auto" as const,
    spaceBetween: 70,
    loop: true,
    navigation: {
      nextEl: ".snbn26",
      prevEl: ".snbp26",
    },
    modules: [Autoplay, Navigation],

    autoplay: {
      delay: 1000000,
    },
  };
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
            Our Services
          </h2>
          <Link
            href="/service"
            className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors"
          >
            More Services
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>
        </div>

        <div className="relative">
          <Swiper {...settings} className="!overflow-visible">
            {services5.map((elm, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Link href={`/service`}>
                      <Image
                        width={1710}
                        height={1500}
                        src={elm.image}
                        alt={elm.title}
                        className="w-full h-[300px] object-cover transform hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-4">
                      {elm.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{elm.description}</p>
                    <Link
                      href={`/service`}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      More Detail
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="snbp26 absolute top-1/2 -left-4 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button className="snbn26 absolute top-1/2 -right-4 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
