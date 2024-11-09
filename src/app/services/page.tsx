export default function Services() {
    return (
      <div className="bg-white min-h-screen p-10">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="font-extrabold text-4xl text-gray-800 font-serif animate-shake">Our Services</h1>
        </div>
  
        {/* Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-orange-50 p-8 rounded-lg shadow-md hover:shadow-xl hover:bg-orange-100 transition-all duration-300">
            <div className="mb-4">
              <img 
                src="/oil-change.jpg" 
                alt="Oil Change" 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            </div>
            <h2 className="font-semibold text-2xl text-gray-800 mb-4">Oil Change</h2>
            <p className="text-gray-800 text-base">
              Regular oil changes are essential to keep your engine running smoothly. Our oil change service ensures your engine stays well-lubricated and efficient.
            </p>
          </div>
  
          {/* Service Card 2 */}
          <div className="bg-orange-50 p-8 rounded-lg shadow-md hover:shadow-xl hover:bg-orange-100 transition-all duration-300">
            <div className="mb-4">
              <img 
                src="/QualityBrakeService.jpg" 
                alt="Brake Services" 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            </div>
            <h2 className="font-semibold text-2xl text-gray-800 mb-4">Brake Services</h2>
            <p className="text-gray-800 text-base">
              We provide top-notch brake inspection and replacement services to ensure your safety on the road. Don't compromise on brake performance!
            </p>
          </div>
  
          {/* Service Card 3 */}
          <div className="bg-orange-50 p-8 rounded-lg shadow-md hover:shadow-xl hover:bg-orange-100 transition-all duration-300">
            <div className="mb-4">
              <img 
                src="/Tire-Repair-facts.jpg" 
                alt="Tire Services" 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            </div>
            <h2 className="font-semibold text-2xl text-gray-800 mb-4">Tire Services</h2>
            <p className="text-gray-800 text-base">
              Our tire services include balancing, rotation, and replacement. We help you get the best tires to ensure a smooth and safe driving experience.
            </p>
          </div>
  
          {/* Service Card 4 */}
          <div className="bg-orange-50 p-8 rounded-lg shadow-md hover:shadow-xl hover:bg-orange-100 transition-all duration-300">
            <div className="mb-4">
              <img 
                src="/diagnostics-01.jpg" 
                alt="Engine Diagnostics" 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            </div>
            <h2 className="font-semibold text-2xl text-gray-800 mb-4">Engine Diagnostics</h2>
            <p className="text-gray-800 text-base">
              Our advanced diagnostic tools help us identify engine issues before they become major problems, ensuring your car stays in peak condition.
            </p>
          </div>
  
          {/* Service Card 5 */}
          <div className="bg-orange-50 p-8 rounded-lg shadow-md hover:shadow-xl hover:bg-orange-100 transition-all duration-300">
            <div className="mb-4">
              <img 
                src="/9-Best-Car-AC-Repair.jpg" 
                alt="AC Repair & Maintenance" 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            </div>
            <h2 className="font-semibold text-2xl text-gray-800 mb-4">AC Repair & Maintenance</h2>
            <p className="text-gray-800 text-base">
              Keep your cabin cool during the summer with our AC repair and maintenance services. We ensure your air conditioning is always working at its best.
            </p>
          </div>
  
          {/* Service Card 6 */}
          <div className="bg-orange-50 p-8 rounded-lg shadow-md hover:shadow-xl hover:bg-orange-100 transition-all duration-300">
            <div className="mb-4">
              <img 
                src="/battery-cnt.jpg" 
                alt="Battery Services" 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            </div>
            <h2 className="font-semibold text-2xl text-gray-800 mb-4">Battery Services</h2>
            <p className="text-gray-800 text-base">
              We provide battery testing, charging, and replacement to ensure your vehicle always starts reliably, even on the coldest mornings.
            </p>
          </div>
        </div>
      </div>
    );
  }
  