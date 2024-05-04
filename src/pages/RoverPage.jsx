import { useQuery } from "@tanstack/react-query";
import Card from "../components/Card";
import Loader from "../components/Loader";
import axios from "axios";
import { API_KEY, DEFAULT_ROVER_URL } from "../utils/constants";
import { useState } from "react";
import '../index.css'


const RoverPage = () => {
  const [roverType, setRoverType] = useState("all");
  const [page, setPage] = useState(1);

  const { error, isLoading, data } = useQuery({
    queryKey: ["marsData", roverType, page],
    queryFn: () =>
      axios
        .get(
          roverType === "all"
            ? `${DEFAULT_ROVER_URL}&page=${page}`
            : `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${roverType}&page=${page}&api_key=${API_KEY}`
        )
        .then((res) => res.data.photos),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    console.log(`Mars Error: ${error.message}`);
  }

  if (!Array.isArray(data)) {
    <p>Rover Data not Available</p>;
  }

  const items = data?.map((item, index) => {
    return (
      <Card
        image={item.img_src}
        roverName={item.camera.full_name}
        earthDate={item.earth_date}
        key={index}
      />
    );
  });

  const handleChange = (e) => {
    setRoverType(e.target.value);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <div className="w-full drop-shadow-lg mx-auto sticky top-[96px] py-2  overflow-hidden mt-6 mb-6 flex flex-wrap justify-center items-center bg-[#e2e5ff] text-black">
        <span>
          <b>Select Camera: &nbsp;</b>
        </span>
        <select
          className=" border-[2px] rounded-br-md rounded-tl-md px-2 border-[#cd9a33] w-auto"
          onChange={handleChange}
          value={roverType}
        >
          <option value={"all"}>All Rovers Cameras</option>
          <option value={"FHAZ"}>Front Hazard Avoidance Camera</option>
          <option value={"RHAZ"}>Rear Hazard Avoidance Camera</option>
          <option value={"MAST"}>Mast Camera</option>
          <option value={"MAHLI"}>Mars Hand Lens Imager</option>
          <option value={"MARDI"}>Mars Descent Imager</option>
        </select>
        <span className="ml-2">&nbsp; &nbsp;<b>Page: {page}</b></span>
      </div>
      <div className="flex justify-center mt-4 mb-8">
          <button
            className="bg-[#FF7800] hover:bg-[#ffbf00] rounded-xl p-2 mx-2"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            <b>Previous Page</b>
          </button>
          <button
            className="bg-[#FF7800] hover:bg-[#ffbf00] rounded-xl p-2 mx-2"
            onClick={() => handlePageChange(page + 1)}
          >
            <b>Next Page</b>
          </button>
      </div>
      <div className="background-image-mars">
        <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 lg:gap-8">
          {items}
        </div>
        <div className="flex justify-center mt-4 mb-8">
          <button
            className="bg-[#FF7800] hover:bg-[#ffbf00] rounded-xl p-2 mx-2"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            <b>Previous Page</b>
          </button>
          <button
            className="bg-[#FF7800] hover:bg-[#ffbf00] rounded-xl p-2 mx-2"
            onClick={() => handlePageChange(page + 1)}
          >
            <b>Next Page</b>
          </button>
        </div>
      </div>
    </>
  );
};

export default RoverPage;
