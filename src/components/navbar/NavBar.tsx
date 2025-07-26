import { Link } from "react-router-dom";
import './NavBar.css'
import { type source } from "../../Models/Model";

interface LogoProps {
  data: source;
}

const NavbarComp = ({data}: LogoProps) => {
  debugger
   console.log(data);
  return (
<div className="sticky top-0 z-50 relative w-full bg-white">

  {/* Bull Logo */}
  <div className="absolute top-4 left-2 z-20 flex mx-auto">
    <img src={data.logo.bullLogo} alt="Bull" className="h-10" />
  </div>

  {/* Arasan Logo */}
  <div className="absolute top-2 right-6 z-20 flex items-center space-x-2">
    <img src={data.logo.CustomerLogo} alt="Arasan" className="h-10" />
  

  {/* Menu Button (visible on mobile only) */}
  <div className="block md:hidden absolute top-2 right-6 z-20">
    <button className="p-2 text-gray-700">
      {/* Hamburger icon (example using Heroicons) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-gray-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round" 
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div></div>

  {/* Top Info Bar - centered content */}
  <div className="hidden md:block">
  <div className=" w-2/3 mx-auto bg-[#838282] text-white text-sm font-semibold px-8 py-2 relative z-10 polygon-top transform translate-x-[30px]">
    <div className="flex justify-center items-center space-x-6">
      <span>ABOUT US</span>
      <span>MEDIA</span>
      <span>CAREER</span>
      <span>SERVICE SUPPORT</span>
      <span>987654321</span>
    </div>
  </div>

  {/* Navbar - centered content */}
  <div className="w-2/3 mx-auto bg-[#414141] text-white px-10 py-3 relative z-10 polygon-top transform -translate-x-[30px]">
    <div className="flex justify-center items-center space-x-8 text-sm font-semibold">

      <Link to="/" className="hover:text-yellow-400">HOME</Link>

      <div className="relative group">
        <Link to="/products" className="hover:text-yellow-400 flex items-center">
          OUR PRODUCTS <span className="ml-1 text-yellow-400">▼</span>
        </Link>
      </div>

      <Link to="/contact" className="hover:text-yellow-400">CONTACT US</Link>

    </div>
  </div>
  </div>
  <hr />
</div>









  );
};

export default NavbarComp;
