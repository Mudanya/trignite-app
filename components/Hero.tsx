import NavBar from "./ui/NavBar";

const Hero = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
      <NavBar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
};

export default Hero;
