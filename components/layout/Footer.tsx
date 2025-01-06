import {
  legalLinks,
  links1,
  links2,
  socialMediaPlatforms,
} from "@/data/footerLinks";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Section */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <h2 className="text-3xl font-medium mb-4">
                24/7 Dispatch Services
              </h2>
              <p className="text-gray-300 mb-12">
                Professional truck dispatching services nationwide.
                <br className="hidden lg:block" />
                Supporting carriers and owner-operators across America.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Address */}
              <div>
                <span className="text-sm text-gray-400">Dispatch Center</span>
                <p className="mt-2 text-lg font-medium">
                  1234 Trucking Avenue
                  <br />
                  Chicago, IL 60601
                </p>
              </div>

              {/* Working Hours */}
              <div>
                <span className="text-sm text-gray-400">Dispatch Hours</span>
                <p className="mt-2 text-lg font-medium">
                  24/7 Availability
                  <br />
                  365 Days/Year
                </p>
              </div>

              {/* Contact */}
              <div>
                <span className="text-sm text-gray-400">Dispatch Hotline</span>
                <p className="mt-2 text-lg font-medium">1-800-DISPATCH</p>
                <p className="text-sm text-gray-400">Emergency: 24/7</p>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-8">
              {/* Company Links */}
              <div>
                <h5 className="text-lg font-medium mb-4">Services</h5>
                <ul className="space-y-3">
                  {links1.map((elm, i) => (
                    <li key={i}>
                      <Link
                        href={elm.href}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {elm.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dispatch Hubs */}
              <div>
                <h5 className="text-lg font-medium mb-4">Dispatch Hubs</h5>
                <ul className="space-y-3">
                  {links2.map((elm, i) => (
                    <li key={i}>
                      <a
                        href={elm.href}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {elm.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0">
              <span className="text-sm text-gray-400 lg:mr-8">
                © {new Date().getFullYear()} TruckDispatch Pro
              </span>
              <ul className="flex flex-wrap items-center space-x-6">
                {legalLinks.map((elm, i) => (
                  <li key={i}>
                    <Link
                      href={elm.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {elm.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              {socialMediaPlatforms.map((platform) => (
                <a
                  key={platform.id}
                  href={platform.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className={platform.className}></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
