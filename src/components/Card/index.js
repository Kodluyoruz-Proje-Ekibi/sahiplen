import React from 'react';
import { useQuery, gql } from '@apollo/client';
import './Card.css';

const GET_PETS = gql`
	query GetPets {
		pets {
			id
			pet_images
			title
			description
		}
	}
`;

function Card() {
	const { loading, error, data } = useQuery(GET_PETS);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<>
			<div className="container mt-4">
				<div className="row" style={{ justifyContent: 'center' }}>
					{data.pets.map(({ id, pet_images, title, description }) => (
						<div key={id} className="card-container">
							<div className="image-container">
								<img src={pet_images} alt="" />
							</div>
							<div className="card-content">
								<div className="card-title">
									<h3>{title}</h3>
								</div>
								<div className="card-body">
									<p>{description.substring(0, 100)}...</p>
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
									<h6>
										<a href={`/detay?id=${id}`}>Profil</a>
									</h6>
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
