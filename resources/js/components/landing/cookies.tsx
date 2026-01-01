import styles from "@/components/css/Style.module.css";

const universeItems = [
  {
    title: "Food Highlight",
    description: "Fresh & delicious",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Food Highlight",
    description: "Fresh & delicious",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Food Highlight",
    description: "Fresh & delicious",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Food Highlight",
    description: "Fresh & delicious",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const Cookies = () => {
  return (
    <section className="w-full px-4 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2
          className={`mb-12 text-2xl text-[#ff6abc] ${styles.latobold}`}
        >
          Our Universe
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {universeItems.map((item, index) => (
            <article
              key={index}
              className="group rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-white"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 transition" />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg text-[#ff6abc]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cookies;
