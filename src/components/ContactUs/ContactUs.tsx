// EnquiryForm.jsx
import { faFacebookF, faYoutube, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  type source } from "../../Models/Model";

interface ContactUsProps {
  data: source;
}

function BannerImg({data}: ContactUsProps) {
  return (
    console.log(data),
    <div className="bg-white shadow-lg rounded-lg">
      {/* <img src="https://rengatrading.com/bull/images/contact-us-banner.jpg" alt="Contact Us" className="w-full h-[300px] object-cover" /> */}
      <img src={data.img.contact} alt="Contact Us" className="w-full h-[300px] object-cover" />
    </div>
  )
}
function EnquiryForm({data}: ContactUsProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side - Form */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-2">
            SEND ENQUIRY
          </h2>
          <p className="text-gray-600 mb-6">
            Please fill up the below rows and Submit your Enquiry.
          </p>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <label className="w-full md:w-48 text-gray-700 font-medium">
                Name :
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="flex-1 border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <label className="w-full md:w-48 text-gray-700 font-medium">
                Mobile Number :
              </label>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="flex-1 border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <label className="w-full md:w-48 text-gray-700 font-medium">
                Email Address :
              </label>
              <input
                type="email"
                placeholder="Enter Your Email Id"
                className="flex-1 border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <label className="w-full md:w-48 text-gray-700 font-medium">
                Address :
              </label>
              <textarea
                placeholder="Enter Your Address"
                className="flex-1 border border-gray-300 px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <label className="w-full md:w-48 text-gray-700 font-medium">
                District/ State :
              </label>
              <input
                type="text"
                placeholder="Enter The District/State"
                className="flex-1 border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <label className="w-full md:w-48 text-gray-700 font-medium">
                Message :
              </label>
              <textarea
                placeholder="Enter Your Message"
                className="flex-1 border border-gray-300 px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-2 mt-4"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Right side - Address Info */}
        <div className="w-full md:w-[360px] border border-gray-300 p-8 shrink-0 md:my-12">
          <img
            src={data.logo.bullLogo}
            alt="Logo"
            className="w-28 h-auto mb-4"
          />
          <h3 className="text-gray-800 font-bold text-lg mb-2 leading-tight">
            NORTH INDIA OFFICE
            <br />
            Bull Machines Pvt Ltd.,
          </h3>

          <p className="text-gray-700 text-sm mb-2 leading-tight">
            B-1003, 10th Floor, Urbtech Trade Centre, B-35, Sector-132,
            Adjacent DPS School.<br />
            Noida - 201 304, Uttar Pradesh.
          </p>

          <p className="text-gray-700 text-sm mb-1">
            <span className="font-medium">Phone :</span> +91 120 - 475 1333,
          </p>
          <p className="text-gray-700 text-sm mb-1">
            <span className="font-medium">Mobile :</span> +91 9312069285
          </p>
          <p className="text-gray-700 text-sm mb-2">
            <span className="font-medium">Email :</span>
          </p>
          <p className="text-gray-800 font-semibold text-sm mb-2">Follow us</p>
          <div className="flex gap-4 text-gray-700 text-xl">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faLinkedinIn} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>

      </div>
    </div>
  );
}
function FnLocBullplant2() {
  return (
    <div className="bg-[#626262] py-10 px-4 flex flex-col md:flex-row justify-center items-start gap-8">
  {/* LEFT: MAP */}
  <div className="w-full md:w-[700px] h-[350px]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0665095125587!2d77.1412694153311!3d11.033636892147307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba855a60e075091%3A0xb24ba6e344c76560!2sBULL+MACHINES+PVT+LTD+Plant2!5e0!3m2!1sen!2sin!4v1478164599901"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Bull Machines Pvt Ltd Plant 2"
    ></iframe>
  </div>

  {/* RIGHT: TEXT CONTENT */}
  <div className="flex flex-col w-full md:w-[400px]">
    {/* Yellow Box */}
    <div className="bg-[#fcb017] text-white p-6">
      <h4 className="text-sm font-semibold tracking-widest mb-2">PLANT 2</h4>
      <h3 className="text-lg font-bold mb-3 leading-tight">
        Bull Machines Pvt Ltd.,
      </h3>
      <p className="text-sm leading-tight">
        S.F. No. 41, Kangeyampalayam Post, Trichy Road, Sulur,
        Coimbatore - 641 401, INDIA.
      </p>
    </div>

    {/* Contact Details below yellow box */}
    <div className="text-white mt-4 px-6">
      <p className="text-sm mb-2">
        <span className="font-semibold">Mobile:</span> +91 88832 88832, +91 98426 70184
      </p>
      <p className="text-sm">
        <span className="font-semibold">Email:</span> sales@bullmachine.com
      </p>
    </div>
  </div>
</div>


)}
function FnLocNorthOffice() {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center gap-8 py-10 px-4 bg-white">
  {/* Map */}
  <div className="w-full md:w-[700px] h-[350px]">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7011.578893157353!2d77.3769013!3d28.5159819!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef4b6af9f6f7%3A0x7dd9e78fb8928f53!2sBULL%20MACHINES%20PVT.%20LTD!5e0!3m2!1sen!2sin!4v1740716976725!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Bull Machines Pvt Ltd North India Office"
  ></iframe>
  <div className="mt-2 text-sm">
    <a
      href="https://www.google.com/maps/place/BULL+MACHINES+PVT.+LTD/@28.5159819,77.3769013,17z/data=!4m6!3m5!1s0x390cef4b6af9f6f7:0x7dd9e78fb8928f53!8m2!3d28.5159819!4d77.3769013!16s%2Fg%2F11b6yc7s5h?entry=ttu"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      View larger map with reviews & directions
    </a>
  </div>
</div>


  {/* RIGHT: TEXT CONTENT */}
  <div className="flex flex-col w-full md:w-[400px]">
    {/* Yellow Box */}
    <div className=" text-black p-6">
      <h4 className="text-sm font-semibold tracking-widest mb-2 uppercase">
      North India Office
    </h4>
    <h3 className="text-lg font-bold mb-3 leading-tight">
      Bull Machines Pvt Ltd.,
    </h3>
    <p className="text-sm leading-relaxed mb-4">
      B-1003, 10th Floor, Urbtech Trade Centre,
      <br />
      B-35, Sector-132, Adjacent DPS School.
      <br />
      Noida - 201 304, Uttar Pradesh.
    </p>
    </div>

    {/* Contact Details below yellow box */}
    <div className="text-black mt-4 px-6">
      <p className="text-sm mb-1">
      <span className="font-semibold">Phone:</span> +91 120 - 475 1333
    </p>
    <p className="text-sm mb-1">
      <span className="font-semibold">Mobile:</span> +91 9312069285
    </p>
    <p className="text-sm">
      <span className="font-semibold">Email:</span> dro@bullmachine.com
    </p>
    </div>
  </div>

  
</div>


  )}

export default function ContactUs({data}: ContactUsProps) {
  return (
    <>
    <BannerImg data={data} />
    <EnquiryForm data={data}/>
    <FnLocBullplant2 />
    <FnLocNorthOffice />
    </>
  )
}