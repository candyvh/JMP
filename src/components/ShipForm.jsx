import React from 'react'

function ShipForm() {
  return (
    <div className="min-h-screen bg-[#e0d8c5] flex flex-col items-center justify-center relative">
      <div className="absolute top-4 right-4 flex space-x-4 bg-slate-500">
      </div>
      
      <h1 className="text-5xl font-bold text-white mb-8">SHIP NOW!</h1>
      
      <div className="w-full bg-[#3c3c3c] py-4 mb-8 flex items-center justify-center">
        <span className="text-white text-2xl font-bold">FRAGILE</span>
        <span className="text-red-600 text-2xl font-bold mx-2">JMD</span>
        <span className="text-white text-2xl font-bold">FRAGILE</span>
      </div>
      
      <form className="bg-[#f0e9d8] p-8 rounded-lg shadow-lg w-96">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Sender Name"
            className="w-full p-2 rounded bg-[#e0d8c5] border border-[#c0b8a5]"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Phone/WhatsApp Number"
            className="w-full p-2 rounded bg-[#e0d8c5] border border-[#c0b8a5]"
          />
        </div>
        <div className="mb-4">
          <select className="w-full p-2 rounded bg-[#e0d8c5] border border-[#c0b8a5]">
            <option value="">Item Type</option>
          </select>
        </div>
        <div className="mb-4">
          <select className="w-full p-2 rounded bg-[#e0d8c5] border border-[#c0b8a5]">
            <option value="">Pick Up Location</option>
          </select>
        </div>
        <div className="mb-6">
          <select className="w-full p-2 rounded bg-[#e0d8c5] border border-[#c0b8a5]">
            <option value="">Destination</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-[#c0b8a5] text-[#3c3c3c] p-2 rounded font-bold hover:bg-[#a09885] transition-colors"
        >
          SHIP
        </button>
      </form>
    </div>
  )
}

export default ShipForm;