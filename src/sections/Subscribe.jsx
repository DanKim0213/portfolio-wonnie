import { Button } from "../components";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center"
    >
      <h3 className="font-palanquin text-4xl font-bold lg:max-w-md ">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <div className="flex flex-col gap-5 rounded-full border-0 border-slate-gray p-2.5 sm:flex-row sm:border  ">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="flex-1 rounded-full border border-slate-gray px-5 py-4 text-slate-gray sm:border-0 sm:py-0"
        />
        <div>
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
