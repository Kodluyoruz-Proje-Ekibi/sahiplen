import React from 'react';
import { useFormik, TextInput } from 'formik';
import validations from './validations';

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
			<form onSubmit={formik.handleSubmit}>
				<div>
					<label>İlan Başlığı</label>
					<input
						id="adTitle"
						name="adTitle"
						placeholder="İlan Başlığı"
						value={formik.values.adTitle}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						disabled={formik.isSubmitting}
					/>
					{formik.errors.adTitle && formik.touched.adTitle && <div>{formik.errors.adTitle}</div>}
				</div>

				<div>
					<label>İlan Detayı</label>
					<input
						id="adDetail"
						name="adDetail"
						placeholder="İlan Detayı"
						value={formik.values.adDetail}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						disabled={formik.isSubmitting}
					/>
					{formik.errors.adDetail && formik.touched.adDetail && <div>{formik.errors.adDetail}</div>}
				</div>

				<div>
					<label>E-mail</label>
					<input
						id="email"
						name="email"
						placeholder="E-mail"
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						disabled={formik.isSubmitting}
					/>
					{formik.errors.email && formik.touched.email && <div>{formik.errors.email}</div>}
				</div>

				<button type="submit" disabled={formik.isSubmitting}>
					{formik.isSubmitting ? 'Loading...' : 'Submit'}
				</button>
			</form>
		</div>
	);
}

export default AddAnimalForm;
