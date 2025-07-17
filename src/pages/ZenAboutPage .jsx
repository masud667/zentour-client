import React from 'react';
import { FaYinYang, FaLeaf, FaWater, FaMountain, FaPeace, FaUsers, FaGlobeAsia, FaHandHoldingHeart, FaSeedling, FaStar } from 'react-icons/fa';
import Navbar from '../Components/Navber/Navber';

const ZenAboutPage = () => {
  return (
<div>
    <Navbar></Navbar>
        <div className="bg-base-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-base-100">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl   font-light text-base-content mb-6">
                Finding Peace in <br />
                <span className="font-medium">Bangladesh's Soul</span>
              </h1>
              <p className="text-xl text-base-content max-w-xl mb-8">
                Zen Tour Bangladesh creates mindful journeys that connect travelers with the natural beauty and spiritual heritage of Bangladesh.
              </p>
              <div className="flex space-x-4">
                <button className="btn btn-lg bg-base-100 text-cyan-600 hover:bg-slate-100 border-0 rounded-full px-8">
                  Our Journeys
                </button>
                <button className="btn btn-lg btn-outline text-base-content hover:bg-base-100 hover:text-cyan-600 border-white rounded-full px-8">
                  Meet Our Guides
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="bg-base-100 p-6 rounded-3xl shadow-xl w-full max-w-md">
                  <div className="aspect-w-16 aspect-h-9 bg-base-100  rounded-xl overflow-hidden mb-6">
                 
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl   font-medium mb-2">"In stillness, we find the world"</h3>
                    <p className="text-base-content ">
                      Our philosophy centers on mindful travel that respects nature and local communities.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-amber-400 to-orange-500 w-24 h-24 rounded-full flex items-center justify-center text-base-content">
                  <FaPeace className="text-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-4/5 lg:w-1/2">
              <div className="bg-base-100 rounded-3xl p-8 border border-cyan-300">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl h-48"></div>
                  <div className="bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl h-48 mt-8"></div>
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl h-48"></div>
                  <div className="bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl h-48 mt-8"></div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="inline-flex items-center bg-cyan-100       text-cyan-200 px-4 py-1 rounded-full mb-4">
                <FaLeaf className="mr-2" />
                <span>Our Roots</span>
              </div>
              <h2 className="text-3xl md:text-4xl   font-light mb-6">
                The Journey Began in the <span className="font-medium">Sundarbans</span>
              </h2>
              <p className="text-lg text-slate-600  text-slate-400 mb-6">
                Founded in 2018 by meditation teacher Anika Rahman and eco-tourism expert Rajiv Chowdhury, Zen Tour Bangladesh started with a simple mission: to create travel experiences that nourish the soul while preserving nature.
              </p>
              <p className="text-lg text-slate-600  text-slate-400 mb-8">
                What began as small group meditation retreats in the Sundarbans mangrove forest has grown into a movement of mindful travel across Bangladesh's most beautiful landscapes.
              </p>
              <div className="flex items-center">
                <div className="avatar-group -space-x-6 mr-6">
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-full rounded-full"></div>
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <div className="bg-gradient-to-r from-cyan-500 to-teal-500 w-full h-full rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Anika & Rajiv</h4>
                  <p className="text-slate-500  text-slate-500">Founders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-base-100 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-base-100       text-cyan-200 px-4 py-1 rounded-full mb-4">
              <FaWater className="mr-2" />
              <span>Our Principles</span>
            </div>
            <h2 className="text-3xl md:text-4xl   font-light mb-6">
              The <span className="font-medium">Zen Tour</span> Way
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-600  text-slate-400">
              Our approach to travel is guided by timeless principles that honor both nature and humanity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <FaSeedling className="text-cyan-500" />, title: "Nature First", description: "We practice minimal impact tourism and contribute to conservation efforts" },
              { icon: <FaUsers className="text-cyan-500" />, title: "Community Connection", description: "Our journeys support local communities and preserve cultural heritage" },
              { icon: <FaHandHoldingHeart className="text-amber-500" />, title: "Mindful Presence", description: "We cultivate awareness and appreciation of each moment" },
              { icon: <FaGlobeAsia className="text-teal-500" />, title: "Sustainable Journeys", description: "Carbon-neutral tours with eco-friendly accommodations" },
              { icon: <FaPeace className="text-violet-500" />, title: "Inner Harmony", description: "Creating space for reflection and personal growth" },
              { icon: <FaYinYang className="text-blue-500" />, title: "Balance", description: "We find harmony between adventure and stillness" },
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-base-100 rounded-2xl p-6 border border-cyan-300 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-300  flex items-center justify-center mb-6">
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                <p className="text-cyan-600  text-slate-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-cyan-100       text-cyan-300 px-4 py-1 rounded-full mb-4">
              <FaUsers className="mr-2" />
              <span>Our Guides</span>
            </div>
            <h2 className="text-3xl md:text-4xl   font-light mb-6">
              Meet the <span className="font-medium">Zen Keepers</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-600  text-slate-400">
              Our guides are meditation practitioners, naturalists, and cultural ambassadors who bring each journey to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Anika Rahman", role: "Meditation Guide", expertise: "Vipassana & Mindfulness" },
              { name: "Rajiv Chowdhury", role: "Eco-Tourism Expert", expertise: "Sundarbans Conservation" },
              { name: "Fatima Begum", role: "Cultural Ambassador", role: "Cultural Ambassador", expertise: "Tribal Traditions" },
              { name: "Arif Khan", role: "Nature Specialist", expertise: "Wildlife & Botany" },
            ].map((member, index) => (
              <div 
                key={index}slate-800  
                className="bg-base-100 rounded-2xl overflow-hidden border border-cyan-300  "
              >
                <div className="h-48 bg-gradient-to-r from-teal-400 to-cyan-500 relative">
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-fullborder-4  border-slate-800">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 w-full h-full rounded-full"></div>
                  </div>
                </div>
                <div className="pt-12 pb-8 px-6 text-center">
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <p className="  text-cyan-400 mb-2">{member.role}</p>
                  <p className="text-slate-600 text-sm">{member.expertise}</p>
                  <div className="mt-4 flex justify-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-base-100 text-base-content">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center  bg-slate-800 text-white px-4 py-1 rounded-full mb-6">
            <FaYinYang className="mr-2" />
            <span>Begin Your Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl   font-light text-base-content mb-6">
            Find Your Peace in <span className="font-medium">Bangladesh's Heart</span>
          </h2>
          <p className="text-xl text-cyan-300 max-w-2xl mx-auto mb-10">
            Join us for a transformative journey that nourishes your soul and connects you with nature
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn btn-lg bg-base-100 text-cyan-300 hover:bg-slate-100 border-cyan-300 rounded-full px-8">
              Explore Journeys
            </button>
            <button className="btn btn-lg btn-outline text-base-content hover:bg-base-100 hover:text-cyan-600 border-cyan rounded-full px-8">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
</div>
  );
};

export default ZenAboutPage;