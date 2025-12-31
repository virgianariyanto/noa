import tokopediaImg from "@/assets/images/tokopedia.png";
import shopeeImg from "@/assets/images/Shopee.png";
import gofoodImg from "@/assets/images/gofood.png";
import grabfoodImg from "@/assets/images/grabfood.png";
import styles from "@/components/css/Style.module.css";

const Available = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center bg-[#ff6abc]/50 my-52 md:my-0 md:mt-56 xl:mt-20 pb-20">
            <h1 className={`my-10 text-2xl text-[#ff6abc] font-bold ${styles.latobold}`}>Available On</h1>
            <div className="flex flex-wrap items-center justify-center gap-8">
                <img src={tokopediaImg} className="lg:w-1/10 w-1/5 md:w-1/7" alt="" />
                <img src={shopeeImg} className="lg:w-1/10 w-1/5 md:w-1/7" alt="" />
                <img src={gofoodImg} className="lg:w-1/10 w-1/5 md:w-1/7" alt="" />
                <img src={grabfoodImg} className="lg:w-1/10 w-1/5 md:w-1/7" alt="" />
            </div>
        </div>
    )
}

export default Available;