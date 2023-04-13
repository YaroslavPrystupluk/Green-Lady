import styled from 'styled-components';

const WrapSliderOurObjects = styled.div`
	display: flex;
	@media ${(props) => props.theme.media.phone} {
		display: block;
	}
`;
export { WrapSliderOurObjects };
