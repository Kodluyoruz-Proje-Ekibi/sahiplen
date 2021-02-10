import DetailSlider from './DetailSlider';
import styles from './style.module.css';

function AnimalCard() {
	return (
		<div className={styles.member}>
			<DetailSlider />

			<div className="container">
				<div className="row">Tür:</div>
				<div className="row">Cinsiyet:</div>
				<div className="row">Kısır:</div>
				<div className="row">Yaş:</div>
				<div className="row">İl/İlçe:</div>
			</div>
		</div>
	);
}

export default AnimalCard;
