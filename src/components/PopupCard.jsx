import { X } from "lucide-react";

const Popup = ({ image, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white text-black h-[80%] rounded-md overflow-hidden">
        <div className="relative">
          <img src={image} alt="Mars Rover" className="w-full h-full" />
          <button
            onClick={onClose}
            className="absolute top-0 right-0 m-2 hover:text-black"
          >
            <X color="#fff" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
