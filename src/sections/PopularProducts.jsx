import { useEffect } from "react";
import { toonbti, products2 } from "../constants";
import { PopularProductCard } from "../components";
import Modal from "../components/ProjectModal";
import { useState } from "react";
// import { auctopus1, auctopus2, auctopus3, toonbti1, toonbti2, toonbti3, days1, days2, days3 } from "../assets/images";
// import {  toonbti1, toonbti2, toonbti3,  } from "../assets/images";

const PopularProducts = () => {
  const [screenshots, setScreenshots] = useState(toonbti);
  const [isOpen, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  useEffect(() => {
    // Add or remove the 'modal-open' class on the body based on the modal's open state
    if (isOpen) {
        document.body.classList.add('modal-open');
    } else {
        document.body.classList.remove('modal-open');
    }

    // Cleanup on unmount
    return () => {
        document.body.classList.remove('modal-open');
    };
}, [isOpen]);

  return (
    <section id="projects">
      <div className="flex flex-col gap-5">
        <h2 className="font-palanquin text-4xl font-bold">
          My <span className="text-coral-red"> Popular </span> Projects
        </h2>
        <p className="mt-2 font-montserrat text-slate-gray ">
          (한글 소개) Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products2.map((product) => (
          <PopularProductCard key={product.name} {...product} onClick={() => {
            setScreenshots(product.product)
            openModal()
          }} />
        ))}
      </div>
        <Modal isOpen={isOpen} onClose={closeModal} screenshots={screenshots}  />
    </section>
  );
};

export default PopularProducts;
