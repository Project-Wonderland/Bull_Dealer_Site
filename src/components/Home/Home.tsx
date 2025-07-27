
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
// import 'swiper/swiper.min.css';

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { type source } from '../../Models/Model';
import { useState, useEffect } from "react";
import CountUp from 'react-countup';

interface HomeProps {
  data: source;
}


const stats = [
  {
    icon: "/icons/thumbs-up.svg",
    number: 56000,
    suffix: "+",
    label: "Satisfied Customers",
  },
  {
    icon: "/icons/tools.svg",
    number: 150,
    suffix: "+",
    label: "Spares & Service\ncenter across India",
  },
  {
    icon: "/icons/bucket.svg",
    number: 40,
    suffix: "+",
    label: "Types of buckets",
  },
  {
    icon: "/icons/engineer.svg",
    number: 250,
    suffix: "+",
    label: "Experienced\nEngineers",
  },
  {
    icon: "/icons/team.svg",
    number: 2100,
    suffix: "+",
    label: "Employees",
  },
];
const news = [
  {
    id: 1,
    title: "Why Renting Multipurpose Construction Machines Makes Sense for Your Business",
    date: "January 20, 2025",
    excerpt:
      "Introduction In today’s competitive construction industry, businesses are constantly seeking ways to increase efficiency, manage costs, and handle a variety...",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Maintaining Your Backhoe Loader: Maximize Performance and Minimize Costs",
    date: "March 7, 2024",
    excerpt:
      "Backhoe loaders are the backbone of many construction operations, but their long-term success depends on a commitment to comprehensive maintenance...",
  },
  {
    id: 3,
    title: "How Can You Increase Your Productivity With Smart Construction Equipment?",
    date: "February 26, 2024",
    excerpt:
      "Build Smarter, Build Faster: Boosting Productivity Today with Intelligent Equipment. In the fast-paced world of construction, staying ahead requires more...",
  },
];
function FnBanner({ data }: HomeProps) {
  const activeBanners = data.banner.filter((b) => b.isActive);
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === activeBanners.length - 1 ? 0 : prev + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? activeBanners.length - 1 : prev - 1
    );
  };

  const goToIndex = (idx: number) => {
    setCurrentIndex(idx);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [activeBanners.length]);

  return (
    <div className="relative overflow-hidden">
      <div className="relative h-full w-full">
        {activeBanners.map((banner, idx) => (
          <div
            key={banner.id}
            className={idx === currentIndex ? "block" : "hidden"}
          >
            <img
              src={banner.image}
              // className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              alt={banner.altText}
            />
            {/* <div className="absolute bottom-10 left-10 text-white">
              <h2 className="text-3xl font-bold">{banner.title}</h2>
              <p className="mt-2">{banner.description}</p>
              <a
                href={banner.buttonLink}
                className="inline-block mt-4 px-4 py-2 bg-yellow-400 text-black font-semibold rounded"
              >
                {banner.buttonText}
              </a>
            </div> */}
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {activeBanners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToIndex(idx)}
            type="button"
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-current={idx === currentIndex ? "true" : "false"}
            aria-label={`Slide ${idx + 1}`}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        onClick={goToPrev}
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        onClick={goToNext}
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
function FnResCount() {
  return (
    <div className="container w-full bg-white border border-gray-200 mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 divide-x divide-gray-200">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center gap-4 py-6 px-4 justify-center"
          >
            <img src={stat.icon} alt="icon" className="h-10 w-10" />
            <div className="text-left">
              <h2 className="text-2xl font-bold text-black">
                <CountUp end={stat.number} duration={2} />
                {stat.suffix}
              </h2>
              <p className="text-sm text-gray-600 whitespace-pre-line">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
function FnInnovation({ data }: HomeProps) {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="bg-[#1f1f1f] py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Text Block */}
        <div>
          <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-4">
            BULL DRIVEN BY INNOVATION
          </h2>
          <p className="text-gray-300 mb-6">
            BULL Machines has already made an impact in the world market by producing world class dedicated Construction Equipment vehicles, while it continues to remain as India's no 1 Tractor Attachment manufacturer for more than 24 years.
          </p>
          <hr className="border-gray-600 mb-6" />
          <button className="bg-[#f9b111] text-black px-6 py-3 text-sm font-semibold hover:bg-[#e3a200] transition-colors">
            READ MORE
          </button>
        </div>
        
        {/* Right Video/Image */}
        <div className="w-full">
          <div className="w-full aspect-video relative">
            {playVideo ? (
              <iframe
                className="w-full h-full absolute inset-0"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Bull Machines Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <>
                <img
                  src={data.img.country} // replace with your custom thumbnail
                  alt="Bull Machines Thumbnail"
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30"></div>
                <button
                  onClick={() => setPlayVideo(true)}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-white bg-black/60 rounded-full p-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
function FnConstructionEquipments({ data }: HomeProps) {
  const slides = [
    { src: data.img.sd76, alt: "SD76 - BS5 SUPER SMART", title: "SD76 - BS5 SUPER SMART" },
    { src: data.img.hd76, alt: "BULL LOADER HD76", title: "BULL LOADER HD76" },
    { src: data.img.av490, alt: "BULL SKID STEER AV490", title: "BULL SKID STEER AV490" },
    { src: data.img.consEcp, alt: "ConstEquipment", title: "ConstEquipment" }
  ];

  // const [currentImage, setCurrentImage] = useState(data.img.consEcp);
  const [currentImage, setCurrentImage] = useState(data.img.sd76);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div>  
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-8">
        <h2 className="text-black text-2xl md:text-3xl font-extrabold leading-tight text-center md:text-right md:min-w-[200px]">
          CONSTRUCTION <br className="hidden md:block" /> EQUIPMENTS
        </h2>
        <div className="hidden md:block h-16 w-px bg-gray-300"></div>
        <p className="text-gray-700 text-base md:text-lg max-w-2xl">
          World class backhoe loader maintaining highest efficiency, operator comfort and safety parameters with ROPS & FOPS accreditation.
        </p>
      </div>

      {/* Main Image Section */}
      <div style={{ backgroundImage: `url(${data.img.conecpbg})` }}
           className="bg-center bg-no-repeat bg-cover h-[425px] flex justify-center items-center">
        <img
          src={currentImage}
          alt="Construction Equipments Background"
          className="mx-auto block object-cover transition-all duration-300"
        />
      </div>

      {/* Swiper Section */}
      {/* <div className="bg-[#F0F0F0] px-4 md:px-12"> */}
      <div className="bg-[#EAEAEA] px-4 md:px-12">

        <div className="container max-w-7xl mx-auto bg-[#EAEAEA] py-4 px-4 md:px-12">
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
                      className={`relative group flex flex-col items-center px-4 py-6 cursor-pointer transition-all duration-300 
                        ${isActive ? 'bg-[#D9D9D9]' : 'bg-[#F0F0F0]'}
                        hover:bg-[#333333]
                      `}
                      onMouseEnter={() => {
                        setCurrentImage(slide.src);
                        setHoveredIndex(index);
                      }}
                      onMouseLeave={() => {
                        setHoveredIndex(null);
                      }}
                    >
                      {/* Divider line on the left, not for first slide */}
                      {index !== 0 && (
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-20 w-px bg-gray-300" />
                      )}

                      {/* Image */}
                      <div className="relative h-40 w-full flex items-center justify-center">
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          className="h-40 object-contain z-10 transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      {/* Title */}
                      <h3
                        className={`font-bold text-center mt-4 text-base transition-colors duration-300
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
function Carousel({data}: HomeProps) {
      return (
        <>
          <div className="relative w-full overflow-hidden">
            <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            spaceBetween={20}
            coverflowEffect={{
              rotate: 0,
              stretch: 50,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                height: 250,
              },
              640: {
                slidesPerView: 2,
                height: 300,
              },
              768: {
                slidesPerView: 3,
                height: 350,
              },
              1024: {
                slidesPerView: 4,
                height: 450,
              },
              1280: {
                slidesPerView: 5,
                height: 500,
              },
            }}
            className="w-full h-[450px] md:h-[450px] lg:h-[600px]">
            {data.videos.map((video) => (
              <SwiperSlide key={video.id}>
                <div
                  onClick={() => window.open(`https://www.youtube.com/shorts/${video.youtubeId}`, '_blank')}
                  className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer group"
                >
                  <img
                    src={video.thumbnail}
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-lg font-semibold">
                    ▶ Play
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>

          {/* Blur overlays */}
          {/* <div className=" left-blur"></div> */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-[40%] bg-gradient-to-r from-[#f0f0f0] via-[#f0f0f0]/0 to-transparent rounded-r-full z-10"></div>
        <div className="pointer-events-none absolute top-0 right-0 h-full w-[40%] bg-gradient-to-l from-[#f0f0f0] via-[#f0f0f0]/0 to-transparent rounded-l-full z-10"></div>

      </div>
    </>
  );
}
function NewsAndUpdates(){
  return ( 
      <div className="container py-10 mx-auto px-4 md:px-12 my-20">
      <h2 className="text-3xl font-bold text-center mb-8 ">
        NEWS AND UPDATES
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {news.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="rounded shadow p-6 h-full flex flex-col justify-between my-20">
              {/* Rectangle image above heading */}
              <div className="w-full h-32 mb-4 bg-gray-200 rounded overflow-hidden flex items-center justify-center">
                {/* Replace src with your news image if available */}
                <img
                  src="/images/news-placeholder.jpg"
                  alt="News"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-4">
                  {item.title}
                </h3>
                <div className="flex items-center mb-4">
                  <svg
                    className="w-5 h-5 text-gray-700 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-700 text-sm border-b-2 border-yellow-500 pb-1">
                    {item.date}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  {item.excerpt}
                </p>
              </div>
              <div className="mt-6">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 text-sm font-semibold">
                  View More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
   )
}
function FnCustomerTestimonial({data}:HomeProps) {
  return ( 
    <div className="bg-[#F0F0F0]  px-4 md:px-12">
        

        <div className="flex justify-center ">
          <h2 className="text-black text-2xl md:text-3xl font-extrabold leading-tight text-center md:text-right md:min-w-[200px] mx-auto my-30" >SUCCESSFUL CUSTOMERS TESTIMONIAL</h2>
        </div>

          <Carousel data={data}/>
          <NewsAndUpdates/>
          {/* <FnVideoCarousel /> */}
      </div>
   )
}




const Home = ({ data }: HomeProps) => {
  return (
    <>
    
    <FnBanner data={data} />

    <FnResCount />

    <FnInnovation data={data}/>

    <FnConstructionEquipments data={data}/>
    
    <FnCustomerTestimonial data={data}/>
    
    {/* <FnTest /> */}

    
      
    </>
  );
};

 export default Home;
