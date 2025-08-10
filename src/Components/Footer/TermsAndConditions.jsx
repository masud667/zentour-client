import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaCheck, FaBook, FaLock, FaUserShield, FaMoneyBillWave, FaCalendarTimes, FaGlobe, FaHeadset } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../Header';

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [accepted, setAccepted] = useState(false);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const sections = [
    {
      id: 'intro',
      title: 'Introduction',
      icon: <FaBook className="text-cyan-600" />,
      content: 'Welcome to ZenTour! These Terms and Conditions govern your use of our tour management services. By accessing or using our services, you agree to be bound by these terms.'
    },
    {
      id: 'bookings',
      title: 'Bookings & Reservations',
      icon: <FaCalendarTimes className="text-cyan-600" />,
      content: 'All tour bookings are subject to availability. A booking is confirmed only after we receive full payment or a non-refundable deposit as specified. Prices are subject to change without notice until a booking is confirmed.'
    },
    {
      id: 'payments',
      title: 'Payments & Pricing',
      icon: <FaMoneyBillWave className="text-cyan-600" />,
      content: 'We accept various payment methods including credit cards, bank transfers, and mobile payments. All prices are in USD unless otherwise specified. Prices include all applicable taxes unless stated otherwise. A 2.5% processing fee applies to all credit card transactions.'
    },
    {
      id: 'cancellations',
      title: 'Cancellations & Refunds',
      icon: <FaCalendarTimes className="text-cyan-600" />,
      content: 'Cancellations made 30+ days before departure: 90% refund. 15-29 days before departure: 50% refund. 8-14 days before departure: 25% refund. 7 days or less: no refund. Refunds will be processed within 15 business days.'
    },
    {
      id: 'responsibility',
      title: 'Traveler Responsibility',
      icon: <FaUserShield className="text-cyan-600" />,
      content: 'Travelers are responsible for obtaining necessary travel documents (passports, visas, etc.). We recommend purchasing comprehensive travel insurance. Travelers must comply with local laws and customs. ZenTour is not liable for personal injuries or property damage during tours.'
    },
    {
      id: 'privacy',
      title: 'Privacy & Data Security',
      icon: <FaLock className="text-cyan-600" />,
      content: 'We collect personal information necessary for tour arrangements. Payment details are encrypted and securely stored. We may share information with service providers involved in your tour. You may request access to or deletion of your personal data at any time.'
    },
    {
      id: 'liability',
      title: 'Limitation of Liability',
      icon: <FaGlobe className="text-cyan-600" />,
      content: 'ZenTour acts as an intermediary between travelers and service providers. We are not liable for acts of God, natural disasters, political unrest, or other force majeure events. Our maximum liability for any claim is limited to the tour price paid.'
    },
    {
      id: 'disputes',
      title: 'Dispute Resolution',
      icon: <FaHeadset className="text-cyan-600" />,
      content: 'Any disputes arising from these terms will be resolved through mediation in Dhaka, Bangladesh. If mediation fails, disputes will be settled in Bangladeshi courts. These terms are governed by Bangladeshi law.'
    }
  ];

  return (
    <div >
        <Header></Header>
    <div className="min-h-screen bg-base-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-100 mb-4">
            <FaBook className="text-cyan-600 text-2xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-base-content mb-2">Terms & Conditions</h1>
          <p className="text-base-1000 max-w-2xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="bg-base-100 rounded-2xl shadow-xl overflow-hidden">
          {/* Introduction Card */}
          <motion.div 
            className="p-6 md:p-8 bg-gradient-to-r from-cyan-500 to-cyan-700 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Welcome to ZenTour</h2>
            <p className="mb-4">
              These Terms and Conditions outline the rules and regulations for the use of ZenTour's tour management services. By accessing our services, you accept these terms in full.
            </p>
            <div className="flex items-center mt-6">
              <FaCheck className="mr-2 text-green-300" />
              <span>Please read these terms carefully before making a booking</span>
            </div>
          </motion.div>

          {/* Terms Sections */}
          <div className="divide-y divide-gray-200">
            {sections.map((section) => (
              <motion.div 
                key={section.id}
                className="p-6 md:p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <button
                  className="w-full flex justify-between items-center text-left"
                  onClick={() => toggleSection(section.id)}
                >
                  <div className="flex items-center">
                    <div className="mr-4">{section.icon}</div>
                    <h3 className="text-lg md:text-xl font-semibold text-base-content">{section.title}</h3>
                  </div>
                  <div className="text-cyan-600">
                    {activeSection === section.id ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {activeSection === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pl-10 text-base-content">
                        <p>{section.content}</p>
                        
                        {/* Additional details for specific sections */}
                        {section.id === 'bookings' && (
                          <div className="mt-4 bg-base-100 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">Booking Process:</h4>
                            <ol className="list-decimal pl-5 space-y-1">
                              <li>Select your tour package and dates</li>
                              <li>Complete the booking form with traveler details</li>
                              <li>Make payment through our secure gateway</li>
                              <li>Receive confirmation email with itinerary</li>
                            </ol>
                          </div>
                        )}
                        
                        {section.id === 'cancellations' && (
                          <div className="mt-4">
                            <h4 className="font-semibold mb-2">Refund Timeline:</h4>
                            <div className="bg-base-100 p-4 rounded-lg border border-cyan-100">
                              <div className="grid grid-cols-3 gap-4 text-sm">
                                <div className="font-medium">Days Before Departure</div>
                                <div className="font-medium">Refund Percentage</div>
                                <div className="font-medium">Processing Time</div>
                                
                                <div>30+ days</div>
                                <div>90%</div>
                                <div>7-10 business days</div>
                                
                                <div>15-29 days</div>
                                <div>50%</div>
                                <div>10-14 business days</div>
                                
                                <div>8-14 days</div>
                                <div>25%</div>
                                <div>14-21 business days</div>
                                
                                <div>0-7 days</div>
                                <div>No refund</div>
                                <div>N/A</div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Acceptance Section */}
          <motion.div 
            className="p-6 md:p-8 bg-base-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  className="mt-1 h-5 w-5 text-cyan-600 rounded focus:ring-cyan-500"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                />
                <label htmlFor="acceptTerms" className="ml-3 block text-base-content">
                  <span className="font-medium">I have read and agree to the Terms & Conditions</span>
                  <p className="text-base-content text-sm mt-1">
                    By checking this box, you acknowledge that you understand and accept all terms outlined above.
                  </p>
                </label>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  accepted 
                    ? 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-md' 
                    : 'bg-cyan-300 text-base-1000 cursor-not-allowed'
                }`}
                disabled={!accepted}
              >
                Continue to Booking
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div 
          className="mt-12 bg-base-100 rounded-2xl p-6 md:p-8 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-xl font-bold text-base-content mb-4">Need Assistance?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-cyan-50 p-4  rounded-lg">
              <h3 className="font-semibold flex items-center text-cyan-700">
                <FaHeadset className="mr-2" /> Customer Support
              </h3>
              <p className="mt-2 text-base-content">
                Our team is available 24/7 to answer your questions and assist with bookings.
              </p>
              <div className="mt-3">
                <div className="text-cyan-600 font-medium">Email: support@zentour.com</div>
                <div className="text-cyan-600 font-medium">Phone: +880 1234 567890</div>
              </div>
            </div>
            
            <div className="border border-cyan-50 p-4 rounded-lg">
              <h3 className="font-semibold flex items-center text-cyan-700">
                <FaLock className="mr-2" /> Legal Department
              </h3>
              <p className="mt-2 text-base-content">
                For legal inquiries or concerns about our terms and conditions.
              </p>
              <div className="mt-3">
                <div className="text-cyan-600 font-medium">Email: legal@zentour.com</div>
                <div className="text-cyan-600 font-medium">Phone: +880 1234 567891</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="mt-12 text-center text-base-content text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p>© {new Date().getFullYear()} ZenTour. All rights reserved.</p>
          <p className="mt-2">ZenTour is a registered trademark of ZenTour Bangladesh Ltd.</p>
          <p className="mt-2">Registered Office: 123 Travel Street, Dhaka 1212, Bangladesh</p>
        </motion.div>
      </div>
    </div>
</div>
  );
};

export default TermsAndConditions;