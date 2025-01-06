import { features7 } from "@/data/feature";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Features2() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">
              Your Trusted Partner in Truck Dispatching
            </h2>
            <div className=" mx-auto space-y-6 text-lg text-gray-600">
              <p>
                At Logistics Hub, we're dedicated to revolutionizing the
                trucking industry through our comprehensive dispatching
                services. With over a decade of experience, we've successfully
                managed thousands of loads across the USA, connecting carriers
                with premium freight opportunities. Our team of expert
                dispatchers works 24/7 to ensure timely deliveries, maximize
                your revenue, and provide seamless communication between
                carriers and shippers. We pride ourselves on offering
                transparent pricing, industry-leading technology, and
                personalized support to help your business thrive.
              </p>

              <ul className="space-y-4 mt-8">
                {features7.map((elm, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 flex-shrink-0 mr-3">
                      ✓
                    </span>
                    <span className="text-gray-700">{elm}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature Sections */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                width={1710}
                height={1800}
                className="rounded-lg shadow-xl object-cover w-full h-auto"
                src="https://truckdispatch360.com/wp-content/uploads/2024/03/berkeley-communications-WEDDt-u3q3o-unsplash-scaled-1-2048x1366.jpg"
                alt="luxride"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Nationwide Load Coverage & Premium Rates
              </h3>
              <p className="text-lg text-gray-600">
                Access our extensive network of trusted shippers and brokers
                across all 48 states. Our expert dispatchers negotiate the best
                rates and secure premium loads to maximize your revenue and keep
                your trucks moving. With real-time market analytics and industry
                insights, we ensure you get the most profitable routes.
              </p>
            </div>
          </div>
          <div className="relative py-16 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
                  US Based Truck Dispatch Company
                </h2>
                <p className="mt-4 text-lg text-blue-100">
                  Serving carriers across all 48 continental states
                </p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Will be second on desktop */}
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-gray-900">
                Advanced Technology & Seamless Operations
              </h3>
              <p className="text-lg text-gray-600">
                Experience hassle-free operations with our state-of-the-art
                dispatch management system. We handle everything from paperwork
                and compliance to factoring and billing. Our automated load
                tracking, digital documentation, and real-time communication
                tools keep you informed while our dedicated support team ensures
                smooth operations 24/7.
              </p>
              <p className="text-lg text-gray-600">
                Our comprehensive dispatch services include load planning, route
                optimization, and real-time tracking. We utilize advanced
                algorithms to match carriers with the most profitable loads,
                considering factors like deadhead miles, detention time, and
                fuel costs.
              </p>
              <p className="text-lg text-gray-600">
                With our dedicated team of dispatchers, you'll have access to
                24/7 support, ensuring your operations run smoothly around the
                clock. We maintain strong relationships with reliable shippers
                and brokers, giving you access to consistent, high-paying
                freight opportunities.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition duration-300 ease-in-out"
                >
                  Contact Us
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            {/* Image - Will be first on desktop */}
            <div className="relative order-1 lg:order-2">
              <Image
                width={1710}
                height={1800}
                className="rounded-lg shadow-xl object-cover w-full h-auto"
                src="https://truckdispatch360.com/wp-content/uploads/2020/07/truck-dispatch-360.jpg"
                alt="luxride"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
