import { motion } from 'framer-motion';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 p-4 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: Math.floor(Math.random() * 20 + 5) + 'px',
            height: Math.floor(Math.random() * 20 + 5) + 'px',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            x: [0, Math.random() * 100 - 50],
            scale: [1, 1.5, 0.5],
            opacity: [0.2, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Main Card */}
      <motion.div 
        className="max-w-lg w-full bg-gradient-to-br from-slate-800/70 to-blue-900/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/10 relative z-10"
        initial={{ y: 50, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8, type: "spring", bounce: 0.4 }}
      >
        {/* Cosmic Portal Animation */}
        <div className="relative h-64 bg-gradient-to-b from-indigo-900/50 to-slate-900 flex justify-center items-center overflow-hidden">
          <motion.div
            className="absolute w-64 h-64 rounded-full border-4 border-cyan-400/30"
            animate={{
              scale: [1, 1.5, 2],
              opacity: [0.3, 0.1, 0],
              rotate: 360
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
          
          <motion.div
            className="absolute w-48 h-48 rounded-full border-4 border-purple-400/30"
            animate={{
              scale: [1, 1.8, 2.5],
              opacity: [0.4, 0.2, 0],
              rotate: -360
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
          
          <motion.div
            className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-[0_0_60px_-10px_rgba(56,189,248,0.5)]"
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1]
            }}
            transition={{
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, yoyo: true }
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-white text-5xl font-bold"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                404
              </motion.div>
            </div>
          </motion.div>
          
          {/* Floating Debris */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 rounded-full bg-white/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                rotate: 360
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Content */}
        <motion.div 
          className="p-8 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-white mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Cosmic Navigation Error
          </motion.h2>
          
          <motion.p 
            className="text-slate-300 mb-8 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            The coordinates you entered don't match any known destination in our universe.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <Link 
              to="/" 
              className="inline-block relative group"
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-300"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative px-8 py-3.5 bg-gradient-to-r from-cyan-700 to-blue-700 rounded-lg font-bold text-white text-lg shadow-lg transition-all duration-300 group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:scale-105">
                Return to Home Base
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Shooting Stars */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 left-0 w-1.5 h-1.5 bg-white rounded-full"
          style={{
            left: `${Math.random() * 30}%`,
            top: `${Math.random() * 30}%`,
          }}
          animate={{
            x: [0, window.innerWidth],
            y: [0, window.innerHeight * 0.5],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 3 + 1,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Constellation Effect */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: Math.random() > 0.9 ? '4px' : '2px',
              height: Math.random() > 0.9 ? '4px' : '2px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
      </div>

      <motion.p 
        className="text-slate-500 mt-8 text-center max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2 }}
      >
        "Not all those who wander are lost, but it seems you've discovered uncharted territory"
      </motion.p>
    </motion.div>
  );
};

export default NotFound;