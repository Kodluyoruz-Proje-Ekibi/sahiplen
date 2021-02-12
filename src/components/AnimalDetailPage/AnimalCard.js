import DetailSlider from './DetailSlider';
import styles from './style.module.css';

function AnimalCard({ pet_type, pet_gender, neutered, pet_age, provice, district, pet_images }) {
	return (
		<div className={styles.member}>
			<DetailSlider pet_images={pet_images} />

			<div className={`container ${styles.animalDescriptionList}`}>
				<div className="row">
					<div className="col-6 pr-2" style={{ textAlign: 'right' }}>
						<b>Tür:</b>{' '}
					</div>
					<div className="col-6 pl-2" style={{ textAlign: 'left' }}>
						{pet_type}
					</div>
				</div>
				<div className="row">
					<div className="col-6 pr-2" style={{ textAlign: 'right' }}>
						<b>Cinsiyet:</b>{' '}
					</div>
					<div className="col-6 pl-2" style={{ textAlign: 'left' }}>
						{pet_gender}
					</div>
				</div>
				<div className="row">
					<div className="col-6 pr-2" style={{ textAlign: 'right' }}>
						<b>Kısır mı? :</b>{' '}
					</div>
					<div className="col-6 pl-2" style={{ textAlign: 'left' }}>
						{neutered ? 'Evet' : 'Hayır'}
					</div>
				</div>
				<div className="row">
					<div className="col-6 pr-2" style={{ textAlign: 'right' }}>
						<b>Yaş:</b>{' '}
					</div>
					<div className="col-6 pl-2" style={{ textAlign: 'left' }}>
						{pet_age}
					</div>
				</div>
				<div className="row">
					<div className="col-6 pr-2" style={{ textAlign: 'right' }}>
						<b>İl:</b>{' '}
					</div>
					<div className="col-6 pl-2" style={{ textAlign: 'left' }}>
						{provice}
					</div>
				</div>
				<div className="row">
					<div className="col-6 pr-2" style={{ textAlign: 'right' }}>
						<b>İlçe:</b>{' '}
					</div>
					<div className="col-6 pl-2" style={{ textAlign: 'left' }}>
						{district}
					</div>
				</div>
			</div>
		</div>
	);
}

export default AnimalCard;
