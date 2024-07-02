"use client";
import Image from "next/image";
import NavBar from "./ui/NavBar";
import { Typewriter } from "react-simple-typewriter";
import GridBackground from "./ui/GridBackground";
const Hero = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="h-20">
        <NavBar />
      </div>
      <GridBackground>
        <section id="hero" className="h-full w-full flex justify-center">
          <div className="flex h-full flex-col sm:w-2/3 w-full justify-center items-center">
            <h1 className="sm:text-6xl text-4xl text-center">
              Transforming Ideas into Reality
            </h1>
            <p className="sm:text-6xl text-4xl py-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#1048a0] to-[#fc9d3b] min-h-[80px] h-fit">
              <Typewriter
                words={[
                  "Inspiring Innovation",
                  "Igniting Vision",
                  "Crafting Futures",
                  "Shaping Tomorrow",
                ]}
                loop={false}
              />
            </p>
            <div className="w-[128px] h-[19px] sm:mt-4">
              {/* <Image src="/h_line_shape.png" alt="hey" fill={true} /> */}
              <img src="/h_line_shape.png" alt="" />
            </div>

            <p className="sm:text-2xl text-xl text-center mt-4 sm:mt-10 sm:w-1/2 w-full">
              Join the revolution in tech innovation with Trignite.
            </p>
          </div>
        </section>
      </GridBackground>
    </div>
  );
};

export default Hero;
