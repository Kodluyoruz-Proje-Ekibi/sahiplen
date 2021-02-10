import styles from './style.module.css';
import person from './person1.jpg';

function DetailUserCard() {
	return (
		<div className={styles.member}>
			<div className="member-img">
				<img src={person} className="img-fluid" alt="" />
			</div>
			<div className="member-info pt-4" style={{ textAlign: 'center' }}>
				<p>
					<b>Ozan ORKUN</b>
				</p>
				<ul>
					<li>0530 123 456</li>
					<li>mail@mail.com</li>
				</ul>
			</div>
		</div>
	);
}

export default DetailUserCard;
