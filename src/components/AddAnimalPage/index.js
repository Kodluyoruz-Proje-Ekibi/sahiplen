import React from 'react';
import AddAnimalForm from './AddAnimalForm';
import styles from './AddAnimalForm/style.module.css';

function AddAnimalPage() {
	return (
		<div>
			<div className=" container mt-4 ">
				<div className="row justify-content-center align-items-center">
					<blockquote className={`blockquote ${styles.blockquote}`}>
						<p class="mb-0">
							Küçük dostumuzu sahiplendirmek için öncelikle aşağıdaki formu doldurmalısın...
						</p>
					</blockquote>
				</div>
			</div>
			<AddAnimalForm />
		</div>
	);
}

export default AddAnimalPage;
