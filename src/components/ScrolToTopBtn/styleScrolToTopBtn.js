import styled from 'styled-components';
import { Fab } from '@mui/material';

const WrapScrollToTopBtn = styled.div`
	position: fixed;
	right: 50px;
	bottom: 50px;
	width: 32px;
	height: 22px;
	z-index: 229;
	.MuiFab-root {
		width: 45px;
		height: 45px;
	}
	@media ${(props) => props.theme.media.phone} {
		right: 50%;
		bottom: 50px;
	}
	@media ${(props) => props.theme.media.tablet} {
		right: 20px;
		bottom: 50px;
	}
`;

const FabStyled = styled(Fab)`
	position: relative;
	opacity: 0.6;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
	&:hover {
		opacity: 1;
	}
`;

export { WrapScrollToTopBtn, FabStyled };
