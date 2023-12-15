import { ReviewCard } from "../components";
import { reviews } from "../constants";

const CoworkerReviews = () => {
  return (
    <section id="reviews" >
      <h3 className="text-center font-palanquin text-4xl font-bold">
        What My
        <span className="text-coral-red"> Coworkers </span>
        Say?
      </h3>
      <p className="info-text m-auto mt-4 text-center">
        저와 함께 프론트엔드 개발자로서 <br />
        2023년을 같이 고생한 SSAFY 동료들의 리뷰입니다.   
      </p>

      <div className="mt-24 flex flex-col items-center justify-evenly gap-14 lg:flex-row">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CoworkerReviews;
