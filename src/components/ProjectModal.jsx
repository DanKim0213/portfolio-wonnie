import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { ShoeCard } from '../components/index'
import { BiAlignLeft } from "react-icons/bi";

const Modal = ({ isOpen, onClose, disabled, screenshots, title }) => {
  const [thumbnail, setThumbnail] = useState(screenshots[0].thumbnail)
  const [showModal, setShowModal] = useState(isOpen);
  
  useEffect(() => {
    setThumbnail(screenshots[0].thumbnail);
  }, [screenshots])

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
    }, 300)
  }, [onClose, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
          flex justify-center items-center 
          overflow-x-hidden overflow-y-auto 
          fixed inset-0 z-50 
          outline-none 
          focus:outline-none
          bg-neutral-800/70
        "
      >
        <div className="
          relative 
          w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto 
          h-full 
          lg:h-auto
          md:h-auto
          "
        >
          {/*content*/}
          <div className={`
            translate
            duration-300
            h-full
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}
          `}>
            <div className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-white 
              outline-none 
              focus:outline-none
            "
            >
              {/*header*/}
              <div className="
                flex 
                items-center 
                p-6
                rounded-t
                justify-center
                relative
                border-b-[1px]
                "
              >
                <button
                  className="
                    p-1
                    border-0 
                    hover:opacity-70
                    transition
                    absolute
                    left-9
                  "
                  onClick={handleClose}
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">
                  {title}
                </div>
              </div>
              {/*body*/}
              <div className="relative p-6 pb-20 flex-auto">
                <div className="relative flex justify-center bg-primary bg-hero bg-cover bg-center py-10 px-1 h-[75vh]">
                  <div className="absolute top-4 right-4 rounded-full shadow-xl bg-white p-2 group hover:rounded-xl hover:p-4 ">
                    <BiAlignLeft size={24} className="group-hover:hidden text-slate-gray hover:cursor-pointer" />
                    <div className="group-hover:block hidden text-slate-gray">
                    <p>
                      (한글 소개) Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value
                    </p>
                      <a className="rounded-full px-4 py-2 bg-coral-red no-underline text-white transition hover:shadow-xl" 
                        href="https://github.com/dankim0213" 
                        target="_blank" rel="noreferrer">
                          보러가기
                      </a>
                    </div>
                  </div>
                  <img
                    src={thumbnail}
                    alt="shoe colletion"
                    className="object-contain w-[100%] h-[100%]"
                  />
                  <div className="absolute -bottom-[10%] flex gap-4">
                    {screenshots.map((image, index) => (
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
    </>
  );
}

export default Modal;