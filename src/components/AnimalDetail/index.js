import React from 'react';
import styles from './style.module.css';
import person from './person1.jpg';
import Gallery from './DetailGallery';

function AnimalDetail() {
	return (
		<div className="container pt-5">
			<div className="row">
				<div className="col-lg-4">
					<Gallery />
				</div>
				<div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column">
					<h6>İlan Başlığı</h6>
					<p>
						İlan Detayı <br />
						Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
						sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
						est laborum
					</p>
				</div>
				<div className="col-lg-2 d-flex align-items-stretch text-align-center">
					<div className={styles.member}>
						<div className="member-img">
							<img src={person} className="img-fluid" alt="" />
						</div>
						<div className="member-info" style={{ textAlign: 'center' }}>
							<h6>Ozan ORKUN</h6>
							<ul>
								<li>0530 123 456</li>
								<li>mail@mail.com</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AnimalDetail;
