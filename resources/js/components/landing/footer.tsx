import styles from "@/components/css/Style.module.css";

const Footer = () => {
    return (
        <footer className=" py-6 h-full">
            <div className="flex flex-col text-center items-center justify-center">
                <div className="flex justify-between w-5/6 items-center mb-2">
                    <h1 className={`text-4xl text-[#ff6abc] ${styles.latoblack}`}>noa.</h1>
                    <div className="flex flex-col text-lg space-y-2 text-left">
                        <a href="#" className="hover:text-[#ff6abc] transition duration-300">Home</a>
                        <a href="#" className="hover:text-[#ff6abc] transition duration-300">About</a>
                        <a href="#" className="hover:text-[#ff6abc] transition duration-300">Products</a>
                        <a href="#" className="hover:text-[#ff6abc] transition duration-300">Contact</a>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-[#ff6abc] transition duration-300">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#" className="hover:text-[#ff6abc] transition duration-300">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" className="hover:text-[#ff6abc] transition duration-300">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" className="hover:text-[#ff6abc] transition duration-300">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </div>
                <p className="text-sm text-[#ff6abc]">&copy; {new Date().getFullYear()} noa. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;