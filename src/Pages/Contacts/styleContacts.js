import styled from 'styled-components';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const WrapBlockInfo = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	flex-direction: column;
	padding: 50px 0;
`;

const WrapTextHeader = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: center;
	margin: 10px 10px;
`;

const TextHeader = styled.p`
	font-size: 16px;
	color: ${(props) => props.theme.colors.primary};
	padding: 0 5px 0 0;
`;

const CustomLocationOnIcon = styled(LocationOnIcon)`
	color: ${(props) => props.theme.colors.primary};
`;

const CustomAlternateEmailIcon = styled(AlternateEmailIcon)`
	color: ${(props) => props.theme.colors.primary};
`;

const CustomLocalPhoneIcon = styled(LocalPhoneIcon)`
	color: ${(props) => props.theme.colors.primary};
`;
export {
	WrapBlockInfo,
	WrapTextHeader,
	TextHeader,
	CustomLocalPhoneIcon,
	CustomLocationOnIcon,
	CustomAlternateEmailIcon,
};
