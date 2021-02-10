import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import dog from './dog.jpg';

import React from 'react';

function Gallery() {
	return (
		<div>
			<Carousel>
				<div>
					<img src={dog} alt="" />
				</div>
				<div>
					<img src={dog} alt="" />
				</div>
				<div>
					<img src={dog} alt="" />
				</div>
			</Carousel>
		</div>
	);
}

export default Gallery;
