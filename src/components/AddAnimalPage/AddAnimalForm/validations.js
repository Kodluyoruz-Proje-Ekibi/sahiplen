import * as yup from 'yup';

const schema = yup.object().shape({
	adTitle: yup.string().required(),
	adDetail: yup.string().required(),
	email: yup.string().email().required(),
});

export default schema;
