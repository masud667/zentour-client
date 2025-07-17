import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaYinYang,
  FaWater,
  FaTree,
  FaMountain,
  FaStar,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import { Link } from "react-router";

const ZenExperiences = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  const experiences = [
    {
      id: 1,
      title: "Sundarbans Meditation",
      description:
        "Guided mindfulness sessions amidst the world's largest mangrove forest, home to the Royal Bengal Tiger. Connect with nature in its purest form.",
      location: "Khulna Division",
      duration: "3 Days",
      rating: 4.9,
      icon: <FaTree className="text-emerald-500" />,
      color: "from-emerald-50 to-teal-50",
    },
    {
      id: 2,
      title: "River Delta Harmony",
      description:
        "Boat meditation along the Ganges-Brahmaputra delta. Experience the flow of life while floating on sacred waters at sunrise.",
      location: "Barisal Division",
      duration: "2 Days",
      rating: 4.8,
      icon: <FaWater className="text-cyan-500" />,
      color: "from-cyan-50 to-blue-50",
    },
    {
      id: 3,
      title: "Hill Tracts Yoga Retreat",
      description:
        "Morning yoga sessions with tribal communities in the Chittagong Hill Tracts. Find balance amidst tea gardens and waterfalls.",
      location: "Chittagong Division",
      duration: "4 Days",
      rating: 5.0,
      icon: <FaMountain className="text-amber-500" />,
      color: "from-amber-50 to-orange-50",
    },
    {
      id: 4,
      title: "Tea Garden Zen",
      description:
        "Mindful tea ceremonies in the rolling hills of Srimangal. Learn the art of presence from third-generation tea masters.",
      location: "Sylhet Division",
      duration: "2 Days",
      rating: 4.7,
      icon: <FaYinYang className="text-violet-500" />,
      color: "from-violet-50 to-purple-50",
    },
  ];

  const nextExperience = () => {
    setActiveExperience((prev) => (prev + 1) % experiences.length);
  };

  const prevExperience = () => {
    setActiveExperience(
      (prev) => (prev - 1 + experiences.length) % experiences.length
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-cyan-900 mb-4">
            Serene Bangladesh Experiences
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "150px" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1.5 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg text-cyan-700 max-w-2xl mx-auto">
            Discover the tranquil beauty of Bangladesh through mindful journeys
            that reconnect you with nature and self
          </motion.p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Featured Experience */}
          <div className="lg:col-span-2">
            <div
              className={`bg-gradient-to-br ${experiences[activeExperience].color} rounded-3xl overflow-hidden shadow-lg h-full`}>
              <div className="p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center mb-2">
                      {experiences[activeExperience].icon}
                      <span className="ml-2 text-slate-600">
                        {experiences[activeExperience].location}
                      </span>
                    </div>
                    <h3 className="text-3xl   font-medium text-slate-800">
                      {experiences[activeExperience].title}
                    </h3>
                  </div>
                  <div className="flex items-center bg-white px-3 py-1 rounded-full">
                    <FaStar className="text-amber-400 mr-1" />
                    <span className="font-medium">
                      {experiences[activeExperience].rating}
                    </span>
                  </div>
                </div>

                <p className="text-slate-700 text-lg mb-8 flex-grow">
                  {experiences[activeExperience].description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="bg-white px-4 py-2 rounded-full font-medium text-slate-700">
                    {experiences[activeExperience].duration}
                  </span>
                  <Link
                    to="/packages"
                    className="btn bg-gradient-to-r from-cyan-500 to-teal-500 text-white border-0 hover:from-teal-500 hover:to-cyan-500 px-8 rounded-full">
                    Book Journey
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Experience List */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                onClick={() => setActiveExperience(index)}
                className={`cursor-pointer transition-all duration-300 ${
                  index === activeExperience
                    ? "border-l-4 border-teal-500 bg-white shadow-lg"
                    : "border-l-4 border-slate-100 hover:border-l-4 hover:border-emerald-300"
                } rounded-r-2xl p-6`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className={`p-3 rounded-lg mr-4 ${
                        index === activeExperience
                          ? "bg-teal-100"
                          : "bg-slate-100"
                      }`}>
                      {exp.icon}
                    </div>
                    <h4
                      className={`font-medium ${
                        index === activeExperience
                          ? "text-slate-800"
                          : "text-slate-600"
                      }`}>
                      {exp.title}
                    </h4>
                  </div>
                  <span className="text-sm text-slate-500">{exp.duration}</span>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <div className="flex justify-center mt-8 space-x-4 lg:hidden">
              <button
                onClick={prevExperience}
                className="btn btn-circle bg-white border border-slate-200 hover:bg-slate-50">
                <FaArrowLeft className="text-slate-600" />
              </button>
              <button
                onClick={nextExperience}
                className="btn btn-circle bg-white border border-slate-200 hover:bg-slate-50">
                <FaArrowRight className="text-slate-600" />
              </button>
            </div>

            {/* Testimonial */}
            <div className="mt-10 bg-gradient-to-r from-slate-50 to-white rounded-2xl p-6 border border-slate-100">
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-amber-400 to-orange-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  A
                </div>
                <div>
                  <p className="text-slate-700 italic mb-2">
                    "The Sundarbans meditation journey transformed my connection
                    with nature. The stillness of the mangroves at dawn is pure
                    magic."
                  </p>
                  <div className="flex items-center">
                    <span className="font-medium text-slate-800">
                      Ayesha Rahman
                    </span>
                    <span className="mx-2 text-slate-400">•</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cultural Insight */}
        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 text-center border border-emerald-100">
          <h3 className="text-2xl   text-slate-800 mb-4">
            "In Bangladesh, the rivers teach us to flow, the forests teach us
            resilience, and the people teach us warmth."
          </h3>
          <p className="text-slate-700">
            Discover the wisdom of Bengali Baul mystics, the harmony of diverse
            faiths coexisting, and the deep connection to nature that defines
            our Zen journeys.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ZenExperiences;
