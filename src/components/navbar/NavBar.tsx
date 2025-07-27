import { Link } from "react-router-dom";
import './NavBar.css'
import { type source } from "../../Models/Model";
import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

interface LogoProps {
  data: source;
}

interface HomeProps {
  data: source;
}

// const [currentImage, setCurrentImage] = useState(data.img.consEcp);
  
 function FnConstructionEquipments({ data }: HomeProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  const slides = [
    { src: data.img.sd76, alt: "SD76 - BS5 SUPER SMART", title: "SD76 - BS5 SUPER SMART" },
    { src: data.img.hd76, alt: "BULL LOADER HD76", title: "BULL LOADER HD76" },
    { src: data.img.av490, alt: "BULL SKID STEER AV490", title: "BULL SKID STEER AV490" },
    // { src: data.img.consEcp, alt: "ConstEquipment", title: "ConstEquipment" }
  ];

  return (
    <div>
      <div className="bg-white px-4 md:px-12">
        <div className="container max-w-6xl mx-auto bg-white py-2 px-4 md:px-12">
          <Swiper
        spaceBetween={0}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="my-swiper"
          >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
          <div
            className={`relative group flex flex-col items-center px-4 py-3 cursor-pointer transition-all duration-300 
              ${isActive ? 'bg-[#D9D9D9]' : 'bg-[#F0F0F0]'}
              hover:bg-[#333333]
            `}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Divider line on the left, not for first slide */}
            {index !== 0 && (
              <div className="absolute left-0 top-0 h-full w-[1px] bg-black" />
            )}

            {/* Image */}
            <div className="relative h-28 w-full flex items-center justify-center">
              <img
            src={slide.src}
            alt={slide.alt}
            className="h-28 object-contain z-10 transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Title */}
            <h3
              className={`font-bold text-center mt-2 text-base transition-colors duration-300
            ${hoveredIndex === index ? 'text-white' : 'text-black'}
              `}
            >
              {slide.title}
            </h3>
          </div>
            )}
          </SwiperSlide>
        ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}


const NavbarComp = ({ data }: LogoProps) => {
  const [productsHovered, setProductsHovered] = useState(false);
  const [equipmentsHovered, setEquipmentsHovered] = useState(false);

  // Show dropdown if either nav or dropdown is hovered
  const shouldShowDropdown = productsHovered || equipmentsHovered;

  // Wrap both the trigger and dropdown in a common parent to manage hover state
  return (
    <div className="sticky top-0 z-50 relative w-full bg-white">
      {/* Bull Logo */}
      <div className="absolute top-4 left-2 z-20 flex mx-auto">
        <img src={data.logo.bullLogo} alt="Bull" className="h-10" />
      </div>

      {/* Arasan Logo */}
      <div className="absolute top-2 right-6 z-20 flex items-center space-x-2">
        <img src={data.logo.CustomerLogo} alt="Arasan" className="h-10" />
      </div>

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

        {/* Navbar and Dropdown Wrapper */}
        <div
          className="relative"
          onMouseEnter={() => { setProductsHovered(true); setEquipmentsHovered(true); }}
          onMouseLeave={() => { setProductsHovered(false); setEquipmentsHovered(false); }}
        >
          {/* Navbar - centered content */}
          <div className="w-2/3 mx-auto bg-[#414141] text-white px-10 py-3 relative z-10 polygon-top transform -translate-x-[30px]">
            <div className="flex justify-center items-center space-x-8 text-sm font-semibold" >
              <Link to="/" className="hover:text-yellow-400">HOME</Link>
              <div
                className="relative group"
                // Remove individual mouse events, handled by parent
              >
                <Link to="/products" className="hover:text-yellow-400 flex items-center">
                  OUR PRODUCTS <span className="ml-1 text-yellow-400">▼</span>
                </Link>
              </div>
              <Link to="/contact" className="hover:text-yellow-400">CONTACT US</Link>
            </div>
          </div>

          {/* Dropdown */}
          {shouldShowDropdown && (
            <div className="absolute left-0 w-full z-30">
              <FnConstructionEquipments data={data} />
            </div>
          )}
        </div>

        {/* Menu Button (visible on mobile only) */}
        <div className="block md:hidden absolute top-2 right-6 z-20">
          <button className="p-2 text-gray-700">
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
        </div>
      </div>
      <hr />
    </div>
  );
};

export default NavbarComp;
