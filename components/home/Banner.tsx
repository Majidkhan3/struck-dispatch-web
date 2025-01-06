import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Will be second on desktop */}
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="text-3xl font-bold text-gray-900">
                Benefits of Using Truck Dispatch Services
              </h3>
              <p className="text-lg text-gray-600">
                From increased efficiency to higher earnings, our experienced
                truck dispatchers set you up directly with the freight brokers
                so you can focus on driving. No more worrying about follow-ups
                with the Broker for <strong>lumper</strong> and detention pay.
                Our in-house dispatchers take care of all admin work for you.
                You pick the areas you want to drive and we negotiate hard for
                the best paying rates and quality routes. You work directly with
                the best Shippers and <strong>Freight</strong> Brokers and they
                pay you. Your dedicated truck dispatcher looks at multiple load
                boards to find you the best dry freight, flatbed, step deck, RGN
                and reefer loads. <strong>Truck Dispatch</strong> keeps you
                rolling towards success.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition duration-300 ease-in-out"
                >
                  (404) 987-8447
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
                src="https://truckdispatch360.com/wp-content/uploads/2020/07/truck-dispatching-services.jpg"
                alt="luxride"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
