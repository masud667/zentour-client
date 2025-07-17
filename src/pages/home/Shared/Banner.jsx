import React from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { 
  FaUmbrellaBeach, 
  FaMountain, 
  FaLandmark, 
  FaShip,
  FaRoute,
  FaSuitcase
} from 'react-icons/fa';
import { GiPalmTree, GiMountainCave } from 'react-icons/gi';

const Banner = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/packages');
  };

  const packageTypes = [
    { name: 'Tropical Escapes', icon: <FaUmbrellaBeach />, color: 'text-amber-300' },
    { name: 'Mountain Expeditions', icon: <FaMountain  r/>, color: 'text-emerald-300' },
    { name: 'Cultural Journeys', icon: <FaLandmark />, color: 'text-purple-300' },
    { name: 'Luxury Voyages', icon: <FaShip />, color: 'text-sky-300' },
  ];

  return (
    <div className="relative overflow-hidden shadow-2xl  border-white/20">
      {/* Gradient Background */}
      <div className="absolute inset-0 text-base-100"></div>
      
      {/* Asymmetric Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Mountain Silhouette */}
        <div className="absolute bottom-0 left-0 w-full">
          <div className="h-24 bg-gradient-to-t from-teal-900/40 to-transparent"></div>
        </div>
        
        {/* Floating Islands */}
        <motion.div 
          className="absolute top-1/4 left-3/4 w-24 h-24 rounded-full bg-cyan-400/20"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute top-1/3 left-2/3 w-16 h-16 rounded-full bg-teal-400/30"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        
        {/* Travel Icons */}
        <motion.div
          className="absolute top-1/4 right-1/4 text-white/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <FaRoute className="w-32 h-32" />
        </motion.div>
        
        <GiPalmTree className="absolute bottom-20 left-20 text-cyan-300/20 w-24 h-24 rotate-12" />
        <GiMountainCave className="absolute bottom-16 right-40 text-teal-300/20 w-28 h-28" />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 px-6 py-12 md:px-12 md:py-20 lg:px-16 lg:py-24 flex flex-col lg:flex-row">
        {/* Text Content */}
        <div className="lg:w-7/12 mb-10 lg:mb-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          >
            Embark on Your <span className="text-cyan-300">Next Great</span> Adventure
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl mb-8 max-w-xl"
          >
            Discover handcrafted journeys to the world's most breathtaking destinations. 
            Where will your wanderlust take you next?
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.button 
              whileHover={{ scale: 1.05}}
              whileTap={{ scale: 0.98 }}
              onClick={handleExploreClick}
              className="btn btn-lg border-1 border-base shadow-lg
                        rounded-full px-8 font-bold text-lg
                        flex items-center group transition-all"
            >
              <FaSuitcase className="mr-3 text-amber-300" />
              <span>Explore All Packages</span>
              <motion.span
                className="ml-3"
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
        
        {/* Package Cards - Positioned asymmetrically */}
        <div className="lg:w-5/12 relative">
          <div className="grid grid-cols-2 gap-5 relative z-10">
            {packageTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (index * 0.15), duration: 0.6 }}
                whileHover={{ y: -10 }}
                className={`bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm 
                          rounded-2xl p-5 border border-white/20 cursor-pointer shadow-lg
                          transition-all hover:shadow-xl`}
              >
                <div className={`text-3xl mb-3 ${type.color}`}>{type.icon}</div>
                <div className="font-bold ">{type.name}</div>
                <div className="mt-2 text-cyan-600 text-sm">From $499</div>
              </motion.div>
            ))}
          </div>
          
          {/* Floating suitcase */}
          <motion.div
            className="absolute -bottom-10 -right-10 text-cyan-300/30"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaSuitcase className="w-40 h-40 rotate-12" />
          </motion.div>
        </div>
      </div>
      
      {/* Animated Elements */}
      <motion.div 
        className="absolute top-10 left-10 w-6 h-6 rounded-full bg-cyan-400/40"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-1/4 w-8 h-8 rounded-full bg-teal-400/40"
        animate={{ 
          scale: [1, 1.8, 1],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
    </div>
  );
};

export default Banner;