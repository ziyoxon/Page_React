import React from "react";
import CareerImage from "../../assets/car.svg"; 

const Career = () => {
  return (
    <section id="career" className="bg-white py-16 px-6">
      <div className="container mx-auto text-center">
        <p className="text-sm font-medium text-gray-800">CAREER AT FINSWEET</p>
        <h2 className="text-4xl font-bold text-gray-800 mt-4">
          We hired people who are <br /> Always Passionate about <br /> what they do
        </h2>
        <p className="text-lg text-gray-500 mt-4">
          Through True Rich Attended does no end it his mother since real had
          half <br /> every him case in packages enquire we up ecstatic unsatisfiable
          saw.
        </p>

        <div className="relative mt-12 mb-8">
         
            <img
              src={CareerImage}
              alt="Team working"
              className="w-full h-50 object-cover rounded-lg opacity-30"
            />
        </div>

        <h4 className="text-xl font-semibold text-gray-800 mt-12">
          See Our Open Positions
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-[#F0F4F8] p-6 rounded-lg shadow-lg">
            <h5 className="text-lg font-semibold text-gray-800">
              Full Stack Developer
            </h5>
            <p className="text-gray-500">Bengaluru · Full Time</p>
            <p className="text-gray-500 mt-2">
              Salary: $10K - $18K · No equity
            </p>
            <button className="mt-4 bg-[#FF5733] text-white py-2 px-6 rounded-lg">
              Apply Now
            </button>
          </div>
          <div className="bg-[#F0F4F8] p-6 rounded-lg shadow-lg">
            <h5 className="text-lg font-semibold text-gray-800">
              Testing Engineer
            </h5>
            <p className="text-gray-500">Remote · Full Time</p>
            <p className="text-gray-500 mt-2">
              Salary: $08K - $10K · No equity
            </p>
            <button className="mt-4 bg-[#FF5733] text-white py-2 px-6 rounded-lg">
              Apply Now
            </button>
          </div>
          <div className="bg-[#F0F4F8] p-6 rounded-lg shadow-lg">
            <h5 className="text-lg font-semibold text-gray-800">HR Manager</h5>
            <p className="text-gray-500">Mumbai · Full time</p>
            <p className="text-gray-500 mt-2">
              Salary: $08K - $10K · 4 to 5 Years Exp
            </p>
            <button className="mt-4 bg-[#FF5733] text-white py-2 px-6 rounded-lg">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
