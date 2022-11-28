import * as yup from 'yup'

/** Types for useForm Step2 */
export interface IUserFieldsStep2 {
  email: string
  hasPhoneNumber: Boolean
  phoneNumber?: number
  password: string
  passwordConfirmation?: string
}

/** Validation for fields useForm in Step2 */
export const UserSchemaStep2 = yup.object().shape({
  email: yup
    .string()
    .required('Email is a required field')
    .email('Email should have correct format'),
  phoneNumber: yup
    .string()
    .matches(
      /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
      'Phone number should be a numbers in russian format'
    ),
  password: yup
    .string()
    .required('Password is a required field')
    .min(8, 'Password must be 8 characters or more')
    .matches(/[a-z]+/, 'One lowercase character')
    .matches(/[A-Z]+/, 'One uppercase character')
    .matches(/[@$!%*#?&]+/, 'One special character')
    .matches(/\d+/, 'One number'),
  passwordConfirmation: yup
    .string()
    .required('Confirm your password')
    .oneOf([yup.ref('password'), null], 'Passwords must match')
})
