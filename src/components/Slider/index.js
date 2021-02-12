import React from 'react';

function Slider() {
	return (
		<section id="hero" className="d-flex align-items-center">
			<div className="container" data-aos="zoom-out" data-aos-delay="100">
				<h1>
					Hoşgeldin Sen de <span>Sahiplen.</span>
				</h1>
				<h2>Yuva arayan yüzlerce minik dost var. Vakit kaybetme.</h2>
				<div className="d-flex">
					<a href="/tumhayvanlar" className="btn-get-started scrollto">
						Tüm Hayvanlar
					</a>
				</div>
			</div>
		</section>
	);
}

export default Slider;
