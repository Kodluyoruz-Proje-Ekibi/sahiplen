import * as yup from 'yup';

const schema = yup.object().shape({
	adTitle: yup.string().required('İlan Başlığı Zorunludur!'),
	adDetail: yup.string().required('İlan Detayı Zorunludur!'),
	email: yup.string().email().required('E-mail Zorunludur!'),
	sterilize: yup.string().required('Bu Alan Zorunludur!'),
	kind: yup.string().required('Bu Alan Zorunludur!'),
	age: yup.number().required('Yaş Zorunludur!'),
	gender: yup.string().required('Bu Alan Zorunludur!'),
	province: yup.string().required('İl Seçimi Zorunludur!'),
	district: yup.string().required('İlçe Seçimi Zorunludur!'),
});

export default schema;
