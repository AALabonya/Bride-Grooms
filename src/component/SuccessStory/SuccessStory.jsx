import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useState } from "react";
import {
    Navigation
} from 'swiper/modules';

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../pages/Loading";

const SuccessStory = (date) => {
    const [rating, setRating] = useState(0);
      const axiosSecure = useAxiosSecure()
  

    const { data:reviews=[], isLoading} = useQuery({
        queryKey: ['successStory', date],
        queryFn: async () => {
            const res = await axiosSecure.get(`/successStory?date=${date}}`)
            return res.data;
        }

    })

 if(isLoading){
    return <Loading></Loading>
 }
    return (
        <div>
            <SectionTitle subHeading="our" heading="Success Story"> </SectionTitle>
            <div >
                <div className="w-full mx-auto">
                    <Swiper
                        breakpoints={{
                            570: { slidesPerView: 1, spaceBetween: 70 },
                            768: { slidesPerView: 2, spaceBetween: 10 },
                            1152: { slidesPerView: 3, spaceBetween: 50 }
                        }}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        navigation={true}
                    >

{
    reviews.map(review => <SwiperSlide key={review._id}>

           <div >
           
                
                   <div className="text-center bg-white rounded-lg mb-5">

                    <div className="flex justify-start  mb-5">

                        <img style={{ borderRadius: "0 300px 200px 200px" }} src={review.image} alt="" className="w-full h-72 items-center text-center mt-3 " /></div>
                    <div className="flex justify-center mb-5">
                        <Rating
                            style={{ maxWidth: 140 }}
                            value={rating}
                            onChange={setRating}
                            isRequired
                        />
                    </div>
                    <div className="flex justify-center mb-5"><p className="max-w-lg"> Marriage Date:{review.date}</p></div>
                    <p className="text-lg text-orange-400 mb-5 w-[400px] text-center mx-auto pb-7" > {review.successStoryReview}</p>
                </div>
         
            </div>
      
        </SwiperSlide>)
}
                    </Swiper>
                </div>
            </div>

        </div>
    );
};

export default SuccessStory;

