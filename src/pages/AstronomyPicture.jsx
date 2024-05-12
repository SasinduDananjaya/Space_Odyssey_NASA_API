import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css'
import { API_KEY, ASTRONOMY_PICTURE_URL } from '../utils/constants';
import Loader from '../components/Loader';

const AstronomyPicture = () => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchApodData = async () => {
      try {
        const response = await axios.get(
          `${ASTRONOMY_PICTURE_URL}apod?api_key=${API_KEY}&date=${date}`
        );
        setApodData(response.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching APOD data:', error);
      }
    };
    fetchApodData();
  }, [date]);

  const renderApod = () => {

    if (!apodData) {
      return <p className='py-3'>Data Not Available for This Date.</p>;
    }
    
    if (loading) {
      return <Loader />; // Show the Loader component while loading
    }

    const { title, url, explanation, media_type } = apodData;
    if (media_type === 'image') {
      return (
        <>
          <img src={url} alt={title} className="max-w-full h-auto mx-auto mt-5 border-2 border-white" />
          <p className="mt-2 items-center text-white px-24 text-justify py-8">{explanation}</p>
        </>
      );
    } else if (media_type === 'video') {
      return (
        <>
          <div className="video-container">
            <iframe
              title={title}
              src={url}
              frameBorder="1"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full px-24"
            ></iframe>
          </div>
          <p className="mt-2 items-center text-white px-24 text-justify py-8 border-solid border-white">{explanation}</p>
        </>
      );
    }
  };

  return (
    <div className="flex flex-col items-center">
      <label htmlFor="date-picker" className="block text-sm font-medium text-white font-bold pt-5 lg:text-lg">
        Select Date
      </label>
      <input
        type="date"
        id="date-picker"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="p-2 border border-gray-300 rounded-lg text-center text-black"
        min="1995-06-20"
        max={new Date().toISOString().split('T')[0]}
      />
      {renderApod()}
    </div>
  );
};

export default AstronomyPicture;

