import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import swp1 from "../../public/home/slide1.jpg"
import swp2 from "../../public/home/slide2.jpg"
import swp3 from "../../public/home/slide3.jpg"
import swp4 from "../../public/home/slide4.jpg"
import swp5 from "../../public/home/slide5.jpg"
import SectionTitle from '../Components/SectionTitle';

const Swipers = () => {
    return (
        <div>
            <SectionTitle
            subHeading={"From 10.00am to 10.00pm"}
            heading={"order online"}
            ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-10 mb-24"
      >
        <SwiperSlide>
            <img src={swp1} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-black font-itim'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={swp2} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-black font-itim'>pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={swp3} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-black font-itim'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={swp4} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-black font-itim' >desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={swp5} alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-black font-itim'>Salads</h3>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Swipers;