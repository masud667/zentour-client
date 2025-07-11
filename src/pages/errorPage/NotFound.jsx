import { motion } from 'framer-motion';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-50 to-cyan-100 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Floating Island Animation */}
        <motion.div 
          className="relative h-48 bg-gradient-to-r from-teal-400 to-cyan-500 flex justify-center"
          animate={{ 
            y: [0, -15, 0],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="absolute -bottom-6">
            <motion.svg 
              width="300" 
              height="80" 
              viewBox="0 0 300 80"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ 
                duration: 1,
                delay: 0.3
              }}
            >
              <path 
                d="M0,40 Q75,10 150,40 T300,40 L300,80 L0,80 Z" 
                fill="#0d9488" 
              />
              <motion.path 
                d="M110,30 Q140,0 170,30 Z" 
                fill="#134e4a"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.svg>
          </div>
          
          {/* Floating Zen Symbol */}
          <motion.div
            className="absolute top-1/4"
            animate={{
              rotate: 360,
              y: [0, -20, 0],
            }}
            transition={{
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <div className="text-white text-6xl">☯</div>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div 
          className="p-8 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.h1 
            className="text-9xl font-bold text-cyan-600 mb-2"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            404
          </motion.h1>
          
          <motion.h2 
            className="text-2xl font-semibold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Journey Interrupted
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            The path you're seeking seems to be lost in the mist. Let's find your way back to tranquil travels.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Link 
              to="/" 
              className="btn btn-primary bg-cyan-600 hover:bg-cyan-700 border-0 text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Return to Zen
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating bubbles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-400/20"
          style={{
            width: Math.floor(Math.random() * 40 + 20) + 'px',
            height: Math.floor(Math.random() * 40 + 20) + 'px',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            x: [0, Math.random() * 50 - 25],
            opacity: [1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeOut"
          }}
        />
      ))}
    </motion.div>
  );
};

export default NotFound;