import React from 'react';
import AnimalCard from './AnimalCard';
import DetailDescription from './Description';
import DetailUserCard from './UserCard';

function AnimalDetail() {
	return (
		<div className="container pt-5">
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
