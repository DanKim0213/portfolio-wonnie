import { copyrightSign } from "../assets/icons";
import { socialMedia } from "../constants";
import { BiCheckDouble} from 'react-icons/bi';

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
        <a href="/" className="flex gap-4 items-center text-white font-bold text-lg">
          <BiCheckDouble size={50}  />
          WONNIE
        </a>
          {/* <p className="mt-6 font-montserrat text-base leading-7 text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p> */}
          <div className="mt-8 flex items-center gap-5">
            {socialMedia.map((icon) => (
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white"
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24 flex justify-between text-white-400 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 cursor-pointer items-center justify-start gap-2 font-montserrat">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="m-0 rounded-full"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="cursor-pointer font-montserrat">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
