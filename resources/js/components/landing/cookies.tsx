import styles from "@/components/css/Style.module.css";

const Cookies = () => {
    return (
        <div className="w-full text-center">
            <h1 className={`my-10 text-2xl text-[#ff6abc] ${styles.latobold}`}>Semesta Kami</h1>
            <div className="w-full flex flex-wrap justify-center items-center gap-8 pb-16">
                <div className="group max-w-sm rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                    <div className="relative">
                        <img
                        src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt=""
                        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 transition" />
                    </div>

                    <div className="p-4">
                        <h3 className="font-semibold text-lg text-[#ff6abc]">Food Highlight</h3>
                        <p className="text-sm text-gray-500">
                        Fresh & delicious
                        </p>
                    </div>
                </div>
                <div className="group max-w-sm rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                    <div className="relative">
                        <img
                        src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt=""
                        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 transition" />
                    </div>

                    <div className="p-4">
                        <h3 className="font-semibold text-lg text-[#ff6abc]">Food Highlight</h3>
                        <p className="text-sm text-gray-500">
                        Fresh & delicious
                        </p>
                    </div>
                </div>
                <div className="group max-w-sm rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                    <div className="relative">
                        <img
                        src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt=""
                        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 transition" />
                    </div>

                    <div className="p-4">
                        <h3 className="font-semibold text-lg text-[#ff6abc]">Food Highlight</h3>
                        <p className="text-sm text-gray-500">
                        Fresh & delicious
                        </p>
                    </div>
                </div>
                <div className="group max-w-sm rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                    <div className="relative">
                        <img
                        src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt=""
                        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 transition" />
                    </div>

                    <div className="p-4">
                        <h3 className="font-semibold text-lg text-[#ff6abc]">Food Highlight</h3>
                        <p className="text-sm text-gray-500">
                        Fresh & delicious
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cookies;