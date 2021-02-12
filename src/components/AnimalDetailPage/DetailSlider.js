import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import React from 'react';

function DetailSlider({ pet_images }) {
	let petsImages = pet_images.split(',');
	return (
		<>
			<Carousel statusFormatter={() => null}>
				{petsImages.map((image, key) => (
					<div key={key}>
						<img src={image} alt="" />
					</div>
				))}
			</Carousel>
		</>
	);
}

export default DetailSlider;
