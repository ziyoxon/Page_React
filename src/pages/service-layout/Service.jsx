import React from "react";

const Service = () => {
  return (
    <div id="service" className="bg-[#FFE6D2] text-white min-h-screen">
      <div className="container">
        <main className="flex flex-col md:flex-row items-center gap-10 py-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#232536] leading-tight">
              We Build Software Solutionthat Solve Clients Business Challenges
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Through True Rich Attended does no end it his mother since
              favourable real had half every him case in packages enquire we up
              ecstatic.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:opacity-90">
              Request Quote
            </button>
          </div>

          <div className="md:w-1/2">
            <h2 className=" md:text-3xl font-bold text-[#232536] mb-6 leading-tight">
              Technical support
            </h2>
            <h2 className=" md:text-3xl font-bold mb-6 text-[#232536] leading-tight">
              Development
            </h2>
            <h2 className="text-3xl md:text-3xl font-bold mb-6 text-[#232536] leading-tight">
              AWS/Azure{" "}
            </h2>
            <h2 className="text-3xl md:text-3xl font-bold mb-6 text-[#232536]  leading-tight">
              Consulting
            </h2>
            <h2 className="text-3xl md:text-3xl font-bold mb-6 text-[#232536]  leading-tight">
              Information Technology
            </h2>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Service;
