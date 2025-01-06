import { features8 } from "@/data/feature";
import Image from "next/image";
import React from "react";

export default function Data() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features8.map((elm, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl  hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col space-y-4">
                <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Image
                    width={56}
                    height={56}
                    src={elm.imgSrc}
                    alt="feature icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>

                <div>
                  <h5 className="text-xl font-medium text-gray-900 mb-2">
                    {elm.title}
                  </h5>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {elm.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
