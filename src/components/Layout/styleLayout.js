import styled from 'styled-components';

const WrapLayout = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	@media ${(props) => props.theme.media.tablet} {
		margin: 0 50px;
	}
	@media ${(props) => props.theme.media.phone} {
		margin: 0 10px;
	}
`;
export { WrapLayout };
