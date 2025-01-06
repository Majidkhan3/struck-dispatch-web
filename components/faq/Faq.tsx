"use client";
import { faqs } from "@/data/faqs";
import { useState } from "react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Find answers to common questions about our dispatch services
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-10 bg-white rounded-lg border-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 placeholder-gray-400"
            />
            <svg
              className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No FAQs found matching your search.
            </div>
          ) : (
            filteredFaqs.map((elm, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none"
                >
                  <h5 className="text-lg font-medium text-gray-900">
                    {elm.question}
                  </h5>
                  <span className="ml-6 flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full border-2 border-blue-500">
                    <span
                      className={`transform transition-transform duration-200 ${
                        openIndex === i ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </span>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === i ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600">{elm.answer}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
