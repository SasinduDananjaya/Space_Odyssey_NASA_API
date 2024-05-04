import React, { useState, useEffect } from 'react';
import { EPIC_URL, API_KEY } from '../utils/constants';
import Loader from '../components/Loader';

const NasaEpicViewer = () => {
  const [date, setDate] = useState('2019-05-30');
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchImages = async () => {
    const response = await fetch(`${EPIC_URL}date/${date}?api_key=${API_KEY}`);
    if (response.ok) {
      const data = await response.json();
      setImages(data);
      setCurrentIndex(0);
    } else {
      setImages([]);
    }
    setLoading(false); // Set loading to false after data is fetched
  };

  useEffect(() => {
    fetchImages();
  }, [date]);

  useEffect(() => {
    let intervalId;
    if (autoplay && images.length > 1) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [autoplay, images]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleNextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleToggleAutoplay = () => {
    setAutoplay(!autoplay);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mb-4 pt-2">
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          className="p-2 border border-gray-300 rounded-lg text-center text-black"
          min="2015-09-01"
          max={new Date().toISOString().split('T')[0]}
        />
        <div className="flex mt-2">
          <button onClick={handlePrevImage} className="bg-[#FF7800] hover:bg-[#ffae00] text-white font-bold py-2 px-4 rounded-xl">
            {'<'}
          </button>
          <p className="text-white font-bold mt-2 px-2">{`${currentIndex + 1} of ${images.length}`}</p>
          <button onClick={handleNextImage} className="bg-[#FF7800] hover:bg-[#ffae00] text-white font-bold py-2 px-4 rounded-xl">
            {'>'}
          </button>
        </div>
        <div className="mt-2">
          <button onClick={handleToggleAutoplay} className={`bg-[#ec8831] hover:bg-[#ffae00] text-white font-bold py-2 px-4 rounded ${autoplay ? 'bg-red-500 hover:bg-red-700' : ''}`}>
            {autoplay ? 'Stop Autoplay' : 'Start Autoplay'}
          </button>
        </div>
      </div>
      {loading ? ( //render the Loader component
        <Loader />
      ) : images.length > 0 ? (
        <div className="text-center">
          <p className="mt-2 text-sm lg:text-xl">{images[currentIndex].caption}</p>
          <div className='flex justify-center'>
            <img
              src={`https://epic.gsfc.nasa.gov/archive/natural/${date.split('-').join('/')}/png/${images[currentIndex].image}.png`}
              alt="NASA EPIC"
              className="px-6 py-1 lg:px-28"
              height="70%"
              width="70%"
            />
          </div>
        </div>
      ) : (
        <p className="text-white">No data for selected date</p>
      )}
    </div>
  );
};

export default NasaEpicViewer;