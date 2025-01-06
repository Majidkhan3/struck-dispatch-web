"use client";

import { activeInputFocus } from "@/utils/activeInputFocus";
import { useEffect } from "react";

export default function ContactForm() {
  useEffect(() => {
    activeInputFocus();
  }, []);

  const serviceTypes = [
    "Select Service Type",
    "Dry Van",
    "Reefer",
    "Flatbed",
    "Step Deck",
    "Box Truck",
    "Power Only",
    "Other",
  ];

  const inputStyles =
    "w-full px-4 py-3 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 placeholder-gray-400";
  const labelStyles = "block text-sm font-medium text-gray-700 mb-2";
  const selectStyles =
    "w-full px-4 py-3 bg-gray-50 rounded-lg border-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 appearance-none cursor-pointer";

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-medium text-center mb-12 wow fadeInUp">
          Leave us your info
        </h2>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-6 wow fadeInUp"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative">
              <label className={labelStyles} htmlFor="fullname">
                Full Name*
              </label>
              <input
                className={inputStyles}
                id="fullname"
                type="text"
                required
                placeholder="John Doe"
              />
            </div>

            <div className="relative">
              <label className={labelStyles} htmlFor="email">
                Email*
              </label>
              <input
                className={inputStyles}
                id="email"
                type="email"
                required
                placeholder="john@example.com"
              />
            </div>

            <div className="relative">
              <label className={labelStyles} htmlFor="phone">
                Phone*
              </label>
              <input
                className={inputStyles}
                id="phone"
                type="tel"
                required
                placeholder="(555) 555-5555"
              />
            </div>
          </div>

          <div className="relative">
            <label className={labelStyles} htmlFor="serviceType">
              Service Type*
            </label>
            <div className="relative">
              <select className={selectStyles} id="serviceType" required>
                {serviceTypes.map((type, index) => (
                  <option
                    key={index}
                    value={index === 0 ? "" : type}
                    disabled={index === 0}
                  >
                    {type}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="relative">
            <label className={labelStyles} htmlFor="message">
              Message*
            </label>
            <textarea
              className={`${inputStyles} min-h-[150px] resize-y`}
              id="message"
              required
              placeholder="Tell us about your requirements..."
            ></textarea>
          </div>

          <button
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
            type="submit"
          >
            Get In Touch
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              ></path>
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}
