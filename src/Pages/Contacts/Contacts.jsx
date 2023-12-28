import React from 'react';
import { TextHeader, CustomLocalPhoneIcon, CustomLocationOnIcon, WrapTextHeader, WrapBlockInfo } from './styleContacts';

const Contacts = () => {
	return (
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
	);
};

export default Contacts;
