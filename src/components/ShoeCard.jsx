const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.thumbnail) {
      changeBigShoeImage(imgURL.thumbnail);
    }
  };

  return (
    <div
      className={`flex flex-1  items-center justify-center `}
      onClick={handleClick}
    >
      <div
        className={`rounded-xl ring-inset ring-coral-red ${
          bigShoeImg === imgURL.id && "ring-2"
        } h-[20vw] w-[20vw] cursor-pointer bg-card bg-cover bg-center p-4 lg:h-40 lg:w-40`}
      >
        <img
          src={imgURL.thumbnail}
          alt="shoe colletion"
          className="h-[100%] w-[100%] object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;

/*
 * TODO: div.bg > img 로 사이즈 조정하자
 */
