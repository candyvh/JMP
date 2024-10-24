import React from "react";

const Testing = () => {
  return (
    <div className="flex space-x-4 justify-center mt-10 h-screen">
      {/* Rectangle shape with downward triangle */}
      {[...Array(4)].map((_, index) => (
        <div key={index} className="relative">
          {/* Rectangle */}
          <div className="w-48 h-24 bg-white"></div>
          {/* Triangle */}
          <div className="bg-white w-0 h-0 border-l-[96px] border-r-[96px] border-t-[48px] border-t-transparent border-l-transparent border-r-transparent absolute left-0 right-0 mx-auto"></div>
        </div>
      ))}
    </div>
  );
};

export default Testing;
