import React from 'react';
import { useFormik, setFieldValue } from 'formik';
import validations from './validations';
import styles from './style.module.css';

function AddAnimalForm() {
	const formik = useFormik({
		initialValues: {
			adTitle: '',
			adDetail: '',
			email: '',
		},
		onSubmit: (values, bag) => {
			setTimeout(() => {
				bag.setSubmitting(false);
			}, 2000);
			console.log(values);
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
						<label htmlFor="type">Hangi Pet?</label>
						<input
							className="form-control"
							id="type"
							name="type"
							placeholder="Örneğin: Kedi"
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							disabled={formik.isSubmitting}
						/>
						{formik.errors.email && formik.touched.email && (
							<div className={styles.errorMessage}>{formik.errors.email}</div>
						)}
					</div>

					<div className="col form-group">
						<label htmlFor="age">Petin Yaşı:</label>
						<input
							className="form-control"
							id="age"
							name="age"
							placeholder="Örneğin: 5"
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							disabled={formik.isSubmitting}
						/>
						{formik.errors.email && formik.touched.email && (
							<div className={styles.errorMessage}>{formik.errors.email}</div>
						)}
					</div>
				</div>

				<div className="row formInput">
					<div className="col form-group">
						<label htmlFor="type">Cinsiyeti:</label>
						<input
							className="form-control"
							id="type"
							name="type"
							placeholder="Örneğin: Kedi"
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							disabled={formik.isSubmitting}
						/>
						{formik.errors.email && formik.touched.email && (
							<div className={styles.errorMessage}>{formik.errors.email}</div>
						)}
					</div>

					<div className="col form-group">
						<label htmlFor="type">Kısırlaştırıldı mı?</label>
						<input
							className="form-control"
							id="type"
							name="type"
							placeholder="Örneğin: Kedi"
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							disabled={formik.isSubmitting}
						/>
						{formik.errors.email && formik.touched.email && (
							<div className={styles.errorMessage}>{formik.errors.email}</div>
						)}
					</div>
				</div>

				<div className="row formInput">
					<div className="col form-group">
						<label htmlFor="type">İl:</label>
						<input
							className="form-control"
							id="type"
							name="type"
							placeholder="Örneğin: Kedi"
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							disabled={formik.isSubmitting}
						/>
						{formik.errors.email && formik.touched.email && (
							<div className={styles.errorMessage}>{formik.errors.email}</div>
						)}
					</div>

					<div className="col form-group">
						<label htmlFor="type">İlçe:</label>
						<input
							className="form-control"
							id="type"
							name="type"
							placeholder="Örneğin: Kedi"
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							disabled={formik.isSubmitting}
						/>
						{formik.errors.email && formik.touched.email && (
							<div className={styles.errorMessage}>{formik.errors.email}</div>
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
			</form>
		</div>
	);
}

export default AddAnimalForm;
