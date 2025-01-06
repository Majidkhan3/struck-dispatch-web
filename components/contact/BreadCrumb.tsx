import Link from "next/link";
import React from "react";

export default function BreadCumb() {
  return (
    <div className="bg-black py-16 md:py-20">
      <div className="mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-medium text-white mb-6">
          Contact Us
        </h1>
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link
                href="/"
                className="text-blue-100 hover:text-white transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-blue-300 mx-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <Link
                href="/service"
                className="text-blue-100 hover:text-white transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
