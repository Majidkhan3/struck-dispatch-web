import { blogs } from "@/data/blog";
import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
  return (
    <section className="py-16 bg-black px-5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-white text-3xl font-bold">
            Latest From Services
          </h2>
          <Link
            href="/blog-grid"
            className="text-white text-sm font-medium flex items-center space-x-1"
          >
            <span>More Services</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              <Link href={`/blog-single/${blog.id}`}>
                <div className="relative">
                  <Image
                    width={1104}
                    height={780}
                    src={blog.imageSrc}
                    alt="blog image"
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
                    <div className="text-2xl font-bold">{blog.date}</div>
                    <div className="text-sm">{blog.monthYear}</div>
                  </div>
                </div>
              </Link>
              <div className="p-4">
                <div className="text-sm text-gray-500">{blog.category}</div>
                <Link href={`/blog-single/${blog.id}`}>
                  <h3 className="text-lg font-semibold text-black hover:text-blue-500 mt-2">
                    {blog.title}
                  </h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
