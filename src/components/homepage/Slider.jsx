import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import digitalMarket from '../../assets/digital.jpg';
import web from '../../assets/web.jpg';
import skilbook from '../../assets/skilbook.png';

const Slider = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={35}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {/* digitalMarket */}
<SwiperSlide>
  <div className="relative">
    <img
      src={digitalMarket}
      className="w-full h-[400px] rounded-4xl object-cover"
    />
    <div className="absolute text-white inset-0 flex flex-col justify-center items-center ">
      <h2 className=" text-2xl md:text-5xl font-bold">Digital marketplace</h2>
      <p className="mt-4 text-sm md:text-lg">Learn Digital marketplace  Through Interactive Lessons</p>
      <button className="btn  text-white bg-[#278718] mt-6">Visit Now</button>
    </div>
  </div>
</SwiperSlide>
{/* web */}
<SwiperSlide>
  <div className="relative">
    <img
      src={web}
      className="w-full h-[400px] rounded-4xl object-cover"
    />
    <div className="absolute text-white inset-0 flex flex-col justify-center items-center ">
      <h2 className="text-3xl md:text-5xl font-bold">Web Design</h2>
      <p className="mt-4 text-sm md:text-lg">Learn Web Design Through Interactive Lessons</p>
      <button className="btn  text-white bg-[#278718] mt-6">Visit Now</button>
    </div>
  </div>
</SwiperSlide>
{/* skilbook */}
<SwiperSlide>
  <div className="relative">
    <img
      src={skilbook}
      className="w-full h-[400px] rounded-4xl object-cover"
    />
    <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
      <h2 className=" text-2xl md:text-5xl font-bold">Graphic Design</h2>
      <p className="mt-4 text-sm md:text-lg">Learn Graphic Design Through Interactive Lessons</p>
      <button className="btn text-white bg-[#278718] mt-6">Visit Now</button>
    </div>
  </div>
</SwiperSlide>

    </Swiper>
  );
};

export default Slider;