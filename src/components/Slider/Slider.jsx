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
				paginationStyle={{ color: '#75ab37' }}
				nextButtonProps={{
					style: {
						color: '#75ab37',
					},
				}}
				prevButtonProps={{
					style: {
						color: '#75ab37',
					},
				}}
				modules={[Navigation, Pagination]}>
				<SwiperSlide>
					<ImageSlider src="/image/slider/0.jpg" alt="slide0" />
				</SwiperSlide>
				<SwiperSlide>
					<ImageSlider src="/image/slider/1.jpg" alt="slide1" />
				</SwiperSlide>
				<SwiperSlide>
					<ImageSlider src="/image/slider/2.jpg" alt="slide2" />
				</SwiperSlide>
				<SwiperSlide>
					<ImageSlider src="/image/slider/3.jpg" alt="slide3" />
				</SwiperSlide>
				<SwiperSlide>
					<ImageSlider src="/image/slider/4.jpg" alt="slide4" />
				</SwiperSlide>
			</StyledSwiper>
		</>
	);
};

export default Slider;
