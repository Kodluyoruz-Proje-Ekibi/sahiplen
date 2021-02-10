import DetailSlider from './DetailSlider';
import styles from './style.module.css';

function AnimalCard() {
	return (
		<div className={styles.member}>
			<DetailSlider />

			<div className={`container ${styles.animalDescriptionList}`}>
				<div className="row">
					<div className="col-6" style={{ textAlign: 'right' }}>
						<b>Tür:</b>{' '}
					</div>
					<div className="col-6" style={{ textAlign: 'left' }}>
						Köpek
					</div>
				</div>
				<div className="row">
					<div className="col-6" style={{ textAlign: 'right' }}>
						<b>Cinsiyet:</b>{' '}
					</div>
					<div className="col-6" style={{ textAlign: 'left' }}>
						Erkek
					</div>
				</div>
				<div className="row">
					<div className="col-6" style={{ textAlign: 'right' }}>
						<b>Kısır mı? :</b>{' '}
					</div>
					<div className="col-6" style={{ textAlign: 'left' }}>
						Hayır
					</div>
				</div>
				<div className="row">
					<div className="col-6" style={{ textAlign: 'right' }}>
						<b>Yaş:</b>{' '}
					</div>
					<div className="col-6" style={{ textAlign: 'left' }}>
						3
					</div>
				</div>
				<div className="row">
					<div className="col-6" style={{ textAlign: 'right' }}>
						<b>İl:</b>{' '}
					</div>
					<div className="col-6" style={{ textAlign: 'left' }}>
						İstanbul
					</div>
				</div>
				<div className="row">
					<div className="col-6" style={{ textAlign: 'right' }}>
						<b>İlçe:</b>{' '}
					</div>
					<div className="col-6" style={{ textAlign: 'left' }}>
						Ümraniye
					</div>
				</div>
			</div>
		</div>
	);
}

export default AnimalCard;
