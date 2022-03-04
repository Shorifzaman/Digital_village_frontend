import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import required modules
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { fetchAllReview } from '../../../../redux/slices/review/reviewSlice';
import Review from './Review/Review';

const Reviews = () => {
  const allReview = useSelector((state) => state.reviews.allReviews);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllReview());
  }, []);
  return (
    <div className="bg-gray-50">
      <div className="pt-[100px]">
        <p className="text-center">TESTIMONIALS</p>
        <h1 className=" text-2xl  text-center font-bold py-2   text-primary">
          WHAT PEOPLE SAY ABOUT US
        </h1>
        <p className="px-[100px] text-center">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took
        </p>
      </div>

      <Swiper
        slidesPerGroup={2}
        autoplay={{
          delay: 3500,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // 1024: {
          //   slidesPerView: 4,
          //   spaceBetween: 10,
          // },
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Autoplay]}
        className="swiper"
      >
        <SwiperSlide className="flex justify-center p-10 space-x-2 ml-[400px]">
          {allReview?.map((reviews) => (
            <Review key={reviews._id} reviews={reviews} />
          ))}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Reviews;
