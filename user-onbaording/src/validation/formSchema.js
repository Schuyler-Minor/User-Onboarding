import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name Required!!!'),

    email: yup
            .string()
            .email()
            .required('Please enter a valid email address'),
    password: yup
            .string()
            
            .required(),

    tos: yup
            .bool()
            .oneOf([true], 'Accept Terms of Service'),

})

export default formSchema;