import React from 'react';
import AnimalCard from './AnimalCard';
import DetailDescription from './Description';
import DetailUserCard from './UserCard';
import styles from './style.module.css';

function AnimalDetail() {
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
