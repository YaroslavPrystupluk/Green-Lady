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
`;
const ImageSlider = styled.img`
	width: 100%;
	height: 100%;
`;

export { StyledSwiper, ImageSlider };
