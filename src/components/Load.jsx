import React from "react";
import topSideBG from "../assets/topSideBG2.svg";
import loadImgs from "../assets/loadImgs.svg";

function Load() {
  return (
    <div>
      <div class="relative h-screen">
        <div class="absolute left-0 bottom-0 z-10 w-3/4 h-[90%] -ml-60">
          <div
            className="flex items-center justify-start pl-80 w-full h-full"
            style={{
              backgroundImage: `url(${topSideBG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex-col w-1/2 text-white">
              <h2 className="text-5xl font-bold mb-6">What We Ship</h2>
              <p>
                Saat ini, JMP fokus dalam memberikan layanan pada material
                industri. Kami berkomitmen untuk menyediakan solusi terbaik dan
                dapat berkompromi untuk memenuhi kebutuhan pelanggan. Dengan
                pengalaman yang kami miliki, kami siap membantu Anda dalam
                berbagai proyek terkait material industri.
              </p>
            </div>
          </div>
        </div>
        <div class="absolute right-0 top-[35%] z-0 w-3/4 h-1/2">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url(${loadImgs})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Load;
