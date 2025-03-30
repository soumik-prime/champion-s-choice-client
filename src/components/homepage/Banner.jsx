import React, { useEffect, useState } from 'react';
import banner2 from '../../assets/banner1.jpg'
import banner4 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.png'
import banner1 from '../../assets/banner4.png'

const Banner = () => {
  const slides = [banner1, banner2, banner3, banner4];
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, slides.length])

  return (
    <div>
      <div className="carousel w-full min-h-64  md:h-96">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide}
                className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-60 md:h-80 transition-all ease-in-out duration-500 ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              />
            ))}
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button onClick={() => setCurrentSlide(prev => (prev + slides.length - 1) % slides.length)} className="btn btn-circle">❮</button>
            <button onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)} className="btn btn-circle">❯</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;