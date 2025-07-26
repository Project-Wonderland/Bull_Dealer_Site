// src/data/sourceData.ts

// src/data/sourceData.ts    <img src="https://rengatrading.com/bull/images/contact-us-banner.jpg" alt="Contact Us" className="w-full h-[300px] object-cover" />

import type { source } from "./Models/Model";
// import logo from "../../../src/assets/Image_Host/logo/bull-machine-logo.png";
// const serverurl = "http://localhost"; // Adjust the URL as needed
// const serverurl = "https://rengatrading.com/bull/images";
// const serverurl = "/public/image_host/";  //project image


//const serverurl = "http://localhost:4173/Image_Host";//prodbuild

const isProd = import.meta.env.MODE === "production";
const serverurl = isProd
  ? "/Bull_Dealer_Site/Image_Host"
  : "Image_Host"; // for local dev 
export const sourceData: source = {
    logo: {
        bullLogo: serverurl+"/logo/bull-machine-logo.png",
        CustomerLogo: serverurl+"/logo/client_logo.png",
    },
    img: {
        contact: serverurl+"/banner/contact-us-banner.jpg",
        consEcp: serverurl+"/products/sd76-bs4-super-smart.png",
        hd76: serverurl+"/products/product-sd76-bs4.png",
        sd76: serverurl+"/products/bull-loader-hd76-sm.png",
        av490: serverurl+"/products/skid-stree-sm.png",
        conecpbg: serverurl+"/banner/consequipment-bg.jpg",
        country: serverurl+"/banner/hqdefault68.jpg"
    },
  icons:{

  },
  
  banner: [
    {
      id: 1,
      image: serverurl+"/banner/banner021.webp",
      title: "Welcome to Our Site",
      description: "This is the first banner.",
      buttonText: "Learn More",
      buttonLink: "/about",
      altText: "Banner Image 1",
      isActive: true
    },
    {
      id: 2,
      image: serverurl+"/banner/grandia-banner.webp",
      title: "Our Services",
      description: "Check out what we offer.",
      buttonText: "Services",
      buttonLink: "/services",
      altText: "Banner Image 2",
      isActive: true
    },
    {
      id: 2,
      image: serverurl+"/banner/super-smart-new-banner.webp",
      title: "Our Services",
      description: "Check out what we offer.",
      buttonText: "Services",
      buttonLink: "/services",
      altText: "Banner Image 2",
      isActive: true
    }
  ],

  videos : [ 
  {
    id: 1,
    thumbnail: serverurl+"/videos/abid-ansari-testimonial.webp",
    youtubeId: "abc123",
    ThumbNailUrl: "",
    isActive: true
  },
  {
    id: 2,
    thumbnail: serverurl+"/videos/bull-backhoe-fastest-growing-backhoe-loader-manufacturer.webp",
    youtubeId: "def456",
    ThumbNailUrl: "",
    isActive: true
  },
  {
    id: 3,
    thumbnail: serverurl+"/videos/bull-grandia-leading-the-way-with-unmatched-power.webp",
    youtubeId: "ghi789",
    ThumbNailUrl: "",
    isActive: true
  },
  {
    id: 4,
    thumbnail: serverurl+"/videos/bull-machines-moves-70-backhoes-by-train.webp",
    youtubeId: "xyz101",
    ThumbNailUrl: "",
    isActive: true
  },
  {
    id: 5,
    thumbnail: serverurl+"/videos/bull-machines-video-testimonial.webp",
    youtubeId: "xyz101",
    ThumbNailUrl: "",
    isActive: true
  },
  {
    id: 6,
    thumbnail: serverurl+"/videos/bull-testimonial-kannada-1.webp",
    youtubeId: "xyz101",
    ThumbNailUrl: "",
    isActive: true
  },
  {
    id: 7,
    thumbnail: serverurl+"/videos/bull-testimonial-kannada-2.webp",
    youtubeId: "xyz101",
    ThumbNailUrl: "",
    isActive: true
  },
  {
    id: 8,
    thumbnail: serverurl+"/videos/bull-testimonial-kannada-3.webp",
    youtubeId: "xyz101",
    ThumbNailUrl: "",
    isActive: true
  },
  {
    id: 9,
    thumbnail: serverurl+"/videos/bull-testimonial-kannada-4.webp",
    youtubeId: "xyz101",
    ThumbNailUrl: "",
    isActive: true
  },
  {
    id: 10,
    thumbnail: serverurl+"/videos/bull-testimonial-kannada-5.webp",
    youtubeId: "xyz101",
    ThumbNailUrl: "",
    isActive: true
  },
  {
    id: 11,
    thumbnail: serverurl+"/videos/dhulaji-biru-karpe-testimonial.webp",
    youtubeId: "xyz101",
    ThumbNailUrl: "",
    isActive: true
  },
  {
    id: 12,
    thumbnail: serverurl+"/videos/jasvir-singh-testimonial.webp",
    youtubeId: "xyz101",
    ThumbNailUrl: "",
    isActive: true
  },
  {
    id: 13,
    thumbnail: serverurl+"/videos/jitendra-more-testimonial.webp",
    youtubeId: "xyz101",
    ThumbNailUrl: "",
    isActive: true
  },
  {
    id: 14,
    thumbnail: serverurl+"/videos/karthik-testimonial.webp",
    youtubeId: "xyz101",
    ThumbNailUrl: "",
    isActive: true
  },
  {
    id: 15,
    thumbnail: serverurl+"/videos/mahadev-testimonial.webp",
    youtubeId: "xyz101",
    ThumbNailUrl: "",
    isActive: true
  },
  {
    id: 16,
    thumbnail: serverurl+"/videos/moorthi-testimonial.webp",
    youtubeId: "xyz101",
    ThumbNailUrl: "",
    isActive: true
  },
  {
    id: 17,
    thumbnail: serverurl+"/videos/ram-roy-testimonial.webp",
    youtubeId: "xyz101",
    ThumbNailUrl: "",
    isActive: true
  },
  {
    id: 18,
    thumbnail: serverurl+"/videos/sandeep-testimonial.webp",
    youtubeId: "xyz101",
    ThumbNailUrl: "",
    isActive: true
  },
  {
    id: 19,
    thumbnail: serverurl+"/videos/selvamani-testiomonial.webp",
    youtubeId: "xyz101",
    ThumbNailUrl: "",
    isActive: true
  },
  {
    id: 20,
    thumbnail: serverurl+"/videos/shivabalan-testimonial.webp",
    youtubeId: "xyz101",
    ThumbNailUrl: "",
    isActive: true
  },
  {
    id: 21,
    thumbnail: serverurl+"/videos/shrikrishna-prabhakar-testimonial.webp",
    youtubeId: "xyz101",
    ThumbNailUrl: "",
    isActive: true
  },
  {
    id: 22,
    thumbnail: serverurl+"/videos/vigneshwaran-testimonial.webp",
    youtubeId: "xyz101",
    ThumbNailUrl: "",
    isActive: true
  },
  {
    id: 23,
    thumbnail: serverurl+"/videos/vijay-itkar-testimonial.webp",
    youtubeId: "xyz101",
    ThumbNailUrl: "",
    isActive: true
  },
  
  ],

  news : [
    {
      id: 1,
      title: "Why Renting Multipurpose Construction Machines Makes Sense for Your Business",
      date: "January 20, 2025",
      excerpt: "Introduction In today’s competitive construction industry, businesses are constantly seeking ways to increase efficiency, manage costs, and handle a variety...",
      imageUrl: "",
      isActive: true
    },
    {
      id: 2,
      title: "The Ultimate Guide to Maintaining Your Backhoe Loader: Maximize Performance and Minimize Costs",
      date: "March 7, 2024",
      excerpt: "Backhoe loaders are the backbone of many construction operations, but their long-term success depends on a commitment to comprehensive maintenance...",
      imageUrl: "",
      isActive: true
    },
    {
      id: 3,
      title: "How Can You Increase Your Productivity With Smart Construction Equipment?",
      date: "February 26, 2024",
      excerpt: "Build Smarter, Build Faster: Boosting Productivity Today with Intelligent Equipment. In the fast-paced world of construction, staying ahead requires more...",
      imageUrl: "",
      isActive: true
    },
  ],

  stats : [
    {
      icon: "/icons/thumbs-up.svg", // Replace with correct path
      number: "56000+",
      label: "Satisfied Customers",
      isActive: true
    },
    {
      icon: "/icons/tools.svg",
      number: "150+",
      label: "Spares & Service\ncenter across India",
      isActive: true
    },
    {
      icon: "/icons/bucket.svg",
      number: "40+",
      label: "Types of buckets",
      isActive: true
    },
    {
      icon: "/icons/engineer.svg",
      number: "250+",
      label: "Experienced\nEngineers",
      isActive: true
    },
    {
      icon: "/icons/team.svg",
      number: "2100+",
      label: "Employees",
      isActive: true
    },
],

};
