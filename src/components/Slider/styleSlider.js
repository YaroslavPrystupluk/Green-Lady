import styled from 'styled-components';
import { Swiper } from 'swiper/react';

const StyledSwiper = styled(Swiper)`
	width: 50%;
	height: 400px;
	@media ${(props) => props.theme.media.tablet} {
		width: 50%;
		height: 300px;
	}
	@media ${(props) => props.theme.media.phone} {
		width: 100%;
		height: 400px;
	}
	.swiper-pagination-bullet {
		background-color: ${(props) => props.theme.colors.primary};
	}
	.swiper-button-next,
	.swiper-button-prev {
		color: ${(props) => props.theme.colors.primary};
		&:hover {
			background-color: ${(props) => props.theme.colors.secondary};
			opacity: 0.8;
		}
	}
`;
const ImageSlider = styled.img`
	width: 100%;
	height: 100%;
`;

export { StyledSwiper, ImageSlider };
