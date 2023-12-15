import * as yup from 'yup';

export const initialValues = {
  departurePlace: '',
  arrivalPlace: '',
  period: '',
  passenger: '',
};
export const validationSchema = yup.object().shape({
    departurePlace: yup.string().required('Departure place is required'),
    arrivalPlace: yup.string().required('Arrival place is required'),
    // period: yup
    // .string()
    // .required('Period is required'),
    passenger: yup
    .string()
    .required('Passenger is required')
});
