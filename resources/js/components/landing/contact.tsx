import { useState } from "react";
import styles from "@/components/css/Style.module.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="mx-auto w-5/6 py-20">
      <div className="flex flex-col items-center">
        <h2 className={`text-2xl text-[#ff6abc] mb-6 ${styles.latobold}`}>
          Contact Us
        </h2>

        <div className="flex flex-wrap justify-evenly w-full gap-10">
          {/* Info */}
          <div className="max-w-md">
            <p className="text-left">
              Have questions or want to learn more about our universe? We're here
              to help! Reach out to us via email at{" "}
              <a
                href="mailto:noalab2025@gmail.com"
                className="text-[#ff6abc] hover:underline"
              >
                noalab2025@gmail.com
              </a>{" "}
              or send us a message using the form. Our friendly team is ready to
              assist you with any inquiries, orders, or feedback you may have.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full lg:w-1/2"
          >
            <div className="mt-4">
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="block mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full h-32"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-6 bg-[#ff6abc] text-white px-6 py-2 rounded-md hover:bg-pink-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
