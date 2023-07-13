import React, { useState, useEffect } from 'react';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import { WrapScrollToTopBtn, FabStyled } from './styleScrolToTopBtn';

const ScrolToTopBtn = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);
		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<>
			{isVisible && (
				<WrapScrollToTopBtn>
					<FabStyled type="button" onClick={scrollToTop} className="scroll-to-top">
						<KeyboardArrowUp fontSize="large" />
					</FabStyled>
				</WrapScrollToTopBtn>
			)}
		</>
	);
};

export default ScrolToTopBtn;
