import { useState, useEffect } from 'react';
import React from 'react';
import { useFormik } from 'formik';
import validations from './validations';
import { ilIlce } from '../../../assets/provinceDiscrict';
import { useDropzone } from 'react-dropzone';
import styles from './style.module.css';
import { gql, useMutation } from '@apollo/client';

const ADD_PET = gql`
	mutation MyMutation(
		$description: String = ""
		$district: String = ""
		$email: String = ""
		$name: String = ""
		$neutered: Boolean = false
		$pet_age: smallint = 1
		$pet_gender: String = ""
		$pet_images: String = ""
		$pet_type: String = ""
		$phone: String = ""
		$provice: String = ""
		$title: String = ""
	) {
		insert_pets_one(
			object: {
				description: $description
				district: $district
				email: $email
				name: $name
				neutered: $neutered
				pet_age: $pet_age
				pet_gender: $pet_gender
				pet_images: $pet_images
				pet_type: $pet_type
				phone: $phone
				provice: $provice
				title: $title
			}
		) {
			id
		}
	}
`;

function AddAnimalForm() {
	const [cityCode, setCityCode] = useState('');
	const [files, setFiles] = useState([]);
	const [addTodo, { data }] = useMutation(ADD_PET);

	const { fileRejections, getRootProps, getInputProps } = useDropzone({
		maxFiles: 5,
		accept: 'image/*',
		onDrop: (acceptedFiles) => {
			setFiles(
				acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					}),
				),
			);
		},
	});

	useEffect(
		() => () => {
			files.forEach((file) => URL.revokeObjectURL(file.preview));
		},
		[files],
	);

	const formik = useFormik({
		initialValues: {
			adTitle: '',
			adDetail: '',
			email: '',
			sterilize: '',
			kind: '',
			gender: '',
			age: 0,
			province: '',
			district: '',
		},
		onSubmit: (values, bag) => {
			setTimeout(() => {
				bag.setSubmitting(false);
			}, 2000);
			console.log(values);
			addTodo({
				variables: {
					title: values.adTitle,
					description: values.adDetail,
					pet_type: values.kind,
					pet_age: values.age,
					pet_gender: values.gender,
					neutered: false,
					provice: values.province,
					district: values.district,
					email: values.email,
					name: 'İsmail Oğuzhan Duran',
					phone: '054222',
					pet_images:
						'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg,https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
				},
			});
			console.log(bag);
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
							min="0"
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
							<option hidden>---</option>
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
							<option hidden>---</option>
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

				<div className={styles.formInput}>
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

				<div className="form-group">
					<label htmlFor="photos">Fotoğraflar:</label>
					<div {...getRootProps({ className: styles.dropzone })}>
						<input id="photos" name="photos" {...getInputProps()} />
						<p>
							Fotoğrafları sürükleyip bırakabilirsiniz. Ya da bu alana tıklayarak seçebilirsiniz.
						</p>

						<p>
							(En Fazla <b>4</b> Fotoğraf)
						</p>
					</div>
					{fileRejections.length > 5 ? (
						<div className={styles.errorMessage}>Çok Fazla Fotoğraf Yüklemeye Çalıştınız.</div>
					) : null}

					<aside className={styles.thumbsContainer}>
						{files.map((file) => (
							<div className={styles.thumb} key={file.name}>
								<div className={styles.thumbInner}>
									<img alt="" src={file.preview} className={styles.img} />
								</div>
							</div>
						))}
					</aside>
				</div>

				<div className="row">
					<div className="col form-group">
						<button className={styles.adButton} type="submit" disabled={formik.isSubmitting}>
							{formik.isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
						</button>
					</div>
					<div style={{ textAlign: 'right' }} className="col form group">
						<button
							className={styles.resetButton}
							type="reset"
							onClick={formik.handleReset}
							disabled={!formik.dirty || formik.isSubmitting}
						>
							Temizle
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default AddAnimalForm;
