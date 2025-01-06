"use client";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`header header-white sticky-bar header-homepage9 ${
        scrolled ? "stick" : ""
      }`}
    >
      <div className="container-fluid">
        <div className="main-header">
          <div className="header-left ">
            <div className="header-nav  xl:w-1/2 lg:w-[54%]">
              <nav className="nav-main-menu hidden min-[1200px]:block">
                <ul className="main-menu">
                  <Nav />
                </ul>
              </nav>
              <div className="burger-icon burger-icon-white">
                <span className="burger-icon-mid"></span>
                <span className="burger-icon-bottom"></span>
              </div>
            </div>
            <div className="header-logo justify-items-center">
              <Link href="/">
                <Image
                  width={150}
                  height={50}
                  alt="Ecom"
                  src="https://trucking42.com/wp-content/uploads/2022/01/Logo.svg"
                />
              </Link>
            </div>
            <div className="w-[40%] text-right inline-block main-number">
              <div className="hidden telephonenumber min-[1620px]:inline-block d-xxl-inline-block  mr-10 ">
                <a
                  className="text-14-medium call-phone color-white hover-up"
                  href="tel:+41227157000"
                >
                  +41 22 715 7000
                </a>
              </div>
              {/* <div className="d-none languageselect d-xxl-inline-block box-dropdown-cart align-middle mr-10">
                <Language />
              </div> */}
              <div className="hidden min-[1200px]:inline-flex items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-2.5 bg-blue-600 text-white font-medium text-sm rounded-full hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
