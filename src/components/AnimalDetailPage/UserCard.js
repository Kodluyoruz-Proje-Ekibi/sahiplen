import styles from './style.module.css';
import person from './person1.jpg';

function DetailUserCard({ name, email, phone }) {
	return (
		<div className={styles.member}>
			<div className="member-img">
				<img src={person} className="img-fluid" alt="" />
			</div>
			<div className="member-info pt-4" style={{ textAlign: 'center' }}>
				<p>
					<b>{name}</b>
				</p>
				<ul>
					<li>{phone}</li>
					<li>{email}</li>
				</ul>
			</div>
		</div>
	);
}

export default DetailUserCard;
