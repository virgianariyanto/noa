import tokopediaImg from "@/assets/images/tokopedia.png";
import shopeeImg from "@/assets/images/Shopee.png";
import gofoodImg from "@/assets/images/gofood.png";
import grabfoodImg from "@/assets/images/grabfood.png";
import styles from "@/components/css/Style.module.css";

const marketplaces = [
  { name: "Tokopedia", img: tokopediaImg },
  { name: "Shopee", img: shopeeImg },
  { name: "GoFood", img: gofoodImg },
  { name: "GrabFood", img: grabfoodImg },
];

const AvailableOn = () => {
  return (
    <section className="w-full bg-[#ff6abc]/50 py-20 mt-20">
      <div className="flex flex-col items-center justify-center">
        <h2 className={`mb-10 text-2xl text-white font-bold ${styles.latobold}`}>
          Available On
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {marketplaces.map(({ name, img }) => (
            <img
              key={name}
              src={img}
              alt={`${name} logo`}
              className="w-20 md:w-24 lg:w-28 object-contain"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableOn;
