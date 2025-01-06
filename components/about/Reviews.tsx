import { reviews } from "@/data/blog";
import React from "react";

const Reviews = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h5 className="text-2xl font-semibold text-gray-900 mb-8">Reviews</h5>

      {reviews.map((elm, i) => (
        <div
          key={i}
          className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-gray-100"
        >
          <div className="flex items-start space-x-4">
            {/* Author Avatar */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                {elm.authorInitials}
              </div>
            </div>

            {/* Author Info */}
            <div className="flex-grow">
              <div className="flex items-center justify-between">
                <div>
                  <h6 className="text-lg font-medium text-gray-900">
                    {elm.authorName}
                  </h6>
                  <p className="text-sm text-gray-500">{elm.date}</p>
                </div>
              </div>

              {/* Review Text */}
              <div className="mt-4">
                <p className="text-gray-600 text-base leading-relaxed">
                  {elm.description}
                </p>
              </div>

              {/* Helpful Buttons */}
              <div className="mt-6 flex space-x-4">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                  <svg
                    className="w-5 h-5 mr-2 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  Helpful
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                  <svg
                    className="w-5 h-5 mr-2 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v2a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5 0v2a2 2 0 01-2 2h-2.5"
                    />
                  </svg>
                  Not Helpful
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
