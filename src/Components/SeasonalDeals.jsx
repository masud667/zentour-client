import React, { useState, useEffect } from "react";
import {
  FaStar,
  FaClock,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaPercent,
} from "react-icons/fa";
import { motion } from "framer-motion";

const SeasonalDeals = () => {
  const [activeTab, setActiveTab] = useState("summer");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set offer end date (7 days from now)
    const offerEndDate = new Date();
    offerEndDate.setDate(offerEndDate.getDate() + 7);

    const calculateTimeLeft = () => {
      const difference = offerEndDate - new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const seasonalOffers = {
    summer: [
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
    ],
    winter: [
      {
        id: 3,
        title: "Sundarbans Wildlife Expedition",
        location: "Khulna, Bangladesh",
        description:
          "Explore the world's largest mangrove forest and spot the majestic Royal Bengal Tiger.",
        originalPrice: 899,
        discountPrice: 699,
        discountPercent: 22,
        duration: "5 Days / 4 Nights",
        rating: 4.7,
        image: "https://i.ibb.co/939b6wk6/13-1.jpg",
      },
    ],
    spring: [
      {
        id: 4,
        title: "Sylhet Tea Garden & Ratargul Swamp Forest",
        location: "Sylhet, Bangladesh",
        description:
          "Wander through lush tea gardens and cruise the emerald waters of Ratargul Swamp Forest.",
        originalPrice: 749,
        discountPrice: 599,
        discountPercent: 20,
        duration: "4 Days / 3 Nights",
        rating: 4.9,
        image: "https://i.ibb.co/F4P5nKYM/11-1.jpg",
      },
    ],
    autumn: [
      {
        id: 5,
        title: "Rangamati Lake Cruise & Tribal Culture Tour",
        location: "Rangamati, Bangladesh",
        description:
          "Enjoy a serene boat ride on Kaptai Lake and immerse yourself in local tribal traditions.",
        originalPrice: 799,
        discountPrice: 649,
        discountPercent: 19,
        duration: "3 Days / 2 Nights",
        rating: 4.6,
        image: "https://i.ibb.co/83Ww5VY/5-1-1.jpg",
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-cyan-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          Special Offers & Seasonal Deals
        </motion.h2>
        <p className="text-base-content max-w-2xl mx-auto mb-6">
          Limited-time offers on our most popular destinations. Book now to
          secure these exclusive deals!
        </p>

        {/* Countdown Timer */}
        <motion.div
          className="bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-xl p-6 max-w-2xl mx-auto mb-8 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}>
          <div className="flex items-center justify-center mb-4">
            <FaClock className="text-white text-2xl mr-2" />
            <h3 className="text-xl font-bold text-white">Deals Ending In:</h3>
          </div>

          <div className="flex justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 w-20 text-center">
              <div className="text-2xl font-bold text-white">
                {timeLeft.days}
              </div>
              <div className="text-white text-sm">Days</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 w-20 text-center">
              <div className="text-2xl font-bold text-white">
                {timeLeft.hours}
              </div>
              <div className="text-white text-sm">Hours</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 w-20 text-center">
              <div className="text-2xl font-bold text-white">
                {timeLeft.minutes}
              </div>
              <div className="text-white text-sm">Minutes</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 w-20 text-center">
              <div className="text-2xl font-bold text-white">
                {timeLeft.seconds}
              </div>
              <div className="text-white text-sm">Seconds</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Season Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {["summer", "autumn", "winter", "spring"].map((season) => (
          <motion.button
            key={season}
            className={`px-5 py-2.5 rounded-full text-sm font-medium capitalize transition-all ${
              activeTab === season
                ? "bg-cyan-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-cyan-100"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab(season)}>
            {season} Deals
          </motion.button>
        ))}
      </div>

      {/* Seasonal Offers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {seasonalOffers[activeTab].map((offer) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 relative">
            {/* Discount Ribbon */}
            <div className="absolute top-4 right-4 bg-cyan-600 text-white py-2 px-4 rounded-l-full rounded-r-full z-10 flex items-center shadow-md">
              {" "}
              {offer.discountPercent || 0}
              <FaPercent className="mr-1" />
              <span className="font-bold">OFF</span>
            </div>

            {/* Image Placeholder */}
            <div>
              <div
                className="h-48 flex items-center justify-center text-cyan-800 font-bold bg-gradient-to-r from-cyan-500 to-cyan-300 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${offer.image})`,
                }}></div>
            </div>

            <div className="p-6 bg-base-100">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-base-content">
                    {offer.title}
                  </h3>
                  <div className="flex items-center mt-1 text-base-content">
                    <FaMapMarkerAlt className="mr-2 text-cyan-500" />
                    <span>{offer.location}</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm text-base-content line-through">
                    {offer.originalPrice || offer.price}
                  </div>
                  <div className="text-2xl font-bold text-cyan-600">
                    {offer.discountPrice || offer.price}
                  </div>
                  <div className="text-sm text-base-content">per person</div>
                </div>
              </div>

              <p className="text-base-content mb-4">{offer.description}</p>

              <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                <div className="flex items-center text-base-content">
                  <FaCalendarAlt className="mr-2 text-cyan-500" />
                  <span>{offer.duration}</span>
                </div>

                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-white border border-cyan-600 text-cyan-600 rounded-lg hover:bg-cyan-50 transition-colors">
                    Details
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
                    Book Now
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Special Offer Banner */}
      <motion.div
        className="mt-12 bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-2xl p-8 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')] opacity-10"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Family Vacation Special!
            </h3>
            <p className="max-w-xl">
              Book a family package and get{" "}
              <span className="font-bold">1 child free</span> + complimentary
              airport transfers. Limited time offer for the next 48 hours only!
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-cyan-600 font-bold rounded-full shadow-lg hover:bg-cyan-50 transition-colors">
            View Family Packages
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default SeasonalDeals;
