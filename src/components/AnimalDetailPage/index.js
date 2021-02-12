import React from 'react';
import AnimalCard from './AnimalCard';
import DetailDescription from './Description';
import DetailUserCard from './UserCard';
import styles from './style.module.css';
import { useQuery, gql } from '@apollo/client';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const petId = urlParams.get('id');

const GET_ID_PET = gql`
query GetPets {
  pets(where: {id: {_eq: "${petId}"}}) {
    id
    pet_images
    title
    description
  }
}
`;

function AnimalDetail() {
	const { loading, error, data } = useQuery(GET_ID_PET);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	console.log(data);
	return (
		<div className={`container mt-5 pt-5 ${styles.card}`}>
			<div className="row">
				<div className="col-lg-4">
					<AnimalCard />
				</div>
				<div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column">
					<DetailDescription />
				</div>
				<div className="col-lg-2 align-items-stretch text-align-center">
					<DetailUserCard />
				</div>
			</div>
		</div>
	);
}

export default AnimalDetail;
