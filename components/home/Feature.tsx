import { features3 } from "@/data/feature";
import Image from "next/image";

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="max-w-lg">
              <h2 className="text-4xl font-medium text-gray-900 mb-8 wow fadeInUp">
                Our team's experience and successful actions
              </h2>
              <p className="text-base text-gray-600 mb-6 wow fadeInUp">
                Our company is made up of experienced and professional experts
                in the trucking industry who excel at providing top-notch
                Dispatch, Safety, Accounting, and Hiring services. We serve the
                transportation sector both in the USA and worldwide
              </p>
              <ul className="space-y-4 mb-8 wow fadeInUp">
                {features3.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="wow fadeInUp">
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-150 ease-in-out"
                >
                  Learn More
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
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 wow fadeInUp">
            <Image
              width={1710}
              height={1711}
              style={{ height: "fit-content" }}
              src="/assets/imgs/image-4-1.png"
              alt="luxride"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
