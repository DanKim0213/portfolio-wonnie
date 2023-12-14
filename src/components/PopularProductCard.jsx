import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price, stars, onClick }) => {
  return (
    <div onClick={onClick} className=" hover:cursor-pointer ">
      <div className="h-[320px] w-[240px]">
        <img src={imgURL} alt={name} className="h-[100%] w-[100%]" />
      </div>
      <div className="mt-8 flex gap-2.5">
        <img src={star} alt="rating icon" width={24} height={24} />
        <span className="font-montserrat text-xl text-slate-gray">({stars})</span>
      </div>
      <h3 className="mt-2 font-palanquin text-2xl font-bold  ">{name}</h3>
      <p className="mt-2 font-montserrat text-2xl font-bold text-coral-red">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
