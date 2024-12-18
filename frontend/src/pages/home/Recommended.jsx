import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import BookCard from '../books/BookCard';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

const Recommended = () => {
      const { data: books =[]} = useFetchAllBooksQuery();
    
  return (
    <div className='py-10'>
        <h2 className="text-3xl font-semibold">Recommended for you</h2>
        {/* cards */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {books.length > 0 && books.slice(8,18).map((book, index) => {
          return (
            <>
              <SwiperSlide key={index}>
                <BookCard book={book} />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </div>
  )
}

export default Recommended