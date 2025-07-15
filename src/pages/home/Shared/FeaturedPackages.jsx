import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import {
  FaClock,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaStar,
  FaChevronRight,
  FaUser
} from "react-icons/fa";
import { GiPathDistance, GiSuitcase } from "react-icons/gi";

const FeaturedPackages = () => {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Fetch JSON data from public folder
  useEffect(() => {
    fetch("/allpackage.json")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data.slice(0, 6));
      })
      .catch((error) => console.error("Error loading packages:", error));
  }, []);

  const handleShowAll = () => {
    navigate("/packages");
  };
const handlePackages =()=>{
  navigate('/packages')
}
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
    }),
    hover: {
      y: -15,
      boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.25)",
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <div className="py-16 px-4 md:px-8 bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-cyan-900 mb-4"
          >
            Featured Travel Packages
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
            className="text-lg text-cyan-700 max-w-2xl mx-auto"
          >
            Discover our handpicked journeys to Bangladesh's most breathtaking destinations.
            Each package is carefully curated for unforgettable experiences.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={cardVariants}
              className="relative rounded-2xl overflow-hidden shadow-lg bg-white"
              onMouseEnter={() => setHoveredCard(pkg.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className="relative h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${pkg.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400 to-amber-500 text-amber-900 px-3 py-1 rounded-full font-bold text-sm flex items-center">
                  <FaStar className="mr-1" />
                  <span>FEATURED</span>
                </div>
                <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl">{pkg.name}</h3>
                <div className="absolute bottom-4 right-4 bg-white/90 text-cyan-700 px-3 py-1 rounded-full font-bold flex items-center">
                  <FaStar className="text-amber-400 mr-1" />
                  <span>{pkg.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-teal-500 flex items-center justify-center">
                      <FaUser className="text-white text-lg" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-500">Tour Guide</p>
                    <p className="font-semibold text-cyan-800">{pkg.guide}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center mr-3">
                      <FaClock className="text-cyan-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Duration</p>
                      <p className="font-medium">{pkg.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center mr-3">
                      <FaCalendarAlt className="text-cyan-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Departure</p>
                      <p className="font-medium">{pkg.departure}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center mr-3">
                      <GiPathDistance className="text-cyan-600 text-lg" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Distance</p>
                      <p className="font-medium">{pkg.distance}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center mr-3">
                      <FaMapMarkerAlt className="text-cyan-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Spots</p>
                      <p className="font-medium line-clamp-1">{pkg.spots}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-2xl font-bold text-cyan-700">{pkg.price}</p>
                  </div>
                  <motion.button
                  onClick={handlePackages}
                    whileHover={{ backgroundColor: "#0e7490", scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-5 py-2.5 rounded-full font-medium flex items-center"
                  >
                    View Details
                    <FaChevronRight className="ml-2 text-sm" />
                  </motion.button>
                </div>
              </div>

              {hoveredCard === pkg.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.button
            whileHover={{
              backgroundColor: "#0e7490",
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShowAll}
            className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center mx-auto"
          >
            <GiSuitcase className="mr-3 text-xl" />
            Show All Packages
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedPackages;
