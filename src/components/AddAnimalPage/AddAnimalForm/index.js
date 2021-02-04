import { useState } from 'react';
import React from 'react';
import { useFormik } from 'formik';
import validations from './validations';
import { ilIlce } from '../../../assets/provinceDiscrict';
import styles from './style.module.css';

function AddAnimalForm() {
	const [cityCode, setCityCode] = useState('');

	const formik = useFormik({
		initialValues: {
			adTitle: '',
			adDetail: '',
			email: '',
			sterilize: '',
			kind: '',
			gender: '',
			age: '',
			province: '',
			district: '',
		},
		onSubmit: (values, bag) => {
			setTimeout(() => {
				bag.setSubmitting(false);
			}, 2000);
			//console.log(values);
		},
		validationSchema: validations,
	});

	return (
		<div className="container">
			<form className={styles.form} onSubmit={formik.handleSubmit}>
				<div className={styles.formInput}>
					<label htmlFor="adTitle">İlan Başlığı:</label>
					<input
						className="form-control"
						id="adTitle"
						name="adTitle"
						placeholder="İlan Başlığı..."
						value={formik.values.adTitle}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						disabled={formik.isSubmitting}
					/>
					{formik.errors.adTitle && formik.touched.adTitle && (
						<div className={styles.errorMessage}>{formik.errors.adTitle}</div>
					)}
				</div>
				<div className={styles.formInput}>
					<label htmlFor="adDetail">İlan Detayı:</label>
					<textarea
						className="form-control"
						id="adDetail"
						name="adDetail"
						placeholder="İlan Detayı..."
						value={formik.values.adDetail}
						rows="4"
						cols="50"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						disabled={formik.isSubmitting}
					/>
					{formik.errors.adDetail && formik.touched.adDetail && (
						<div className={styles.errorMessage}>{formik.errors.adDetail}</div>
					)}
				</div>
				<div className="row formInput">
					<div className="col form-group">
						<label htmlFor="kind">Hangi Pet?</label>
						<select
							className="form-control"
							id="kind"
							name="kind"
							value={formik.values.kind}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							disabled={formik.isSubmitting}
						>
							<option>---</option>
							<option value="cat">Kedi</option>
							<option value="dog">Köpek</option>
							<option value="bird">Kuş</option>
							<option value="fish">Balık</option>
							<option value="rabbit">Tavşan</option>
							<option value="turtle">Kaplumbağa</option>
							<option value="hamster">Hamster</option>
							<option value="reptile">Sürüngen</option>
							<option value="other">Diğer</option>
						</select>
						{formik.errors.kind && formik.touched.kind && (
							<div className={styles.errorMessage}>{formik.errors.kind}</div>
						)}
					</div>

					<div className="col form-group">
						<label htmlFor="age">Petin Yaşı:</label>
						<input
							className="form-control"
							id="age"
							name="age"
							type="number"
							placeholder="Örneğin: 5"
							value={formik.values.age}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							disabled={formik.isSubmitting}
						/>
						{formik.errors.age && formik.touched.age && (
							<div className={styles.errorMessage}>{formik.errors.age}</div>
						)}
					</div>
				</div>
				<div className="row formInput">
					<div className="col form-group">
						<label htmlFor="gender">Cinsiyeti:</label>
						<select
							className="form-control"
							id="gender"
							name="gender"
							value={formik.values.gender}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							disabled={formik.isSubmitting}
						>
							<option>---</option>
							<option value="female">Dişi</option>
							<option value="male">Erkek</option>
						</select>
						{formik.errors.gender && formik.touched.gender && (
							<div className={styles.errorMessage}>{formik.errors.gender}</div>
						)}
					</div>

					<div className="col form-group">
						<label htmlFor="sterilize">Kısırlaştırıldı mı?</label>
						<select
							className="form-control"
							id="sterilize"
							name="sterilize"
							value={formik.values.isSterilized}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							disabled={formik.isSubmitting}
						>
							<option>---</option>
							<option value="sterilized">Evet</option>
							<option value="nonSterilized">Hayır</option>
						</select>
						{formik.errors.sterilize && formik.touched.sterilize && (
							<div className={styles.errorMessage}>{formik.errors.sterilize}</div>
						)}
					</div>
				</div>

				<div className="row formInput">
					<div className="col form-group">
						<label htmlFor="province">İl:</label>
						<select
							className="form-control"
							id="province"
							name="province"
							value={formik.values.province}
							onChange={(e) => {
								formik.handleChange(e);
								setCityCode(e.target.value);
							}}
							onBlur={formik.handleBlur}
							disabled={formik.isSubmitting}
						>
							<option hidden>---</option>
							{ilIlce.map((item) => (
								<option key={item.plaka} value={item.il}>
									{item.il}
								</option>
							))}
						</select>
						{formik.errors.province && formik.touched.province && (
							<div className={styles.errorMessage}>{formik.errors.province}</div>
						)}
					</div>

					<div className="col form-group">
						<label htmlFor="district">İlçe:</label>
						<select
							className="form-control"
							id="district"
							name="district"
							value={formik.values.district}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							disabled={formik.isSubmitting}
						>
							<option hidden>---</option>
							{ilIlce.map(
								(item) =>
									cityCode === item.il &&
									item.ilceleri.map((ilce, i) => (
										<option key={i} value={ilce}>
											{ilce}
										</option>
									)),
							)}
						</select>
						{formik.errors.district && formik.touched.district && (
							<div className={styles.errorMessage}>{formik.errors.district}</div>
						)}
					</div>
				</div>
				<div className="formInput">
					<label htmlFor="email">E-Posta:</label>
					<input
						className="form-control"
						id="email"
						name="email"
						placeholder="E-Posta Adresiniz..."
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						disabled={formik.isSubmitting}
					/>
					{formik.errors.email && formik.touched.email && (
						<div className={styles.errorMessage}>{formik.errors.email}</div>
					)}
				</div>
				<div className="formInput">
					<label htmlFor="image">Fotoğraflar:</label>
					<input className="form-control" id="image" name="image" type="file" />
					{formik.errors.image && formik.touched.image && (
						<div className={styles.errorMessage}>{formik.errors.image}</div>
					)}
				</div>
				<button className={styles.adButton} type="submit" disabled={formik.isSubmitting}>
					{formik.isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
				</button>
				<button
					className={styles.resetButton}
					type="button"
					onClick={formik.handleReset}
					disabled={!formik.dirty || formik.isSubmitting}
				>
					{formik.isSubmitting ? 'Temizleniyor...' : 'Temizle'}
				</button>
			</form>
		</div>
	);
}

export default AddAnimalForm;
