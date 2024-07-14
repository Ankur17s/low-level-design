import { useEffect } from "react";
import { useState } from "react";

const ImageSlider = () => {
  const images = [
    "https://plus.unsplash.com/premium_photo-1674682034730-95dbc3cce1c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FscGFwZXJzfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1673448760651-7e1e6fd79e40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2FscGFwZXJzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1714236422987-91f90254f0c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2FscGFwZXJzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1648006916092-9abc41e56b7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdhbHBhcGVyc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1673448760764-9f34f6902515?dpr=2&w=306&auto=format&fit=crop&q=60&crop=entropy&cs=tinysrgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8d2FscGFwZXJzfGVufDB8MHx8fDE3MjAxMjY3NjZ8MQ&ixlib=rb-4.0.3",
  ];
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const cleaAutoSlide = setInterval(() => {
      slideRightImg();
    }, 2500);

    return () => clearInterval(cleaAutoSlide);
  }, []);

  const slideLeftImage = () => {
    setActiveImg((active) => (active - 1 < 0 ? images.length - 1 : active - 1));
  };

  const slideRightImg = () => {
    setActiveImg((active) => (active + 1) % images.length);
  };
  return (
    <div>
      <div className="flex justify-center items-center m-2 p-2">
        <img
          className="h-20 cursor-pointer"
          src="https://w7.pngwing.com/pngs/120/417/png-transparent-font-awesome-arrow-web-typography-computer-icons-left-arrow-cdr-angle-rectangle.png"
          alt="left"
          onClick={slideLeftImage}
        />
        <img
          className="h-[500px] w-[800px] object-cover"
          src={images[activeImg]}
          alt="image"
        />
        <img
          className="h-20 cursor-pointer"
          src="https://w7.pngwing.com/pngs/66/875/png-transparent-arrow-computer-icons-right-arrow-angle-text-rectangle.png"
          alt="right"
          onClick={slideRightImg}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
