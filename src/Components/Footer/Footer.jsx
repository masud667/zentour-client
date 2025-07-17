import React from 'react';
import { FaYinYang, FaLeaf, FaWater, FaMountain, FaFacebookF, FaTwitter, FaInstagram, FaTripadvisor, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-50 to-cyan-50 pt-20 pb-10 border-t border-cyan-100 p-3">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Zen Tour Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-cyan-500 to-teal-500 w-12 h-12 rounded-full flex items-center justify-center mr-3">
                <FaYinYang className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-serif font-light text-slate-800">
                Zen Tour <span className="font-medium">Bangladesh</span>
              </h3>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Journey inward through the natural wonders of Bangladesh. We curate mindful travel experiences that reconnect you with nature and self.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all shadow-sm">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all shadow-sm">
                <FaInstagram />
              </a>
              <a href="#" className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all shadow-sm">
                <FaTwitter />
              </a>
              <a href="#" className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all shadow-sm">
                <FaTripadvisor />
              </a>
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-medium text-slate-800 mb-6 pb-2 border-b border-cyan-100 flex items-center">
              <FaLeaf className="text-cyan-500 mr-2" />
              Explore Journeys
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-600 hover:text-cyan-500 transition-colors flex items-start">
                  <span className="text-cyan-400 mr-2">›</span>
                  <span>Sundarbans Meditation Retreat</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-cyan-500 transition-colors flex items-start">
                  <span className="text-cyan-400 mr-2">›</span>
                  <span>Hill Tracts Yoga Experience</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-cyan-500 transition-colors flex items-start">
                  <span className="text-cyan-400 mr-2">›</span>
                  <span>River Delta Harmony Cruise</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-cyan-500 transition-colors flex items-start">
                  <span className="text-cyan-400 mr-2">›</span>
                  <span>Tea Garden Mindfulness</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-cyan-500 transition-colors flex items-start">
                  <span className="text-cyan-400 mr-2">›</span>
                  <span>Cultural Harmony Tour</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-medium text-slate-800 mb-6 pb-2 border-b border-cyan-100 flex items-center">
              <FaWater className="text-cyan-500 mr-2" />
              Connect With Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-cyan-100 p-2 rounded-lg mr-3">
                  <FaMapMarkerAlt className="text-cyan-500" />
                </div>
                <div>
                  <h5 className="font-medium text-slate-800">Dhaka Office</h5>
                  <p className="text-slate-600">House 12, Road 7, Banani, Dhaka 1213</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-cyan-100 p-2 rounded-lg mr-3">
                  <FaPhone className="text-cyan-500" />
                </div>
                <div>
                  <h5 className="font-medium text-slate-800">Call Us</h5>
                  <p className="text-slate-600">+880 1711 123456</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-cyan-100 p-2 rounded-lg mr-3">
                  <FaEnvelope className="text-cyan-500" />
                </div>
                <div>
                  <h5 className="font-medium text-slate-800">Email</h5>
                  <p className="text-slate-600">peace@zentourbangladesh.com</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Newsletter Column */}
          <div>
            <h4 className="text-lg font-medium text-slate-800 mb-6 pb-2 border-b border-cyan-100 flex items-center">
              <FaMountain className="text-amber-500 mr-2" />
              Mindful Updates
            </h4>
            <p className="text-slate-600 mb-4">
              Subscribe to receive peaceful inspirations and special offers for your next Zen journey.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className=" py-3 rounded-l-lg border border-r-0 border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent"
                />
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-3 rounded-r-lg hover:from-cyan-600 hover:to-teal-600 transition-all"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-100">
              <p className="text-slate-700 italic flex">
                <span className="text-2xl mr-2">“</span>
                <span>In Bangladesh, the rivers teach us to flow, the forests teach resilience, and the people teach warmth.</span>
              </p>
            </div>
          </div>
        </div>
       
        
        {/* Bottom Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-cyan-100">
          <div className="text-slate-600 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Zen Tour Bangladesh. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-600 hover:text-cyan-500 text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-600 hover:text-cyan-500 text-sm">Terms of Service</a>
            <a href="#" className="text-slate-600 hover:text-cyan-500 text-sm">Sustainability</a>
          </div>
        </div>
      </div>
     
    </footer>
  );
};

export default Footer;