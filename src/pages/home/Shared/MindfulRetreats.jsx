import React from 'react';
import { FaLeaf, FaWater, FaMountain, FaYinYang, FaStar, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import { motion } from "framer-motion";

const MindfulRetreats = () => {
  const retreats = [
    {
      id: 1,
      title: "Sundarbans Forest Sanctuary",
      description: "Meditation retreat deep in the mangrove forests with daily guided mindfulness sessions",
      location: "Khulna",
      duration: "4 days",
      groupSize: "8-12 people",
      price: "$320",
      rating: 4.9,
      icon: <FaLeaf className="text-cyan-500" />,
      features: ["River meditation", "Forest bathing", "Wildlife observation", "Traditional Bengali meals"]
    },
    {
      id: 2,
      title: "Hill Tracts Zen Center",
      description: "Tribal-inspired retreat with waterfall meditation and hill tribe wisdom sharing",
      location: "Bandarban",
      duration: "5 days",
      groupSize: "6-10 people",
      price: "$380",
      rating: 4.8,
      icon: <FaMountain className="text-amber-500" />,
      features: ["Waterfall meditation", "Tribal yoga", "Herbal therapy", "Bamboo forest walks"]
    },
    {
      id: 3,
      title: "River Delta Serenity Lodge",
      description: "Floating meditation center on the Padma River with sunrise mindfulness practices",
      location: "Barisal",
      duration: "3 days",
      groupSize: "10-15 people",
      price: "$280",
      rating: 4.7,
      icon: <FaWater className="text-cyan-500" />,
      features: ["Water-based meditation", "Boat mindfulness", "Riverbank yoga", "Fresh fish cuisine"]
    }
  ];

  const practices = [
    {
      id: 1,
      title: "Breath of the Delta",
      description: "Rhythmic breathing technique inspired by river currents",
      icon: <FaWater className="text-cyan-500" />
    },
    {
      id: 2,
      title: "Mangrove Meditation",
      description: "Grounding practice connecting with root systems",
      icon: <FaLeaf className="text-cyan-500" />
    },
    {
      id: 3,
      title: "Tea Garden Mindfulness",
      description: "Awareness practice among Sylhet tea plantations",
      icon: <FaYinYang className="text-violet-500" />
    },
    {
      id: 4,
      title: "Hill Tribe Movement",
      description: "Gentle flowing motions from Chittagong tribes",
      icon: <FaMountain className="text-amber-500" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
                  <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-cyan-900 mb-4">
                   Mindful Retreats of Bangladesh
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
                     Discover sacred spaces where nature and spirituality converge for transformative experiences
                  </motion.p>
                </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {retreats.map(retreat => (
            <div 
              key={retreat.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Retreat Header */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-white bg-opacity-20 p-2 rounded-lg mr-3">
                      {retreat.icon}
                    </div>
                    <span className="font-medium">{retreat.location}</span>
                  </div>
                  <div className="flex items-center bg-teal-500 px-3 py-1 rounded-full">
                    <FaStar className="mr-1 text-amber-300" />
                    <span>{retreat.rating}</span>
                  </div>
                </div>
                <h3 className="text-2xl   font-medium">{retreat.title}</h3>
              </div>
              
              {/* Retreat Body */}
              <div className="p-6">
                <p className="text-slate-700 mb-6">{retreat.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-medium text-slate-800 mb-3">Experience Includes:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {retreat.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Details */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center text-slate-600">
                    <FaCalendarAlt className="mr-2" />
                    <span>{retreat.duration}</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <FaUsers className="mr-2" />
                    <span>{retreat.groupSize}</span>
                  </div>
                </div>
                
                {/* Price and CTA */}
                <div className="flex justify-between items-center">
                  <span className="text-2xl   font-medium text-slate-800">{retreat.price}</span>
                  <button className="btn bg-gradient-to-r from-cyan-500 to-teal-500 text-white border-0 hover:from-cyan-600 hover:to-teal-600 px-6 rounded-full">
                    Reserve
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Local Practices Section */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 mb-16 border border-teal-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-3xl   font-light text-slate-800 mb-4">
                Traditional Bangladeshi Mindfulness Practices
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Ancient techniques passed down through generations that cultivate peace and awareness
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {practices.map(practice => (
                <div 
                  key={practice.id}
                  className="bg-white bg-opacity-70 rounded-2xl p-6 text-center hover:bg-white transition-all"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 mb-5">
                    <span className="text-2xl">{practice.icon}</span>
                  </div>
                  <h4 className="text-xl font-medium text-slate-800 mb-2">{practice.title}</h4>
                  <p className="text-slate-600">{practice.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wisdom Section */}
        <div className="flex flex-col lg:flex-row items-center bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl overflow-hidden">
          <div className="lg:w-1/2 p-10 lg:p-16">
            <div className="inline-block bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-1 rounded-full mb-4">
              Bengali Wisdom
            </div>
            <h3 className="text-3xl   text-white mb-6">
              "The river doesn't rush, yet it always reaches the sea"
            </h3>
            <p className="text-slate-300 mb-8">
              In Bangladesh, we learn patience from the rivers, resilience from the mangroves, and harmony from the six seasons. Our mindfulness practices are woven into daily life - in the rhythm of boat oars, the preparation of tea, and the sharing of meals.
            </p>
            <button className="btn btn-outline text-white border-white hover:bg-white hover:text-slate-800 rounded-full px-8">
              Discover Our Philosophy
            </button>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4 p-6">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl h-48"></div>
              <div className="bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl h-48 mt-8"></div>
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl h-48"></div>
              <div className="bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl h-48 mt-8"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center">
                <FaYinYang className="text-3xl text-slate-800" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MindfulRetreats;