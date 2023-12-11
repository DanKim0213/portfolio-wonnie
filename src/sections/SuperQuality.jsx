import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section id="about-us" className="block gap-10 lg:flex">
      <div className="flex-1">
        <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality </span> Shoes
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center ">
        <img
          src={shoe8}
          alt="product detail"
          className="max-h-[500px] max-w-[500px] object-contain "
        />
      </div>
    </section>
  );
};

export default SuperQuality;

/*
 * TODO: img tag's width & height 어떻게 처리하나? block tag의 max를 정해도 내부 el의 크기가 크면 뻗어나갈텐데?
 *
 * `object-fit: contain` maintaines its aspect ratio
 *
 * TODO: website width를 300px 로 줄일수 잇을까?
 */
