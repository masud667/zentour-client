import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaStar, FaHeart, FaSearch } from "react-icons/fa";

const TravelInspirationGallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDestination, setSelectedDestination] = useState(null);

  // Sample destinations data
const destinations = [
  {
    id: 1,
    title: "Saint Martin’s Paradise",
    description:
      "Crystal-clear waters, coral reefs, and the tranquil beauty of Bangladesh’s only coral island.",
    location: "Saint Martin’s Island, Bangladesh",
    price: "$499",
    duration: "3 Days",
    rating: 4.8,
    category: "beach",
    image: "https://i.ibb.co.com/gMxLcFgs/1p.jpg",
  },
  {
    id: 2,
    title: "Bandarban Hill Retreat",
    description:
      "Rolling green hills, tribal culture, and the serenity of the Chimbuk range.",
    location: "Bandarban, Bangladesh",
    price: "$699",
    duration: "4 Days",
    rating: 4.9,
    category: "mountain",
    image: "https://i.ibb.co.com/fzmDMLN5/2.jpg",
  },
  {
    id: 3,
    title: "Sundarbans Wildlife Safari",
    description:
      "Explore the world’s largest mangrove forest and spot the majestic Royal Bengal Tiger.",
    location: "Sundarbans, Bangladesh",
    price: "$799",
    duration: "5 Days",
    rating: 4.7,
    category: "adventure",
    image: "https://i.ibb.co.com/HS5THXR/3.jpg",
  },
  {
    id: 4,
    title: "Dhaka Heritage Discovery",
    description:
      "From Lalbagh Fort to Ahsan Manzil, experience the vibrant history of the capital city.",
    location: "Dhaka, Bangladesh",
    price: "$399",
    duration: "2 Days",
    rating: 4.6,
    category: "city",
    image: "https://i.ibb.co.com/RpNXYwFM/4.jpg",
  },
  {
    id: 5,
    title: "Cox’s Bazar Romance",
    description:
      "Walk hand in hand along the world’s longest natural sea beach under golden sunsets.",
    location: "Cox’s Bazar, Bangladesh",
    price: "$599",
    duration: "3 Days",
    rating: 4.5,
    category: "romantic",
    image: "https://i.ibb.co.com/76PhM7b/5.jpg",
  },
  {
    id: 6,
    title: "Sylhet Tea Garden Expedition",
    description:
      "Wander through endless tea estates and discover the charm of rural Sylhet.",
    location: "Sylhet, Bangladesh",
    price: "$549",
    duration: "4 Days",
    rating: 4.8,
    category: "adventure",
    image: "https://i.ibb.co.com/CsNKLVjF/6.jpg",
  },
];


  const categories = [
    { id: "all", name: "All Destinations" },
    { id: "beach", name: "Beach" },
    { id: "mountain", name: "Mountains" },
    { id: "city", name: "City Tours" },
    { id: "adventure", name: "Adventure" },
    { id: "romantic", name: "Romantic" },
  ];

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const filteredDestinations = destinations.filter((dest) => {
    const matchesCategory =
      activeCategory === "all" || dest.category === activeCategory;
    const matchesSearch =
      dest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-cyan-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          Travel Inspiration Gallery
        </motion.h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover handpicked destinations for your next adventure. Click to
          explore package details.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 ">
        <div className="relative w-full md:w-96 border-cyan-100 border rounded-3xl">
          <input
            type="text"
            placeholder="Search destinations..."
            className="w-full pl-10 pr-4 py-3 rounded-full focus:ring-2 focus:ring-cyan-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 " />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-cyan-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-cyan-100"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}>
              {category.name}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredDestinations.map((destination) => (
            <motion.div
              key={destination.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-base-100 rounded-xl overflow-hidden shadow-xl ">
              <div className="relative">
                {/* Image Placeholder */}
                <div
                  className="h-48 flex items-center justify-center text-white font-bold bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${destination.image})`,
                  }}>
                  {destination.name}
                </div>

                <button
                  className="absolute top-3 right-3 bg-base-100 p-2 rounded-full shadow-md"
                  onClick={() => toggleFavorite(destination.id)}>
                  <FaHeart
                    className={`${
                      favorites.includes(destination.id)
                        ? "text-cyan-600 fill-current"
                        : "text-gray-400"
                    }`}
                  />
                </button>

                <div className="absolute bottom-3 left-3 bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <FaStar className="mr-1" /> {destination.rating}
                </div>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-base-content">
                    {destination.title}
                  </h3>
                  <span className="text-lg font-bold text-cyan-600">
                    {destination.price}
                  </span>
                </div>

                <div className="flex items-center mt-2 text-base-content">
                  <FaMapMarkerAlt className="mr-2 text-cyan-500" />
                  <span>{destination.location}</span>
                </div>

                <p className="mt-3 text-gray-500">{destination.description}</p>

                <div className="mt-4 flex justify-between items-center">
                  <span className="bg-cyan-100 text-cyan-800 py-1 px-3 rounded-full text-sm">
                    {destination.duration}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors"
                    onClick={() => setSelectedDestination(destination)}>
                    View Package
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredDestinations.length === 0 && (
        <div className="text-center py-12">
          <div className="text-cyan-500 text-5xl mb-4">🌎</div>
          <h3 className="text-2xl font-bold text-gray-700 mb-2">
            No destinations found
          </h3>
          <p className="text-gray-600">
            Try adjusting your search or filter criteria
          </p>
          <button
            className="mt-4 px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700"
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}>
            Reset Filters
          </button>
        </div>
      )}

      {/* Package Detail Modal */}
      <AnimatePresence>
        {selectedDestination && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedDestination(null)}>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}>
             <div
                  className="h-48 flex items-center justify-center text-white font-bold bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${selectedDestination.image})`,
                  }}>
                  {selectedDestination.name}
                </div>

              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {selectedDestination.title}
                  </h2>
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setSelectedDestination(null)}>
                    ✕
                  </button>
                </div>

                <div className="flex items-center mt-2 text-gray-600">
                  <FaMapMarkerAlt className="mr-2 text-cyan-500" />
                  <span>{selectedDestination.location}</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  <div className="bg-cyan-100 text-cyan-800 py-1 px-3 rounded-full">
                    {selectedDestination.duration}
                  </div>
                  <div className="bg-cyan-100 text-cyan-800 py-1 px-3 rounded-full flex items-center">
                    <FaStar className="mr-1" /> {selectedDestination.rating}
                  </div>
                  <div className="bg-cyan-100 text-cyan-800 py-1 px-3 rounded-full">
                    {selectedDestination.category.charAt(0).toUpperCase() +
                      selectedDestination.category.slice(1)}
                  </div>
                </div>

                <div className="mt-6 border-t border-gray-200 pt-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Package Details
                  </h3>
                  <p className="text-gray-600">
                    {selectedDestination.description}
                  </p>
                  <p className="mt-4 text-gray-600">
                    This all-inclusive package features luxury accommodations,
                    guided tours, and unique local experiences tailored to
                    create unforgettable memories.
                  </p>
                </div>

                <div className="mt-6 border-t border-gray-200 pt-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Inclusions
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-600">
                    <li>✔️ Luxury accommodations</li>
                    <li>✔️ Daily breakfast buffet</li>
                    <li>✔️ Airport transfers</li>
                    <li>✔️ Guided city tours</li>
                    <li>✔️ Adventure activities</li>
                    <li>✔️ 24/7 support</li>
                  </ul>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="text-3xl font-bold text-cyan-600">
                    {selectedDestination.price}
                  </div>
                  <div className="flex space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-white border border-cyan-600 text-cyan-600 rounded-lg hover:bg-cyan-50">
                      Save for Later
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700">
                      Book Now
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TravelInspirationGallery;
