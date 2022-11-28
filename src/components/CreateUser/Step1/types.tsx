import * as yup from 'yup'

/** Types for useForm Step1 */
export interface IUserFieldsStep1 {
  firstName: string
  lastName: string
  birthday: string
}

/** Validation for fields useForm in Step1 */
export const UserSchemaStep1 = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is a required field')
    .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
    .min(2, 'Min length 2 characters')
    .max(30, 'Max length 30 characters'),
  lastName: yup
    .string()
    .required('Last name is a required field')
    .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
    .min(2, 'Min length 2 characters')
    .max(30, 'Max length 30 characters'),
  birthday: yup.string().required('Birthday date is a required field')
})
