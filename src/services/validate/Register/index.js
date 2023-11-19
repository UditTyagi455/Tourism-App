import * as yup from 'yup';

export const initialValues = {
  name: '',
  email: '',
  password: '',
  repeatPassword: '',
};
export const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required').email('Email is invalid'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(30, 'Password must not exceed 40 characters'),
  repeatPassword: yup
    .string()
    .required('Password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match')
});
