import React from 'react';
import { SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { StyledSwiper, ImageSlider } from './styleSlider';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
	SwiperCore.use([Autoplay]);
	return (
		<>
			<StyledSwiper
				spaceBetween={10}
				slidesPerView={1}
				loop={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				navigation={true}
				speed={800}
				pagination={{
					clickable: true,
				}}
				modules={[Navigation, Pagination]}>
				<SwiperSlide>
					<ImageSlider src="/image/slider/slider2.jpg" alt="slide0" />
				</SwiperSlide>
				<SwiperSlide>
					<ImageSlider src="/image/slider/slider3.jpeg" alt="slide1" />
				</SwiperSlide>
				<SwiperSlide>
					<ImageSlider src="/image/slider/slider4.jpeg" alt="slide2" />
				</SwiperSlide>
				<SwiperSlide>
					<ImageSlider src="/image/slider/slider5.jpg" alt="slide3" />
				</SwiperSlide>
				<SwiperSlide>
					<ImageSlider src="/image/slider/slider6.jpg" alt="slide4" />
				</SwiperSlide>
			</StyledSwiper>
		</>
	);
};

export default Slider;
