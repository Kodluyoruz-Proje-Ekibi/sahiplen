import React, { useState } from 'react';
import { SiDatadog } from 'react-icons/si';
import kopek from './kopek.png';
import './Card.css';
function Card() {
	const [pet, setPet] = useState([
		{ name: 'kedi1' },
		{ name: 'kedi2' },
		{ name: 'kedi3' },
		{ name: 'kedi4' },
		{ name: 'kedi5' },
	]);
	return (
		<>
			<div className="container mt-4">
				<div class="row">
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
									<h7>Profil</h7>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default Card;
