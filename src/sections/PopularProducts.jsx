import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <section id="products">
      <div className="flex flex-col gap-5">
        <h2 className="font-palanquin text-4xl font-bold">
          Our <span className="text-coral-red"> Popular </span> Products
        </h2>
        <p className="mt-2 font-montserrat text-slate-gray ">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
