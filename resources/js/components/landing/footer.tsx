import styles from "@/components/css/Style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  const menus = ["Home", "About", "Products", "Contact"];
  const phoneNumber = "6283193444974";
  const message = "Halo admin noa, saya ingin order produk hari ini 😊";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


  return (
    <footer className="py-6">
      <div className="flex flex-col items-center text-center">
        <div className="flex w-5/6 items-center justify-between mb-2">
          <p className={`text-4xl text-[#ff6abc] ${styles.latoblack}`}>noa.</p>

          <nav className="flex flex-wrap text-lg space-x-14">
            {menus.map((menu) => (
              <a
                key={menu}
                href="#"
                className="hover:text-[#ff6abc] transition duration-300"
              >
                {menu}
              </a>
            ))}
          </nav>

          <div className="flex flex-col text-lg space-y-2 text-left">
            <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1 items-center"
                >
                <FontAwesomeIcon icon={faWhatsapp} className="text-[#ff6abc]" size="lg" />
                WhatsApp
                </a>
            <a
              href="https://www.instagram.com/noa.universe/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 items-center"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-[#ff6abc]" size="lg" />
              Instagram
            </a>

            <a href="#" className="flex gap-1 items-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-[#ff6abc]" size="lg" />
              Email
            </a>
          </div>
        </div>

        <p className="text-sm text-[#ff6abc]">
          &copy; {new Date().getFullYear()} noa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
