const HomeCard = ({ image, description }) => {
  return (
    <div className="group w-full sm:w-[16rem] h-[18rem] sm:items-center sm:justify-items-center lg:mr-8 rounded-lg overflow-hidden cursor-pointer mb-6 lg:mb-0 border border-white flex flex-col">
      <div className="h-[60%] group-hover:scale-110 duration-500">
        <img src={image} className="w-full h-full object-cover" />
      </div>

      <div className="h-[40%] bg-white p-4">
        <p className="text-sm text-justify text-black">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;



