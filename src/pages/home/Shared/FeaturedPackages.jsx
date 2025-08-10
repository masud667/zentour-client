import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import {
  FaClock,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaStar,
  FaChevronRight,
  FaUser,
} from "react-icons/fa";
import { GiPathDistance, GiSuitcase } from "react-icons/gi";

const FeaturedPackages = () => {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    fetch("/allpackage.json")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data.slice(0, 6));
      })
      .catch((error) => console.error("Error loading packages:", error));
  }, []);

  const handleShowAll = () => navigate("/packages");
  const handlePackageDetails = (id) => navigate(`/packages/${id}`);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.1, 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }),
    hover: {
      y: -15,
      boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.25)",
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <div className="py-12 md:py-16 bg-base-100 text-base-content">
      <div className="w-11/12 mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-600 mb-4"
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
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-base md:text-lg text-cyan-700 max-w-2xl mx-auto px-4"
          >
            Discover our handpicked journeys to Bangladesh's most breathtaking destinations.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={cardVariants}
              className="relative rounded-2xl overflow-hidden shadow-lg bg-base-100 text-base-content cursor-pointer"
              onMouseEnter={() => setHoveredCard(pkg.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handlePackageDetails(pkg.id)}
            >
              <div
                className="relative h-52 md:h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${pkg.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400 to-amber-500 text-amber-900 px-3 py-1 rounded-full font-bold text-xs md:text-sm flex items-center">
                  <FaStar className="mr-1" />
                  <span>FEATURED</span>
                </div>
                <h3 className="absolute bottom-4 left-4 text-white font-bold text-lg md:text-xl">{pkg.name}</h3>
                <div className="absolute bottom-4 right-4 bg-white/90 text-cyan-700 px-2 md:px-3 py-1 rounded-full font-bold flex items-center">
                  <FaStar className="text-amber-400 mr-1" />
                  <span>{pkg.rating}</span>
                </div>
              </div>

              <div className="p-4 md:p-6">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="relative">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-300 flex items-center justify-center">
                      <FaUser className="text-base-100 text-base md:text-lg" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="ml-3">
                    <p className="text-xs md:text-sm font-medium text-gray-500">Tour Guide</p>
                    <p className="font-semibold text-cyan-200 text-sm md:text-base">{pkg.guide}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                  {[
                    { icon: <FaClock className="text-base-100 text-base md:text-lg"/>, label: "Duration", value: pkg.duration },
                    { icon: <FaCalendarAlt className="text-base-100 text-base md:text-lg"/>, label: "Departure", value: pkg.departure },
                    { icon: <GiPathDistance className="text-base-100 text-base md:text-lg" />, label: "Distance", value: pkg.distance },
                    { icon: <FaMapMarkerAlt className="text-base-100 text-base md:text-lg"/>, label: "Spots", value: pkg.spots }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-cyan-300 flex items-center justify-center mr-2 md:mr-3">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">{item.label}</p>
                        <p className="font-medium text-sm md:text-base">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center border-t border-gray-100 pt-3 md:pt-4">
                  <div>
                    <p className="text-xs md:text-sm text-gray-500">Starting from</p>
                    <p className="text-xl md:text-2xl font-bold text-cyan-700">{pkg.price}</p>
                  </div>
                  <motion.button
                    whileHover={{ backgroundColor: "#0e7490", scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full font-medium flex items-center text-sm md:text-base"
                  >
                    View Details
                    <FaChevronRight className="ml-1 md:ml-2 text-xs md:text-sm" />
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
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.button
            whileHover={{
              backgroundColor: "#0e7490",
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShowAll}
            className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg flex items-center mx-auto"
          >
            <GiSuitcase className="mr-2 md:mr-3 text-lg" />
            Show All Packages
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedPackages;