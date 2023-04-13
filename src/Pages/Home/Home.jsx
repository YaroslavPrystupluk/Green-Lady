import React from 'react';
import Slider from '../../components/Slider/Slider';
import BlockOurObjects from '../../components/BlockOurObjects/BlockOurObjects';
import { WrapSliderOurObjects } from './styleHome';

const Home = () => {
	return (
		<WrapSliderOurObjects>
			<BlockOurObjects />
			<Slider />
		</WrapSliderOurObjects>
	);
};

export default Home;
