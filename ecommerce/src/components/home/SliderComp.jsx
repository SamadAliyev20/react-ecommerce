import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="py-14">
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-6xl font-bold">Top quality shoes are here</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae ipsam aspernatur doloremque consequuntur voluptas
              consequatur incidunt repellat, expedita provident praesentium!
            </div>
            <div className="border rounded-full text text-3xl cursor-pointer w-[200px] h-16 flex items-center justify-center bg-gray-200">
              Incele
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e777c881-5b62-4250-92a6-362967f54cca/air-force-1-07-ayakkab%C4%B1s%C4%B1-Dz225W.png"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div>
            <div className="text-6xl font-bold">
              En kaliteli ayakkabılar burada
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae ipsam aspernatur doloremque consequuntur voluptas
              consequatur incidunt repellat, expedita provident praesentium!
            </div>
            <div className="border rounded-full text text-3xl cursor-pointer w-[200px] h-16 flex items-center justify-center bg-gray-200">
              Incele
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e777c881-5b62-4250-92a6-362967f54cca/air-force-1-07-ayakkab%C4%B1s%C4%B1-Dz225W.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
