const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="min-w-[250px] flex-1 rounded-[20px] px-10 py-16 shadow-3xl">
      <div
        className="flex h-11 w-11 items-center justify-center rounded-full
       bg-coral-red"
      >
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl font-bold ">{label}</h3>
      <p className="mt-3 break-words font-montserrat text-lg  text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
