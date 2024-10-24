import React from "react";
import { motion } from "framer-motion";
import value1 from "../assets/value1.svg";
import value2 from "../assets/value2.svg";
import value3 from "../assets/value3.svg";
import value4 from "../assets/value4.svg";

const values = [
  {
    title: "Armada Tangguh",
    description:
      "Kendaraan baru dengan performa maksimal, didukung perawatan rutin dan suku cadang berkualitas.",
    image: value1,
  },
  {
    title: "Tracking GPS",
    description:
      "Pantau posisi kendaraan secara real-time dan kontrol mesin dari jarak jauh jika diperlukan.",
    image: value2,
  },
  {
    title: "Layanan 24/7",
    description:
      "Kami siap melayani Anda kapan saja, memastikan pengiriman tepat waktu.",
    image: value3,
  },
  {
    title: "Proses Cepat",
    description:
      "Efisiensi dalam administrasi untuk mempercepat proses pengiriman barang Anda.",
    image: value4,
  },
];

function OurValues() {
  return (
    <div className="py-16 min-h-screen">
      <div className="container mx-auto px-12 h-full text-white">
        <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
        <div className="flex justify-evenly gap-16 h-[80%]">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center h-full w-1/4 value-card"
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              {/* pict */}
              <div className="h-[40%] mb-2 w-full">
                <img
                  src={value.image}
                  alt={value.title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* desc */}
              <div className="flex justify-center h-[40%]">
                <div
                  className="z-0 py-10 px-4 text-center w-full h-full flex flex-col justify-start"
                  style={{
                    background: "linear-gradient(to bottom, #212427, #8D806F, #AFA69A)",
                  }}
                >
                  <h3 className="text-xl font-semibold mb-6">{value.title}</h3>
                  <p className="text-sm">{value.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurValues;
