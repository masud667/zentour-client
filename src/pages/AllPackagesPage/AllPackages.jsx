import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  FaClock,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaStar,
  FaChevronRight,
  FaSearch,
  FaUser,
  FaSortAmountDown,
  FaSortAmountUpAlt,
} from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { AuthContext } from "../../context/AuthContext";

// Date format function
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

// Price parsing function
const parsePrice = (priceStr) => {
  if (!priceStr) return 0;
  // Remove currency symbols and commas
  const numericStr = priceStr.replace(/[^\d.]/g, "");
  return parseFloat(numericStr);
};

const AllPackages = ({ packages }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const { user } = useContext(AuthContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter + Sort
  const filteredPackages = packages
    .filter((pkg) => pkg.name?.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      const priceA = parsePrice(a.price);
      const priceB = parsePrice(b.price);

      if (sortOrder === "asc") return priceA - priceB;
      if (sortOrder === "desc") return priceB - priceA;
      return 0;
    });

  return (
    <div className="min-h-screen bg-base-100 py-8 sm:py-12">
      <div className="w-11/12 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-600 mb-3 sm:mb-4">
            Explore Our Travel Packages
          </h1>
          <div className="h-1.5 bg-gradient-to-r from-cyan-500 to-teal-500 w-24 sm:w-32 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-cyan-700 max-w-3xl mx-auto px-2">
            Discover unforgettable journeys to Bangladesh's most breathtaking
            destinations. Find your perfect adventure!
          </p>
        </motion.div>

        {/* Search + Sort */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 sm:mb-12 max-w-4xl mx-auto">
          {/* Search */}
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 sm:pl-4 pointer-events-none text-cyan-600">
              <FaSearch className="text-lg sm:text-xl" />
            </div>
            <input
              type="text"
              placeholder="Search by package name..."
              className="w-full py-3 sm:py-4 pl-10 sm:pl-12 pr-4 sm:pr-6 bg-base-100 rounded-full shadow-md sm:shadow-lg border border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-base sm:text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Sort Buttons */}
          <div className="flex justify-center  gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                sortOrder === "asc"
                  ? "bg-cyan-600 text-white shadow-md"
                  : "bg-cyan-100 text-cyan-700 hover:bg-cyan-200"
              }`}
              onClick={() => setSortOrder(sortOrder === "asc" ? "" : "asc")}>
              <FaSortAmountDown />
              <span className="hidden sm:inline">Low to High</span>
              <span className="sm:hidden">Low</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                sortOrder === "desc"
                  ? "bg-cyan-600 text-white shadow-md"
                  : "bg-cyan-100 text-cyan-700 hover:bg-cyan-200"
              }`}
              onClick={() => setSortOrder(sortOrder === "desc" ? "" : "desc")}>
              <FaSortAmountUpAlt />
              <span className="hidden sm:inline">High to Low</span>
              <span className="sm:hidden">High</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Packages Grid */}
        {filteredPackages.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 sm:py-16">
            <div className="text-cyan-600 mb-4 sm:mb-6">
              <FaSearch className="mx-auto text-4xl sm:text-5xl opacity-50" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-900 mb-3 sm:mb-4">
              No packages found
            </h3>
            <p className="text-cyan-700 max-w-md mx-auto px-2">
              We couldn't find any packages matching your search. Try different
              terms.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="bg-base-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                {/* Image */}
                <div
                  className="relative h-48 sm:h-56 bg-cover bg-center"
                  style={{ backgroundImage: `url(${pkg.image})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white font-bold text-lg sm:text-xl">
                    {pkg.name}
                  </h3>
                  <div className="absolute top-4 right-4 bg-base-100/90 text-cyan-700 px-2 sm:px-3 py-1 rounded-full font-bold flex items-center">
                    <FaStar className="text-amber-400 mr-1" />
                    <span>{pkg.rating}</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-r-lg font-bold text-sm sm:text-base">
                    {pkg.price}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  {/* Guide */}
                  <div className="flex items-center mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-cyan-100">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-cyan-400 to-teal-500 flex items-center justify-center">
                      <FaUser className="text-white text-base sm:text-lg" />
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <p className="text-xs sm:text-sm text-cyan-600">
                        Tour Guide
                      </p>
                      <h4 className="font-bold text-cyan-800 text-sm sm:text-base">
                        {pkg.guide}
                      </h4>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 flex-grow">
                    <div className="flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cyan-100 flex items-center justify-center mr-3 sm:mr-4 text-cyan-600">
                        <FaClock className="text-sm sm:text-base" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-cyan-600">
                          Duration
                        </p>
                        <p className="font-medium text-sm sm:text-base">
                          {pkg.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cyan-100 flex items-center justify-center mr-3 sm:mr-4 text-cyan-600">
                        <FaCalendarAlt className="text-sm sm:text-base" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-cyan-600">
                          Departure
                        </p>
                        <p className="font-medium text-sm sm:text-base">
                          {formatDate(pkg.departure)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cyan-100 flex items-center justify-center mr-3 sm:mr-4 text-cyan-600">
                        <GiPathDistance className="text-sm sm:text-lg" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-cyan-600">
                          Distance
                        </p>
                        <p className="font-medium text-sm sm:text-base">
                          {pkg.distance}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cyan-100 flex items-center justify-center mr-3 sm:mr-4 text-cyan-600">
                        <FaMapMarkerAlt className="text-sm sm:text-base" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-cyan-600">
                          Highlights
                        </p>
                        <p className="font-medium text-sm sm:text-base line-clamp-1">
                          {pkg.spots}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <Link
                    to={user ? `/packages/${pkg.id}` : "/login"}
                    className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white py-2.5 sm:py-3 rounded-full font-medium flex items-center justify-center transition-all duration-300 transform hover:scale-[1.02] text-sm sm:text-base">
                    View Details
                    <FaChevronRight className="ml-2 text-xs sm:text-sm" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllPackages;
