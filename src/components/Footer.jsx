import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaPhoneAlt,
  FaPinterest,
  FaRegAddressCard,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#D3EBF4] shadow-small dark:bg-black mt-12">
      <div className="mx-auto max-w-7xl px-6 py-10 2xl:px-0">
        <div className="flex flex-col gap-12 lg:flex-row">
          <footer className="w-full lg:w-1/2 space-y-5">
            <Link to="/" className="text-3xl text-[#ED4C67] font-semibold">
              Name
            </Link>
            <p>
              Our Career Climb platform is a trusted companion on your journey
              to fulfill your professional dreams. We help you make the right
              decisions through professional advice, personal guidance, and
              accurate information. Join us today and unlock your future
              possibilities.
            </p>
          </footer>

          <div className="w-full lg:w-1/2 mx-auto flex justify-between gap-2 md:justify-around">
            <footer>
              <h4 className="mb-3 text-body-3 text-xl font-semibold text-metal-900 dark:text-white">
                Services
              </h4>
              <ul className="flex flex-col gap-3 text-body-3 font-normal text-metal-600 dark:text-metal-300">
                <li> Career Coaching</li>
                <li>Soft Skills Training</li>
                <li>Interview Preparation</li>
                <li>Freelancing Tips</li>
                <li>Leadership Development</li>
              </ul>
            </footer>
            <footer>
              <h4 className="mb-3 text-body-3 text-xl font-semibold text-metal-900 dark:text-white">
                Contact Us
              </h4>
              <ul className="flex flex-col gap-3 text-body-3 font-normal text-metal-600 dark:text-metal-300">
                <li className="flex items-center gap-2">
                  <FaRegAddressCard /> Box 31, Allentown, PA 181
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope /> info@careerclimb.com
                </li>
                <li className="flex items-center gap-2">
                  <FaPhoneAlt /> +8801234567890
                </li>
                <Link
                  to="https://www.facebook.com/"
                  className="flex items-center gap-2"
                >
                  <FaFacebook />
                  Facebook
                </Link>
                <Link
                  to="https://www.linkedin.com/"
                  className="flex items-center gap-2"
                >
                  <FaLinkedin />
                  LinkedIn
                </Link>
                <Link to="https://x.com/" className="flex items-center gap-2">
                  <FaTwitter />
                  Twitter
                </Link>
              </ul>
            </footer>
          </div>
        </div>
      </div>
      <div className="border-t border-t-metal-100 py-5 text-center dark:border-t-metal-600">
        <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
          &copy;{new Date().getFullYear()} All Rights Reserved by &nbsp;
          <Link href="/" target="_blank" className="font-medium">
            company ltd
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
