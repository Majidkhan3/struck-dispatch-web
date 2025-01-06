import { contactCards } from "@/data/contact";
import React from "react";

export default function Offices() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactCards.map((elm, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 wow fadeInUp"
              data-wow-delay={`${i * 0.2}s`}
            >
              <div className="p-6">
                <div className="mb-6">
                  <img
                    src={elm.imageSrc}
                    alt={`${elm.city} Office`}
                    className="w-full h-48  rounded-md"
                  />
                </div>
                <div className="space-y-4">
                  <h6 className="text-xl font-semibold text-gray-900">
                    {elm.city} Office
                  </h6>
                  <p className="text-gray-600">{elm.address}</p>
                  <p className="text-gray-600 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    {elm.phone}
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    {elm.email}
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
