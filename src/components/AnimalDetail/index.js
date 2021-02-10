import React from 'react';
import Gallery from './DetailGallery';
import DetailDescription from './DetailDescription';
import DetailUserCard from './DetailUserCard';

function AnimalDetail() {
	return (
		<div className="container pt-5">
			<div className="row">
				<div className="col-lg-4">
					<Gallery />
				</div>
				<div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column">
					<DetailDescription />
				</div>
				<div className="col-lg-2 d-flex align-items-stretch text-align-center">
					<DetailUserCard />
				</div>
			</div>
		</div>
	);
}

export default AnimalDetail;
