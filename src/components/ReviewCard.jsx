const ReviewCard = ({ imgURL, customerName, feedback }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={imgURL}
        alt="customer"
        className="h-[120px] w-[120px] rounded-full object-cover"
      />
      <p className="info-text mt-6 max-w-sm break-keep text-center">
        {feedback}
      </p>
      <h3 className="info-text mt-1 text-center font-palanquin font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
