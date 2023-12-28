import React from 'react';
import LogoIcon from '../LogoIcon/LogoIcon';
import {
	WrapHeader,
	TextHeader,
	CustomLocalPhoneIcon,
	CustomLocationOnIcon,
	WrapTextHeader,
	WrapBlockInfo,
} from './styleHeader';

const Header = () => {
	return (
		<WrapHeader>
			<LogoIcon />
			<WrapBlockInfo>
				<WrapTextHeader>
					<CustomLocalPhoneIcon />
					<TextHeader>(097)014-25-28</TextHeader>
				</WrapTextHeader>
				<WrapTextHeader>
					<CustomLocationOnIcon />
					<TextHeader>Рівненська область,</TextHeader>
					<TextHeader>с. Біла криниця</TextHeader>
				</WrapTextHeader>
			</WrapBlockInfo>
		</WrapHeader>
	);
};

export default Header;
