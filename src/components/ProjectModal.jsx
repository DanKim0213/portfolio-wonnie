import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { ShoeCard } from '../components/index'

// interface ModalProps {
//   isOpen?: boolean;
//   onClose: () => void;
//   onSubmit: () => void;
//   title?: string;
//   body?: React.ReactElement;
//   footer?: React.ReactElement;
//   actionLabel: string;
//   disabled?: boolean;
//   secondaryAction?: () => void;
//   secondaryActionLabel?: string;
// }

// import { toonbti1 } from "../constants";
// import { toonbti } from "../constants";
// import { toonbti1 } from "../assets/images";

const Modal = ({ isOpen, onClose, disabled, screenshots }) => {
  const [screenshot, setScreenshot] = useState(undefined)
  const [showModal, setShowModal] = useState(isOpen);
  
  useEffect(() => {
    setScreenshot(screenshots[0].thumbnail);
  }, [screenshots]);

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
    {/* TODO: set title */}
                  hoi
                </div>
              </div>
              {/*body*/}
              <div className="relative p-6 pb-20 flex-auto">
                <div className="relative flex justify-center bg-primary bg-hero bg-cover bg-center py-10 px-1 h-[75vh]">
                  <img
                    src={screenshot}
                    alt="shoe colletion"
                    className="object-contain w-[100%] h-[100%]"
                  />
                  <div className="absolute -bottom-[10%] flex gap-4">
                    {screenshots.map((image, index) => (
                      <ShoeCard
                        key={index}
                        index={index}
                        imgURL={image}
                        changeBigShoeImage={(shot) => setScreenshot(shot)}
                        bigShoeImg={screenshot}
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