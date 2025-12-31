
import styles from "@/components/css/Style.module.css";

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className={`text-2xl text-[#ff6abc] mb-4 ${styles.latobold}`}>Contact Us</h1>
            <div className="flex flex-wrap justify-center items-center w-full">
                <div>
                    <p className="max-w-md text-center px-4">
                        Have questions or want to learn more about our delicious cookies? We're here to help! Reach out to us via email at <a href="mailto:noalab2025@gmail.com" className="text-[#ff6abc] hover:underline">noalab2025@gmail.com</a> or give us a message at +1234567890. Our friendly team is ready to assist you with any inquiries, orders, or feedback you may have.
                    </p>
                    <p className="max-w-md text-center px-4">
                        We look forward to hearing from you and serving you with our delicious cookies!
                    </p>
                </div>
                <div>
                    <div className="mt-4">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" className="border border-gray-300 rounded-md p-2 w-full max-w-sm" />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="border border-gray-300 rounded-md p-2 w-full max-w-sm" />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" className="border border-gray-300 rounded-md p-2 w-full max-w-sm h-32"></textarea>
                    </div>
                    <button className="mt-6 bg-[#ff6abc] text-white px-4 py-2 rounded-md hover:bg-pink-600 transition duration-300">
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Contact;