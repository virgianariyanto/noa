import heroVideo from "@/assets/videos/8964163-hd_1920_1080_30fps.mp4";
import styles from "@/components/css/Style.module.css";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 text-center text-white">
        <div className="max-w-4xl">
          <p
            className={`mb-3 text-base md:text-2xl tracking-wider ${styles.latothin}`}
          >
            Dari dapur sederhana, tercipta cookies dengan{" "}
            <span className="text-[#ff6abc] font-bold">karakter</span> yang kami
            percaya
          </p>

          <h1
            className={`mb-6 text-4xl md:text-7xl ${styles.latoblack}`}
          >
            Selamat Datang di{" "}
            <span className="text-[#ff6abc]">noa.</span>
          </h1>

          <a
            href="#contact"
            className="inline-block rounded-md bg-[#ff6abc] px-8 py-3 text-white transition hover:bg-pink-600"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
