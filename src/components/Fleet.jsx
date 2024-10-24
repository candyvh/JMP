import React, { useEffect, useRef } from "react";
import botSideBG from "../assets/botSideBG.svg";
import fleetpic from "../assets/fleetPic.png";

function Fleet() {
  const loadDivsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      loadDivsRef.current.forEach((div) => {
        const rect = div.getBoundingClientRect();
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          div.classList.add("visible");
        } else {
          div.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const loadFleets = [
    {
      title: "Light Load",
      spec: "2.5m x 9m",
      capacity: "25.000 - 30.000 Kg",
    },
    {
      title: "Medium Load",
      spec: "2.5m x 12m",
      capacity: "50.000 - 60.000 Kg",
    },
    {
      title: "Heavy Load",
      spec: "2.5m x 12m",
      capacity: "50.000 - 80.000 Kg",
    },
  ];

  return (
    <div className="w-screen h-screen relative overflow-hidden flex items-start justify-start text-white">

      {/* Right */}
      <div className="absolute top-0 right-0 z-10 w-3/5 h-[90%] -mr-32">
        <div
          className="flex justify-center w-full h-full"
          style={{
            backgroundImage: `url(${botSideBG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="w-3/5 h-3/4"
            style={{
              backgroundImage: `url(${fleetpic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>

      {/* Left */}
      <div className="relative z-0 flex w-[55%] mt-10 ml-20">
        <div className="w-full p-8">
          <h1 className="text-4xl font-bold mb-8">Our Fleets</h1>
          <div className="space-y-6">
            {loadFleets.map((load, index) => (
              <div
                key={index}
                ref={(el) => (loadDivsRef.current[index] = el)}
                className="fleet-card p-4 bg-gradient-to-r from-[#AFA69A] via-[#8D806F] to-[#212427] w-[89%] opacity-0 transform translate-x-full transition-all duration-500 ease-in-out"
              >
                <h2 className="text-xl font-semibold mb-2">{load.title}</h2>
                <p className="text-sm">Spec: {load.spec}</p>
                <p className="text-sm">Daya Muat: {load.capacity}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fleet;
