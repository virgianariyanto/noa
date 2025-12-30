import imageStory from '@/assets/images/pexels-pixabay-210538.jpg';

const Story = () => {
    return (
        <div className='w-full text-center h-screen flex flex-col items-center justify-center mt-80 md:mt-0'>
            <h1 className="my-10 text-2xl text-[#ff6abc] font-bold">Our Story</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <img src={imageStory} className="xl:w-1/6 w-1/2 rounded-2xl" alt="" />
                <p className="max-w-xl text-left">
                    Noa. didirikan pada tahun 2023 oleh sekelompok penggemar kue kering yang memiliki visi untuk menciptakan cookies dengan karakter unik dan cita rasa yang tak terlupakan. Berawal dari dapur sederhana, kami berkomitmen untuk menggunakan bahan-bahan berkualitas tinggi dan resep tradisional yang diwariskan dari generasi ke generasi.
                    <br /><br />
                    Kami percaya bahwa setiap gigitan cookies harus memberikan pengalaman yang istimewa. Oleh karena itu, kami selalu berinovasi dengan berbagai varian rasa dan tekstur, sambil tetap mempertahankan keaslian cita rasa cookies klasik. Noa. bukan hanya sekadar merek cookies, tetapi juga representasi dari dedikasi kami terhadap seni pembuatan kue kering.
                    <br /><br />
                    Bergabunglah dengan kami dalam perjalanan ini dan rasakan sendiri kenikmatan cookies dengan karakter yang kami banggakan. Selamat datang di dunia Noa., di mana setiap cookies memiliki cerita untuk diceritakan.
                </p>
            </div>
        </div>
    );
};

export default Story;