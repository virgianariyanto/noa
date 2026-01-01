import imageStory from "@/assets/images/pexels-pixabay-210538.jpg";
import styles from "@/components/css/Style.module.css";

const Story = () => {
  return (
    <section className="w-full px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2
          className={`mb-10 text-center text-2xl text-[#ff6abc] font-bold ${styles.latobold}`}
        >
          Our Story
        </h2>

        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <img
            src={imageStory}
            alt="Story behind Noa cookies"
            className="w-full max-w-sm mx-auto rounded-2xl object-cover"
            loading="lazy"
          />

          <p className="text-left leading-relaxed">
            Noa. didirikan pada tahun 2023 oleh sekelompok penggemar kue kering
            yang memiliki visi untuk menciptakan cookies dengan karakter unik
            dan cita rasa yang tak terlupakan. Berawal dari dapur sederhana,
            kami berkomitmen untuk menggunakan bahan-bahan berkualitas tinggi
            dan resep tradisional yang diwariskan dari generasi ke generasi.
            <br /><br />
            Kami percaya bahwa setiap gigitan cookies harus memberikan
            pengalaman yang istimewa. Oleh karena itu, kami selalu berinovasi
            dengan berbagai varian rasa dan tekstur, sambil tetap
            mempertahankan keaslian cita rasa cookies klasik. Noa. bukan hanya
            sekadar merek cookies, tetapi juga representasi dari dedikasi kami
            terhadap seni pembuatan kue kering.
            <br /><br />
            Bergabunglah dengan kami dalam perjalanan ini dan rasakan sendiri
            kenikmatan cookies dengan karakter yang kami banggakan. Selamat
            datang di dunia Noa., di mana setiap cookies memiliki cerita untuk
            diceritakan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;
