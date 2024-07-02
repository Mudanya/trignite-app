import { ReactNode } from "react";

const GridBackground = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full w-full  bg-white  bg-grid-black/[0.03] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-[#1048a0]/[0.2] [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>
      {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Trignite Kaboom!
      </p> */}
      {children}
    </div>
  );
};

export default GridBackground;
