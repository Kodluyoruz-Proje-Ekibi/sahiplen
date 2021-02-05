import React, { useState, useEffect } from 'react';
import './style.css';
import urun from './mama.jpg';

function Shop() {
	const [mama, setMama] = useState([
		{ name: 'mama1' },
		{ name: 'mama2' },
		{ name: 'mama3' },
		{ name: 'mama4' },
		{ name: 'mama5' },
		{ name: 'mama6' },
		{ name: 'mama7' },
	]);

	useEffect(() => {
		setMama((p) => [...p, { name: 'mama8' }]);
	}, []);

	return (
		<>
			<div className="container">
				<div className="row mb-5">
					{mama.map((pet, key) => (
						<div className="product-card mt-5">
							<div className="badge">Yeni</div>
							<div className="product-tumb">
								<img src={urun} alt="" />
							</div>
							<div className="product-details">
								<span className="product-catagory">Women,bag</span>
								<h5>
									<a href="/#">Women leather bag</a>
								</h5>
								<div className="product-bottom-details">
									<div className="product-price">$230.99</div>
									<div className="product-links">
										<a href="/#">
											<i className="fa fa-heart icon"></i>
										</a>
										<a href="/#">
											<i className="fa fa-shopping-cart icon"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default Shop;
