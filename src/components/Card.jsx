import { useState } from "react";
import Popup from "./PopupCard";

const Card = ({ image, earthDate, roverName }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div className="w-[300px] h-[400px] bg-white text-black rounded-2xl overflow-hidden mx-auto border-4 border-[#FFF]">
      <div className={`w-full h-[60%] `} onClick={openPopup}>
        <img
          src={image}
          alt="Mars Rover"
          className="w-full h-full cursor-pointer hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold">{roverName}</h3>
        <p className="text-gray-600"><b>Earth Date: </b>{earthDate}</p>
        {isPopupOpen && (
          <Popup
            image={image}
            earthDate={earthDate}
            roverName={roverName}
            onClose={closePopup}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
