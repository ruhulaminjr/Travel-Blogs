import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const slider = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <div className="container mx-auto">
        <Slider {...settings}>
          {slider.map((slide, idx) => (
            <div>
              <div
                className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-24 bg-cover h-96 lg:h-1/2"
                style={{
                  backgroundImage: `url(https://raw.githubusercontent.com/ruhulaminjr/Website-Images/main/gamebox/godofwar.jpg)`,
                  backgroundPosition: "center",
                }}
              >
                <div className="text-center flex flex-col gap-5 items-center">
                  <h1 className="text-2xl md:text-4xl font-semibold text-white uppercase lg:text-3xl">
                    God Of War{" "}
                  </h1>
                  <p className="text-white text-md w-full md:w-2/3 lg:w-1/2">
                    His vengeance against the Gods of Olympus years behind him,
                    Kratos now lives as a man in the realm of Norse Gods and
                    monsters
                  </p>
                  <div>
                    <button className="primary-btn flex items-center gap-2">
                      Watch Trailer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Header;
