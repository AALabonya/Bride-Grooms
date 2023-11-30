
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle'


const Banner = () => {
  return (
    <div className='overflow-x-hidden' >
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        navigation={true}
        modules={[Navigation, A11y]}
        className="mySwiper">

        <SwiperSlide>
          <div className='overflow-x-hidden'>
            <div className="relative mx-auto overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src=" https://i.ibb.co/qrRNQK8/wedding-archway-backyard-happy-wedding-couple-outdoors-before-wedding-ceremony-1.jpg"
                alt="img-blur-shadow" className="w-[1600px] h-[760px]" />
            </div>
            <div>
              <div className='text-center flex justify-center overflow-x-hidden'>
              <div className="absolute top-[35%]  ml-5 mt-6">
              <h1 className="lg:text-7xl font-bold text-white mt-16 mb-5"> Find your <br/> <span className="text-red-700">Right Match</span> Here</h1>
                <span className="font-bold  text-fuchsia-800 text-2xl">Worlds most trusted Matrimonal portal.</span>
                 </div>
                

              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src="https://i.ibb.co/BBBcMBB/beautiful-wedding-walk-nature-ukraine-sumy.jpg"
                alt="img-blur-shadow" className="w-[1600px] h-[760px]" />
            </div>
            <div>
              <div className='text-center flex justify-center '>
              <div className="absolute top-[35%]  ml-5 mt-6">
              <h1 className="lg:text-7xl font-bold text-white mt-16 mb-5"> Find your <br/> <span className="text-red-700">Right Match</span>Here</h1>
                <span className="font-bold  text-fuchsia-800  text-2xl">Worlds most trusted Matrimonal portal.</span>
                 </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src="https://i.ibb.co/fkDd8P9/banner4.webp"
                alt="img-blur-shadow" className="w-[1600px] h-[760px]" />
            </div>
            <div>
              <div className='text-center flex justify-center '>
              <div className="absolute top-[35%]  ml-5 mt-6">
              <h1 className="lg:text-7xl font-bold text-white mt-16 mb-5"> Find your <br/> <span className="text-red-700">Right Match</span>Here</h1>
                <span className="font-bold  text-fuchsia-800  text-2xl">Worlds most trusted Matrimonal portal.</span>
                 </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src="https://i.ibb.co/BBBcMBB/beautiful-wedding-walk-nature-ukraine-sumy.jpg"
                alt="img-blur-shadow" className="w-[1600px] h-[760px]" />
            </div>
            <div>
              <div className='text-center flex justify-center '>
              <div className="absolute top-[35%]  ml-5 mt-6">
              <h1 className="lg:text-7xl font-bold text-white mt-16 mb-5"> Find your <br/> <span className="text-red-700">Right Match</span> Here</h1>
                <span className="font-bold  text-fuchsia-800  text-2xl">Worlds most trusted Matrimonal portal.</span>
                 </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src="https://i.ibb.co/ZNgbngG/90065-haldi-ceremony-rimi-sen-1.webp"
                alt="img-blur-shadow" className="w-[1600px] h-[760px]" />
            </div>
            <div>
              <div className='text-center flex justify-center'>
              <div className="absolute top-[35%]  ml-5 mt-6">
              <h1 className="lg:text-7xl font-bold text-white mt-16 mb-5"> Find your <br/> <span className="text-red-700">Right Match</span> Here</h1>
                <span className="font-bold  text-fuchsia-800 text-2xl">Worlds most trusted Matrimonal portal.</span>
                 </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src="https://i.ibb.co/dWxdH0j/banner3.jpg"
                alt="img-blur-shadow" className="w-[1600px] h-[760px]" />
            </div>
            <div>
              <div className='text-center flex justify-center'>

              <div className="absolute top-[35%]  ml-5 mt-6">
              <h1 className="lg:text-7xl font-bold text-white mt-16 mb-5"> Find your <br/> <span className="text-red-700">Right Match</span>Here</h1>
                <span className="font-bold  text-fuchsia-800  text-2xl">Worlds most trusted Matrimonal portal.</span>
                 </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;











