import * as yup from 'yup';

const schema = yup.object().shape({
	adTitle: yup.string().required('İlan Başlığı Zorunludur!'),
	adDetail: yup.string().required('İlan Detayı Zorunludur!'),
	email: yup.string().email().required('E-mail Zorunludur!'),
});

export default schema;
