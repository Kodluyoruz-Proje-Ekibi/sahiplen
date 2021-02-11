import React, { useState, useEffect } from 'react';
import { SiDatadog } from 'react-icons/si';
import kopek from './kopek.png';
import './CardPage.css';
function CardPage() {
	const [pet, setPet] = useState([
		{ name: 'kedi1' },
		{ name: 'kedi2' },
		{ name: 'kedi3' },
		{ name: 'kedi4' },
		{ name: 'kedi5' },
	]);
	useEffect(() => {
		setPet((p) => [...p, { name: 'kedi6' }]);
	}, []);
	return (
		<>
			<div className="container mt-4">
				<div className="row" style={{ justifyContent: 'center' }}>
					{pet.map((pet, key) => (
						<div key={key} className="card-container">
							<div className="image-container">
								<img src={kopek} alt="" />
							</div>
							<div className="card-content">
								<div className="card-title">
									<h3>
										{pet.name} <SiDatadog />
									</h3>
								</div>
								<div className="card-body">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt.
									</p>
								</div>
							</div>
							<div className="btn" style={{ display: 'flex' }}>
								<a
									href="/#"
									style={{
										textTransform: 'uppercase',
										color: 'cadetblue',
										textDecoration: 'none',
										fontWeight: 'bold',
									}}
								>
									<h6>Profil</h6>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default CardPage;
