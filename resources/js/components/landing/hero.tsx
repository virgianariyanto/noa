import heroVideo from "@/assets/videos/8964163-hd_1920_1080_30fps.mp4";
import styles from "@/components/css/Style.module.css";

const Hero = () => {
    return (
        <div className="w-full h-screen relative">
            <video className="w-full h-full object-cover" src={heroVideo} autoPlay loop muted />
            <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex flex-col justify-center text-center text-white">
                <div>
                    <p className={`text-xl md:text-2xl py-0 tracking-wider ${styles.latothin}`}>Dari dapur sederhana, tercipta cookies dengan <span className="text-[#ff6abc] font-bold">karakter</span> yang kami percaya</p>
                    <h1 className={`text-5xl md:text-7xl ${styles.latoblack}`}>Selamat Datang di <span className="text-[#ff6abc]">noa.</span></h1>
                    <button className="bg-[#ff6abc] text-white px-6 py-3 mt-4 rounded-md hover:bg-black transition duration-300 cursor-pointer">Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default Hero;