import React, {useState} from 'react';
import { Truck, MessageSquare } from 'lucide-react';
import jmpTruckLP from '../assets/jmpTrucksIG_1.png';
import logoLP from '../assets/logoLP.svg';


const Button = ({ icon, children}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`flex items-center justify-center px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
        isHovered ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon}
      <span className="ml-2">{children}</span>
    </button>
  );
};



function LandingPage() {
  return (
    <div className="relative h-screen bg-gray-100 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
            backgroundImage: `url(${jmpTruckLP})`,
        }}
      />
      
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      
      <div className="relative z-10 flex flex-col h-full">
  
        <div className="flex justify-center mt-8">
            <img src={logoLP} alt="landPageLogo" className="w-32 sm:w-32 md:w-48 lg:w-64 h-auto"/>
        </div>
        
        <div className="flex-grow flex items-center justify-center">
          <h1 className="text-white text-5xl sm:text-6xl md:text-6xl font-bold text-center leading-tight">
            CEPAT. TEPAT. TERPERCAYA.
          </h1>
        </div>
        
        <div className="flex justify-center space-x-4 mb-20">
          <Button icon={<Truck className="w-4 h-4" />} >
            Ship Now
          </Button>
          <Button icon={<MessageSquare className="w-4 h-4" />}>
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;