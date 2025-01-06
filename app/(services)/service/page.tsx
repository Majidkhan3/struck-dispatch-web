import BreadCumb from "@/components/contact/BreadCrumb";
import Hero from "@/components/home/Hero";
import Blogs from "@/components/service/Blogs";
import Data from "@/components/service/Data";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Data />
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
      <main className="max-w-8xl py-12  mx-auto  sm:px-6 lg:px-8">
        <Blogs />
      </main>
    </div>
  );
};

export default page;
