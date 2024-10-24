import React from "react";

function Footer(){
    <footer className="bg-[#3c3c3c] text-white py-6">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h2 className="text-xl font-bold">JMD Shipping</h2>
            <p className="text-sm">Contact: info@jmdshipping.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
          <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
              <li><Link href="#" className="hover:underline">Home</Link></li>
              <li><Link href="#" className="hover:underline">Services</Link></li>
              <li><Link href="#" className="hover:underline">About Us</Link></li>
              <li><Link href="#" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </footer>
}

export default Footer;