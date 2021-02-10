import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import dog from './dog.jpg';

import React from 'react';

function DetailSlider() {
	return (
		<>
			<Carousel statusFormatter={() => null}>
				<div>
					<img src={dog} alt="" />
				</div>
				<div>
					<img src={dog} alt="" />
				</div>
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
		</>
	);
}

export default DetailSlider;
