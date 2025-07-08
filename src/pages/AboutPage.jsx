import React from "react";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";
import { FaGithub, FaCode, FaUsers } from "react-icons/fa";
import Farxiyo from "../assets/farxiyo.jpg"
import Nimco from "../assets/Nimco.jpg"
import Sham from "../assets/shamsudiin.jpg"

const AboutPage = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <Sidebar />

      <main className="w-full max-w-7xl mx-auto px-4 py-8 text-gray-800 space-y-12 lg:ml-48">
                        
        {/* Intro */}
        <section className="bg-gradient-to-r from-indigo-50 via-white to-purple-50 rounded-xl shadow-md p-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 flex items-center gap-2 mb-2">
            
            Welcome to ConnectHub
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Built for community and creativity <strong> ConnectHub</strong> is where stories, experiences, and ideas come 
            to life. Whether you're posting content, customizing your profile, or engaging with others, this platform is yours to shape.
          </p>
        </section>

        {/* Features */}
        <section className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center gap-2">
            <FaCode className="text-indigo-400" />
            Core Features
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li> Editable profiles with real-time updates</li>
            <li> Seamless image uploads via Cloudinary</li>
            <li> Interactive post feed with engagement tools</li>
            <li> Social interactions</li>
            <li> Search and discover profiles across the app</li>
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center gap-2">
            <FaCode className="text-indigo-400" />
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
            <span> React + Redux</span>
            <span> Tailwind CSS</span>
            <span> Cloudinary</span>
            <span> API</span>
            <span> React Router</span>
            <span> Auth & State Persistence</span>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-indigo-600 mb-6 flex items-center gap-2">
            <FaUsers className="text-indigo-400" />
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Farxiyo */}
            <div className="flex flex-col items-center text-center">
              <img
                src={Farxiyo}
                alt="Tanjim"
                className="w-24 h-24 rounded-md object-cover mb-3 shadow-md"
              />
              <h3 className="text-lg font-bold text-gray-800">Farxiyo</h3>
              <button
                onClick={() => window.open("https://github.com/farhiyafahan123", "_blank")}
                className="flex items-center gap-2 text-sm text-indigo-600 hover:underline"
              >
                <FaGithub />
              </button>
            </div>

            {/* Shamsudiin*/}
            <div className="flex flex-col items-center text-center">
              <img
                src={Sham}
                alt="Teammate 2"
                className="w-24 h-24 rounded-md object-cover mb-3 shadow-md"
              />
              <h3 className="text-lg font-bold text-gray-800">Shamsudin</h3>
              <button
                onClick={() => window.open("https://github.com/shamsudindahir", "_blank")}
                className="flex items-center gap-2 text-sm text-indigo-600 hover:underline"
              >
                <FaGithub />
              </button>
            </div>

            {/* Nimco */}
            <div className="flex flex-col items-center text-center">
              <img
                src={Nimco}
                alt="Teammate 3"
                className="w-24 h-24 rounded-md object-cover mb-3 shadow-md"
              />
              <h3 className="text-lg font-bold text-gray-800">Nimco</h3>
              <button
                onClick={() => window.open("https://github.com/nimco-yusuf", "_blank")}
                className="flex items-center gap-2 text-sm text-indigo-600 hover:underline"
              >
                <FaGithub />
              </button>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <section className="pt-6 border-t border-gray-300 text-sm text-gray-500 text-center">
          <p>ConnectHub © {new Date().getFullYear()} — Version 1.0.0</p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
