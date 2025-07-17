import { FaMap, FaUmbrellaBeach, FaTree, FaMountain, FaWater } from 'react-icons/fa';

const BdInfo = () => {
  const features = [
    {
      icon: <FaMap className="text-amber-500" size={24} />,
      title: "Geography",
      description: "Riverine delta country in South Asia with 700+ rivers, world's largest mangrove forest (Sundarbans), and longest natural sea beach (Cox's Bazar)"
    },
    {
      icon: <FaUmbrellaBeach className="text-cyan-500" size={24} />,
      title: "Coastal Beauty",
      description: "120km uninterrupted beach at Cox's Bazar, coral islands of St. Martin's, and serene Kuakata beach with sunrise/sunset views"
    },
    {
      icon: <FaTree className="text-emerald-500" size={24} />,
      title: "Biodiversity",
      description: "Home to Royal Bengal Tigers, Irrawaddy dolphins, 600+ bird species, and lush tea gardens in Sylhet region"
    },
    {
      icon: <FaMountain className="text-violet-500" size={24} />,
      title: "Cultural Heritage",
      description: "Ancient Buddhist ruins at Paharpur, Mughal architecture, vibrant tribal cultures in Chittagong Hill Tracts"
    }
  ];

  const travelTips = [
    { id: 1, tip: "Best season: November to February (cool, dry weather)" },
    { id: 2, tip: "Must-try: Hilsa fish curry, pitha rice cakes, street chaat" },
    { id: 3, tip: "Unique experience: Boat stay in Sundarbans mangrove forest" },
    { id: 4, tip: "Cultural gem: Baul folk music performances" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full mb-4">
            <FaWater className="mr-2" />
            <span className="font-medium">Riverine Paradise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-slate-800 mb-4">
            Discover Bangladesh
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Where rivers meet the sea, cultures converge, and nature thrives in perfect harmony
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Facts */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100">
              <h3 className="text-2xl font-serif font-medium text-slate-800 mb-6 pb-2 border-b border-slate-100">
                Land of Rivers & Resilience
              </h3>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <span className="text-amber-700 font-bold">165M+</span>
                  </div>
                  <div>
                    <p className="text-slate-600 text-sm">Population</p>
                    <p className="text-slate-800">8th largest globally</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                    <span className="text-emerald-700 font-bold">700+</span>
                  </div>
                  <div>
                    <p className="text-slate-600 text-sm">Rivers</p>
                    <p className="text-slate-800">Riverine network</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyan-100 p-3 rounded-lg mr-4">
                    <span className="text-cyan-700 font-bold">1971</span>
                  </div>
                  <div>
                    <p className="text-slate-600 text-sm">Independence</p>
                    <p className="text-slate-800">Liberation year</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-violet-100 p-3 rounded-lg mr-4">
                    <span className="text-violet-700 font-bold">6 Seasons</span>
                  </div>
                  <div>
                    <p className="text-slate-600 text-sm">Climate</p>
                    <p className="text-slate-800">Unique seasonal cycle</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-medium text-slate-800 mb-4 flex items-center">
                  <FaTree className="text-emerald-500 mr-2" />
                  Natural Wonders
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    <span className="text-slate-700">Sundarbans Mangrove Forest (UNESCO World Heritage)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    <span className="text-slate-700">Cox's Bazar - World's longest natural sea beach (120km)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-500 mr-2">•</span>
                    <span className="text-slate-700">Srimangal - Tea capital with lush plantations</span>
                  </li>
                </ul>
              </div>
              
              <button className="btn w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 hover:from-emerald-600 hover:to-teal-600 transition-all">
                Explore Bangladesh Itineraries
              </button>
            </div>
          </div>
          
          {/* Right Column - Features */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start">
                    <div className="p-3 bg-slate-100 rounded-lg mr-4">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-slate-800 mb-2">{feature.title}</h3>
                      <p className="text-slate-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Travel Tips */}
            <div className="mt-8 bg-gradient-to-r from-violet-50 to-indigo-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="text-xl font-serif font-medium text-slate-800 mb-4">
                Zen Travel Tips
              </h3>
              <ul className="space-y-3">
                {travelTips.map(tip => (
                  <li key={tip.id} className="flex items-start">
                    <span className="bg-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 text-violet-500 font-bold text-sm">✓</span>
                    <span className="text-slate-700">{tip.tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Cultural Highlight */}
        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 text-center border border-amber-100">
          <div className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-4">
            Cultural Essence
          </div>
          <h3 className="text-2xl font-serif text-slate-800 mb-4">
            "Bengali hospitality is a river that never stops flowing"
          </h3>
          <p className="text-slate-700">
            Experience tea ceremonies in Sylhet, boat festivals in Barisal, tribal weaving in Hill Tracts, 
            and the spiritual harmony of numerous mosques, temples, and churches coexisting peacefully
          </p>
        </div>
      </div>
    </section>
  );
};

export default BdInfo;