import BreadCumb from "@/components/contact/BreadCrumb";
import ContactForm from "@/components/contact/ContactForm";
import Map from "@/components/contact/Map";
import Offices from "@/components/contact/Office";
import Hero from "@/components/home/Hero";

export default function Page() {
  return (
    <main>
      {/* <BreadCumb /> */}
      <Hero />
      <Offices />
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Logistics Hub for Premium Truck Dispatching Services
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Get in touch with our expert team for nationwide dispatching
              solutions. Available 24/7 to support your trucking business.
            </p>
          </div>
        </div>
      </section>

      <Map />

      <ContactForm />
    </main>
  );
}
