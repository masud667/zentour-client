import { motion } from 'framer-motion';
import { FaFileAlt, FaUser, FaDatabase, FaServer, FaShieldAlt, FaEnvelope } from "react-icons/fa";
import Header from '../Header';

const PrivacyPolicy = () => {
 const sections = [
    {
      icon: <FaFileAlt className="w-6 h-6" />,
      title: "Introduction",
      content:
        "Welcome to Zentour's Privacy Policy. We respect your privacy and are committed to protecting your personal data. This policy explains how we handle your information when you use our travel planning services.",
    },
    {
      icon: <FaUser className="w-6 h-6" />,
      title: "Information We Collect",
      content:
        "We collect: Personal identification (name, email), travel preferences, booking details, device information, and usage data. We gather this when you register, make bookings, or interact with our services.",
    },
    {
      icon: <FaDatabase className="w-6 h-6" />,
      title: "How We Use Your Information",
      content:
        "Your data is used to: Provide and personalize services, process transactions, communicate with you, improve our platform, prevent fraud, and comply with legal obligations.",
    },
    {
      icon: <FaServer className="w-6 h-6" />,
      title: "Data Sharing",
      content:
        "We only share data with: Service providers (payment processors, hotels), business partners (airlines, tour operators), and when required by law. We never sell your personal information.",
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Security Measures",
      content:
        "We implement: Industry-standard encryption, regular security audits, access controls, and secure server infrastructure. While we strive to protect your data, no electronic transmission is 100% secure.",
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Contact Us",
      content:
        "For privacy concerns: Email privacy@zentour.com. You can also access, correct, or delete your data through your account settings or by contacting our support team.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div>
        <Header />
        <div className="min-h-screen bg-base-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <header className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-base-content mb-4"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Privacy Policy
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </header>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-base-100 rounded-2xl shadow-xl overflow-hidden"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`p-8 ${index !== sections.length - 1 ? 'border-b border-cyan-100' : ''}`}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-base-100 p-3 rounded-lg text-blue-600">
                  {section.icon}
                </div>
                <div className="ml-6">
                  <h2 className="text-xl font-semibold text-base-content mb-3">{section.title}</h2>
                  <p className="text-base-content leading-relaxed">{section.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.footer 
          className="mt-12 text-center text-base-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>© {new Date().getFullYear()} Zentour. All rights reserved.</p>
          <p className="mt-2 text-sm">
            This document is reviewed annually. Significant changes will be notified via email.
          </p>
        </motion.footer>
      </motion.div>
    </div>
    </div>
  );
};

export default PrivacyPolicy;