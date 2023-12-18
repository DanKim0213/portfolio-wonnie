import { projects } from "../constants";
import { PopularProductCard } from "../components";
import Modal from "../components/ProjectModal";
import { useState } from "react";

const PopularProducts = () => {
  const [title, setTitle] = useState(projects[0].name);
  const [project, setProject] = useState(projects[0]);
  const [isOpen, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  return (
    <section id="projects">
      <div className="flex flex-col gap-5">
        <h2 className="font-palanquin text-4xl font-bold">
          My <span className="text-coral-red"> Popular </span> Projects
        </h2>
        <p className="mt-2 font-montserrat text-slate-gray ">
          프론트엔드 스킬을 꾸준히 기르며 발전하고 있습니다. 제가 참여한
          프로젝트를 소개합니다.
        </p>
      </div>
      <div className="my-16 grid grid-cols-1 gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((prj) => (
          <PopularProductCard
            key={prj.name}
            {...prj}
            onClick={() => {
              setTitle(prj.name);
              setProject(prj);
              openModal();
            }}
          />
        ))}
      </div>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        project={project}
        title={title}
      />
    </section>
  );
};

export default PopularProducts;
