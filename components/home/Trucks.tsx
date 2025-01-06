import React from "react";

const Trucks = () => {
  const services = [
    {
      title: "Dry Van Dispatch",
      description:
        "If you are looking for a truck dispatcher to book you the best dry van freight, you've found the right truck dispatching company that can help you achieve higher earnings with our professional truck dispatching services. Our dry van dispatch services ensure efficient routing and maximum profitability for your fleet.",
    },
    {
      title: "Flatbed Dispatch",
      description:
        "If you are looking for a flatbed truck dispatcher to manage and book freight for your flatbed or Conestoga trailer, Truck Dispatch 360 has you covered. We offer independent truck dispatch services for serious truck drivers. Maximize your specialized hauling potential with our flatbed dispatch services.",
    },
    {
      title: "Reefer Dispatch",
      description:
        "If you are looking for a reefer truck dispatcher to manage your reefer freight, our truck dispatchers at Truck Dispatch 360 can help you achieve your goals. Reach out today to speak to one of our expert truck dispatchers. Keep your temperature-sensitive cargo moving efficiently with our expert reefer dispatch services.",
    },
    {
      title: "Step Deck Dispatch",
      description:
        "Our seasoned team excels in handling oversized loads, construction equipment, and machinery transport, ensuring maximum profitability for your step deck trailer. With our comprehensive step deck dispatch services, you'll achieve peace of mind knowing your unique cargo is in expert hands.",
    },
    {
      title: "RGN and Heavy Haul Dispatch",
      description:
        "With our comprehensive RGN dispatch services, you'll start making the kind of money you deserve with your specialized equipment. From securing high-paying RGN loads to navigating multi-state permits for oversize and overweight hauls, we've got you covered. Don't let your versatile RGN sit idle – let our RGN dispatch experts keep your wheels rolling and profits soaring.",
    },
  ];

  return (
    <>
      <h2 className="text-4xl font-bold text-center mb-12 mt-12">
        Types of Truck Dispatch Services
      </h2>
      <section
        className="py-16 px-4"
        style={{
          background: "black",
          color: "white",
        }}
      >
        <div className="max-w-3xl mx-auto">
          {/* Title */}

          {/* Services List */}
          <div className="space-y-10">
            {services.map((service, index) => (
              <>
                <div key={index} className="text-center">
                  <h3 className="text-2xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300  text-lg">
                    {service.description}
                  </p>
                </div>
                <hr />
              </>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="text-center mt-12">
            <button className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-md hover:bg-yellow-600 transition-colors">
              + MORE TRUCK TYPES
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trucks;
