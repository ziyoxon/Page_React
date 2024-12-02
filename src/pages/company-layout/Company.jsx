import React from "react";
import Image1 from "../../assets/Image1.svg"; 
import Image2 from "../../assets/Image2.svg";
import Image3 from "../../assets/Image3.svg"; 
import Image5 from "../../assets/sape.svg"; 

const Company = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="container mx-auto">
        <div className="md:w-1/2">
        <img src={Image5} alt="" />
          <h1 className="text-4xl md:text-xl  mb-6 text-[#232536] leading-tight">
            Company
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#232536] leading-tight">
            Award-winning Company seen and used by millions around the world.
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The Maker
            is a decentralized.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex justify-center">
            <img
              src={Image1}
              alt="Office meeting 1"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={Image2}
              alt="Office meeting 2"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={Image3}
              alt="Office meeting 3"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
