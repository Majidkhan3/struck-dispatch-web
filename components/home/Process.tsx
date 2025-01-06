import { process6 } from "../../data/process";

export default function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium text-gray-900 sm:text-5xl transform transition-all duration-300 hover:scale-105">
            Getting Started Is Easy
          </h2>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process6.map((elm: any, i: any) => (
            <div
              key={i}
              className="relative p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Number */}
              <div className="absolute -top-5 left-8">
                <span className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full text-2xl font-bold group-hover:bg-blue-700 transition-colors duration-300">
                  {elm.number}
                </span>
              </div>

              {/* Content */}
              <div className="pt-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  {elm.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {elm.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
