import { useCallback, useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { ShoeCard } from "../components/index";
import { BiAlignLeft } from "react-icons/bi";
import { useClickAway } from "react-use";

const Modal = ({ isOpen, onClose, disabled, project, title }) => {
  const [thumbnail, setThumbnail] = useState(project.product[0].thumbnail);
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setThumbnail(project.product[0].thumbnail);
  }, [project]);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  const ref = useRef(null);
  useClickAway(ref, () => handleClose());

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="
        fixed inset-0 z-50 
        flex items-center 
        justify-center overflow-y-auto overflow-x-hidden 
        bg-neutral-800/70 
        outline-none
        focus:outline-none
      "
    >
      <div
        ref={ref}
        className="
        relative 
        mx-auto
        my-6
        h-full
        w-full
        md:h-auto
        md:w-4/6 
        lg:h-auto 
        lg:w-3/6
        xl:w-2/5
        "
      >
        {/*content*/}
        <div
          className={`
          translate
          h-full
          duration-300
          ${showModal ? "translate-y-0" : "translate-y-full"}
          ${showModal ? "opacity-100" : "opacity-0"}
        `}
        >
          <div
            className="
            translate
            relative
            flex
            h-full
            w-full 
            flex-col 
            rounded-lg 
            border-0 
            bg-white 
            shadow-lg 
            outline-none 
            focus:outline-none 
            md:h-auto 
            lg:h-auto
          "
          >
            {/*header*/}
            <div
              className="
              relative 
              flex 
              items-center
              justify-center
              rounded-t
              border-b-[1px]
              p-6
              "
            >
              <button
                className="
                  absolute
                  left-9 
                  border-0
                  p-1
                  transition
                  hover:opacity-70
                "
                onClick={handleClose}
              >
                <IoMdClose size={18} />
              </button>
              <div className="text-lg font-semibold">{title}</div>
            </div>
            {/*body*/}
            <div className="relative flex-auto p-6 pb-20">
              <div className="relative flex h-[75vh] justify-center bg-primary bg-hero bg-cover bg-center px-1 py-10">
                <div className="group absolute right-4 top-4 rounded-full bg-white p-2 shadow-xl hover:rounded-xl hover:p-4 ">
                  <BiAlignLeft
                    size={24}
                    className="text-slate-gray hover:cursor-pointer group-hover:hidden"
                  />
                  <div className="hidden text-slate-gray group-hover:block">
                    <div className="mb-4">
                      {project.desc.map((paragraph, idx) => (
                        <p className="break-keep" key={idx}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <a
                      className="rounded-full bg-coral-red px-4 py-2 text-white no-underline transition hover:shadow-xl"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      보러가기
                    </a>
                  </div>
                </div>
                <img
                  src={thumbnail}
                  alt="shoe colletion"
                  className="h-[100%] w-[100%] object-contain"
                />
                <div className="absolute -bottom-[10%] flex gap-4">
                  {project.product.map((image, index) => (
                    <ShoeCard
                      key={index}
                      index={index}
                      imgURL={image}
                      changeBigShoeImage={(shot) => setThumbnail(shot)}
                      bigShoeImg={thumbnail}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
