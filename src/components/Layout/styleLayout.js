import styled from 'styled-components';

const WrapperStyled = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const WrapLayout = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	@media ${(props) => props.theme.media.desctop} {
		margin: 0 80px;
	}
	@media ${(props) => props.theme.media.tablet} {
		margin: 0 40px;
	}
	@media ${(props) => props.theme.media.phone} {
		margin: 0 10px;
	}
`;
export { WrapperStyled, WrapLayout };
