import * as yup from 'yup'

/** Типы полей для useForm */
export interface IUserFields {
  firstName: string
  lastName: string
  birthday: string
  email: string
  password: string
}

/** Валидация полей для useForm */
export const UserSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is a required field')
    .min(2, 'минимальная длина 2 символа')
    .max(30, 'максимальная длина 30 символов'),
  lastName: yup
    .string()
    .required('Last name is a required field')
    .min(2, 'минимальная длина 3 символа')
    .max(30, 'максимальная длина 30 символов'),
  birthday: yup.string().required('Birthday date is a required field'),
  email: yup.string().required().email('Set valid email address'),
  password: yup
    .string()
    .required('Password is a required field')
    .min(8, 'Password must be 8 characters or more')
    .matches(/[a-z]+/, 'One lowercase character')
    .matches(/[A-Z]+/, 'One uppercase character')
    .matches(/[@$!%*#?&]+/, 'One special character')
    .matches(/\d+/, 'One number')
})
