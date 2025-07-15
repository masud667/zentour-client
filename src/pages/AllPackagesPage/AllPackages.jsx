import React, { use, useEffect, useState } from "react";
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
} from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { AuthContext } from "../../context/AuthContext";

// (date format)
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const AllPackages = ({ packages }) => {
  const [searchTerm, setSearchTerm] = useState("");
const {user} = use(AuthContext);
  const filteredPackages = packages.filter((pkg) =>
    pkg.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-900 mb-4">
            Explore Our Travel Packages
          </h1>
          <div className="h-1.5 bg-gradient-to-r from-cyan-500 to-teal-500 w-32 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-cyan-700 max-w-3xl mx-auto">
            Discover unforgettable journeys to Bangladesh's most breathtaking
            destinations. Find your perfect adventure!
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16 max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-cyan-600">
              <FaSearch className="text-xl" />
            </div>
            <input
              type="text"
              placeholder="Search by package name..."
              className="w-full py-4 pl-12 pr-6 bg-white rounded-full shadow-lg border border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Packages Grid */}
        {filteredPackages.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16">
            <div className="text-cyan-600 mb-6">
              <FaSearch className="mx-auto text-5xl opacity-50" />
            </div>
            <h3 className="text-2xl font-bold text-cyan-900 mb-4">
              No packages found
            </h3>
            <p className="text-cyan-700 max-w-md mx-auto">
              We couldn't find any packages matching your search. Try different
              terms.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-cyan-100">
                {/* Image */}
                <div
                  className="relative h-56 bg-cover bg-center"
                  style={{ backgroundImage: `url(${pkg.image})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl">
                    {pkg.name}
                  </h3>
                  <div className="absolute top-4 right-4 bg-white/90 text-cyan-700 px-3 py-1 rounded-full font-bold flex items-center">
                    <FaStar className="text-amber-400 mr-1" />
                    <span>{pkg.rating}</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-r-lg font-bold">
                    {pkg.price}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Guide */}
                  <div className="flex items-center mb-6 pb-4 border-b border-cyan-100">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-teal-500 flex items-center justify-center">
                        <FaUser className="text-white text-lg" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-cyan-800">{pkg.guide}</h4>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center mr-4 text-cyan-600">
                        <FaClock />
                      </div>
                      <div>
                        <p className="text-sm text-cyan-600">Duration</p>
                        <p className="font-medium">{pkg.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center mr-4 text-cyan-600">
                        <FaCalendarAlt />
                      </div>
                      <div>
                        <p className="text-sm text-cyan-600">Departure</p>
                        <p className="font-medium">
                          {formatDate(pkg.departure)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center mr-4 text-cyan-600">
                        <GiPathDistance className="text-lg" />
                      </div>
                      <div>
                        <p className="text-sm text-cyan-600">Distance</p>
                        <p className="font-medium">{pkg.distance}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center mr-4 text-cyan-600">
                        <FaMapMarkerAlt />
                      </div>
                      <div>
                        <p className="text-sm text-cyan-600">Highlights</p>
                        <p className="font-medium line-clamp-1">{pkg.spots}</p>
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                 <Link
  to={user ? `/packages/${pkg.id}` : "/login"}
  className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white py-3 rounded-full font-bold flex items-center justify-center transition-all duration-300 transform hover:scale-[1.02]"
>
  View Details
  <FaChevronRight className="ml-2 text-sm" />
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
