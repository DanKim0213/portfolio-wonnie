import { useEffect } from "react";
import { projects } from "../constants";
import { PopularProductCard } from "../components";
import Modal from "../components/ProjectModal";
import { useState } from "react";
// import { auctopus1, auctopus2, auctopus3, toonbti1, toonbti2, toonbti3, days1, days2, days3 } from "../assets/images";
// import {  toonbti1, toonbti2, toonbti3,  } from "../assets/images";

const PopularProducts = () => {
  const [title, setTitle] = useState(projects[0].name)
  const [screenshots, setScreenshots] = useState(projects[0].product);
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
    <section id="projects" >
      <div className="flex flex-col gap-5">
        <h2 className="font-palanquin text-4xl font-bold">
          My <span className="text-coral-red"> Popular </span> Projects
        </h2>
        <p className="mt-2 font-montserrat text-slate-gray ">
          프론트엔드 스킬을 꾸준히 기르며 발전하고 있습니다. 제가 참여한 프로젝트를 소개합니다.
        </p>
      </div>
      <div className="my-16 grid grid-cols-1 gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project) => (
          <PopularProductCard key={project.name} {...project} onClick={() => {
            setTitle(project.name);
            setScreenshots(project.product);
            openModal();
          }} />
        ))}
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} screenshots={screenshots} title={title}  />
    </section>
  );
};

export default PopularProducts;
