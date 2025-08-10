import axios from 'axios';
import React, { useState } from 'react';
import { FaYinYang, FaLeaf, FaWater, FaMountain, FaFacebookF, FaTwitter, FaInstagram, FaTripadvisor, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Footer = () => {
   const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
 try {
  const res = await axios.post("http://localhost:3000/subscribe", { email });

  Swal.fire({
    icon: "success",
    title: "Subscribed!",
    text: res.data.message,
    confirmButtonColor: "#06b6d4", 
            timer: 2000,
        showConfirmButton: false,
  });

  setEmail("");
} catch (err) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: err.response?.data?.message || "Something went wrong",
    confirmButtonColor: "#ef4444", 
  });
}
  }
  return (
    <footer className="bg-base-100 pt-20 pb-10 border-t border-cyan-300 p-3">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Zen Tour Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-cyan-500 to-teal-500 w-12 h-12 rounded-full flex items-center justify-center mr-3">
                ✈️
              </div>
              <h3 className="text-2xl font-light text-base-content">
                Zen Tour <span className="font-medium">Bangladesh</span>
              </h3>
            </div>
            <p className="text-base-content mb-6 leading-relaxed">
              Journey inward through the natural wonders of Bangladesh. We curate mindful travel experiences that reconnect you with nature and self.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="bg-base-100 w-10 h-10 rounded-full flex items-center justify-center text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all shadow-sm">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" className="bg-base-100 w-10 h-10 rounded-full flex items-center justify-center text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all shadow-sm">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" className="bg-base-100 w-10 h-10 rounded-full flex items-center justify-center text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all shadow-sm">
                <FaTwitter />
              </a>
              <a href="https://tripadvisor.com" className="bg-base-100 w-10 h-10 rounded-full flex items-center justify-center text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all shadow-sm">
                <FaTripadvisor />
              </a>
            </div>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-medium text-base-content mb-6 pb-2 border-b border-cyan-100 flex items-center">
              <FaLeaf className="text-cyan-500 mr-2" />
              Explore Journeys
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="packages/2" className="text-base-content hover:text-cyan-500 transition-colors flex items-start">
                  <span className="text-cyan-400 mr-2">›</span>
                  <span>Sundarbans Meditation Retreat</span>
                </a>
              </li>
              <li>
                <a href="/packages/1" className="text-base-content hover:text-cyan-500 transition-colors flex items-start">
                  <span className="text-cyan-400 mr-2">›</span>
                  <span>Cox's Bazar Coastal Escape</span>
                </a>
              </li>
              <li>
                <a href="packages/5" className="text-base-content hover:text-cyan-500 transition-colors flex items-start">
                  <span className="text-cyan-400 mr-2">›</span>
                  <span>Rangamati Lake Tour</span>
                </a>
              </li>
              <li>
                <a href="packages/10" className="text-base-content hover:text-cyan-500 transition-colors flex items-start">
                  <span className="text-cyan-400 mr-2">›</span>
                  <span>Comilla Heritage Explorer</span>
                </a>
              </li>
              <li>
                <a href="packages/6" className="text-base-content hover:text-cyan-500 transition-colors flex items-start">
                  <span className="text-cyan-400 mr-2">›</span>
                  <span>Cultural Harmony Tour</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-medium text-base-content mb-6 pb-2 border-b border-cyan-100 flex items-center">
              <FaWater className="text-cyan-500 mr-2" />
              Connect With Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-base-100 p-2 rounded-lg mr-3">
                  <FaMapMarkerAlt className="text-cyan-500" />
                </div>
                <div>
                  <h5 className="font-medium text-base-content">Dhaka Office</h5>
                  <p className="text-base-content">House 12, Road 7, Banani, Dhaka 1213</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-base-100 p-2 rounded-lg mr-3">
                  <FaPhone className="text-cyan-500" />
                </div>
                <div>
                  <h5 className="font-medium text-base-content">Call Us</h5>
                  <p className="text-base-content">+880 1711 123456</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-base-100 p-2 rounded-lg mr-3">
                  <FaEnvelope className="text-cyan-500" />
                </div>
                <div>
                  <h5 className="font-medium text-base-content">Email</h5>
                  <p className="text-base-content">peace@zentourbangladesh.com</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Newsletter Column */}
          <div>
            <h4 className="text-lg font-medium text-base-content mb-6 pb-2 border-b border-cyan-100 flex items-center">
              <FaMountain className="text-amber-500 mr-2" />
              Mindful Updates
            </h4>
            <p className="text-base-content mb-4">
              Subscribe to receive peaceful inspirations and special offers for your next Zen journey.
            </p>
            <form className="mb-4" onSubmit={handleSubmit}>
              <div className="flex">
                <input 
                  type="email" 
                  value={email}
                  placeholder="Your email address" 
                   onChange={(e) => setEmail(e.target.value)}
                  className="pl-2 py-3 rounded-l-lg border border-r-0 border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent"
                />
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-3 rounded-r-lg hover:from-cyan-600 hover:to-teal-600 transition-all"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="bg-base-100 rounded-xl p-4 border border-cyan-300">
              <p className="text-cyan-600 italic flex">
                <span className="text-2xl mr-2">“</span>
                <span>In Bangladesh, the rivers teach us to flow, the forests teach resilience, and the people teach warmth.</span>
              </p>
            </div>
          </div>
        </div>
       
        
        {/* Bottom Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-cyan-100">
          <div className="text-base-content text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Zen Tour Bangladesh. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="/PrivacyPolicy" className="text-base-content hover:text-cyan-500 text-sm">Privacy Policy</a>
            <a href="/terms" className="text-base-content hover:text-cyan-500 text-sm">Terms of Service</a>
            <a className="text-base-content hover:text-cyan-500 text-sm">Sustainability</a>
          </div>
        </div>
      </div>
     
    </footer>
  );
};

export default Footer;