import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faYoutube, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { type source } from "../../Models/Model";

interface FooterProps {
  data: source;
}

const FooterComp = ({data}:FooterProps) => {
  return (
    <footer className="bg-[#1f1f1f] text-gray-300 px-10 py-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">

    {/* Column 1 */}
    <div>
      <ul className="space-y-2">
        <li><a href="#" className="text-yellow-400 hover:underline">About Bull Machine</a></li>
        <li><a href="#" className="text-yellow-400 hover:underline">Milestone</a></li>
        <li><a href="#" className="text-yellow-400 hover:underline">Infrastructure</a></li>
        <li><a href="#" className="text-yellow-400 hover:underline">Quality Assurance</a></li>
        <li><a href="#" className="text-yellow-400 hover:underline">Our Customers</a></li>
      </ul>
    </div>

    {/* Column 2 */}
    <div>
      <h4 className="uppercase text-gray-400 text-xs font-semibold mb-2">Construction Equipments</h4>
      <ul className="space-y-2">
        <li><a href="#" className="text-yellow-400 hover:underline">Bull SD 76 Super smart</a></li>
        <li><a href="#" className="text-yellow-400 hover:underline">Bull HD 76 Loader</a></li>
        <li><a href="#" className="text-yellow-400 hover:underline">Bull Skid Steer</a></li>
      </ul>
    </div>

    {/* Column 3 */}
    <div>
      <ul className="space-y-2">
        <li><a href="#" className="hover:underline">MEDIA</a></li>
        <li><a href="#" className="hover:underline">CAREER</a></li>
        <li><a href="#" className="hover:underline">CUSTOMER SUPPORT</a></li>
        <li><a href="#" className="hover:underline">PRIVACY POLICY</a></li>
        <li><a href="#" className="hover:underline">APP PRIVACY POLICY</a></li>
      </ul>
    </div>

    {/* Column 4 */}
    <div className="space-y-1">
      <h4 className="text-yellow-400 font-semibold uppercase mb-2">Contact Us</h4>
      <p>Arasan Company Firm</p>
      <p>(Authorized Dealer for BULL</p>
      <p>Construction Equipments)</p>
      <p>271/A1, Madurai Road, Thachanallur,</p>
      <p>Tirunelveli - 627358 Tamil Nadu.</p>
    </div>

    {/* Column 5 */}
    <div className="space-y-2">
      <h4 className="uppercase text-yellow-400 font-semibold mb-1">Follow Us</h4>
      <p className="text-sm">We are socially Connected</p>
      <div className="flex space-x-4 mt-2 text-yellow-400 text-xl">
        <FontAwesomeIcon icon={faFacebookF} />
      <FontAwesomeIcon icon={faYoutube} />
      <FontAwesomeIcon icon={faLinkedinIn} />
      <FontAwesomeIcon icon={faInstagram} />
      </div>
    </div>

  </div>

  {/* Bottom Bar */}
  <div className="border-t border-gray-600 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
    <p>© 2025 All Rights Reserved Bull Machines</p>
    <div className="flex items-center space-x-2 mt-2 md:mt-0">
      <img src={data.logo.bullLogo} alt="Bull Logo" className="h-6" />
      {/* <span className="text-red-600 font-bold text-base">BULL</span> */}
    </div>
  </div>
</footer>


  );
};

export default FooterComp;