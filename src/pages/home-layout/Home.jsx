import React from "react";
import Image from "../../assets/Header.svg";
import Logo from "../../assets/Logo.svg";
import Logo2 from "../../assets/Logo2.svg";
import Logo3 from "../../assets/Logo3.svg";
import Logo4 from "../../assets/Logo4.svg";
import Logo5 from "../../assets/Logo5.svg";

const Home = () => {
  return (
    <div id="home" className="bg-[#232536] text-white min-h-screen">
      <div className="container">
        <main className="flex flex-col md:flex-row items-center gap-10 py-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Transform Your Idea Into Reality with Finsweet
            </h1>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The entire Finsweet team knows what's good with Webflow and you
              can too with 1 week and a good attitude.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:opacity-90">
              Request Quote
            </button>
          </div>

          <div className="md:w-1/2">
            <img
              src={Image}
              alt="Team Meeting"
              className="rounded-lg shadow-lg"
            />
          </div>
        </main>

        <section className="bg-[#1A1A2E] py-8 mt-9 rounded-lg">
          <div className="container ">
            <div className="mb-4">
              <p className="text-gray-400 text-sm">Our Clients</p>
              <h3 className="text-lg font-semibold text-white">
                We've Worked with
              </h3>
            </div>

            <div className="flex justify-between items-center gap-4 flex-wrap">
              <img
                src={Logo}
                alt="Logo 1"
                className="opacity-70 hover:opacity-100"
              />
              <img
                src={Logo2}
                alt="Logo 2"
                className="opacity-70 hover:opacity-100"
              />
              <img
                src={Logo3}
                alt="Logo 3"
                className="opacity-70 hover:opacity-100"
              />
              <img
                src={Logo4}
                alt="Logo 4"
                className="opacity-70 hover:opacity-100"
              />
              <img
                src={Logo5}
                alt="Logo 5"
                className="opacity-70 hover:opacity-100"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
