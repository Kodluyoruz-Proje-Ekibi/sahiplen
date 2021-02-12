import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import React from 'react';

function DetailSlider({ pet_images }) {
	return (
		<>
			<Carousel statusFormatter={() => null}>
				<div>
					<img src={pet_images} alt="" />
				</div>
			</Carousel>
		</>
	);
}

export default DetailSlider;
