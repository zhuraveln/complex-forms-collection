import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Form from '../../Form'
import Input from '../../UI/Input/Input'

import { Button, Checkbox, FormControlLabel } from '@mui/material'

import { IUserFieldsStep2, UserSchemaStep2 } from './types'
import { normalizePhoneNumber } from '../../../utils/normalizePhoneNumber'

const Step2: React.FC = () => {
  const navigate = useNavigate()

  // Hook useForm
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<IUserFieldsStep2>({
    mode: 'onBlur',
    resolver: yupResolver(UserSchemaStep2),
    defaultValues: {
      email: 'test@example.com',
      // phoneNumber: '+7',
      password: 'Hd_yb6Y.u%Tng77',
      passwordConfirmation: 'Hd_yb6Y.u%Tng77'
    }
  })

  const hasPhoneNumber = watch('hasPhoneNumber')

  /** onSubmit for form Step2*/
  const onSubmit: SubmitHandler<IUserFieldsStep2> = data => {
    delete data.passwordConfirmation
    console.log(data)
    navigate('/step3')
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Field for Email */}
        <Input
          type='email'
          label='Email'
          {...register('email')}
          error={!!errors.email}
          helperText={errors?.email?.message}
        />

        {/* Checkbox for active field 'Phone number' */}
        <FormControlLabel
          control={<Checkbox {...register('hasPhoneNumber')} />}
          label='Do your have phone number?'
        />

        {hasPhoneNumber && (
          <Input
            type='tel'
            label='Phone number'
            defaultValue='+7'
            {...register('phoneNumber')}
            onChange={(event: any) =>
              (event.target.value = normalizePhoneNumber(event.target.value))
            }
            error={!!errors.phoneNumber}
            helperText={errors?.phoneNumber?.message}
          />
        )}

        {/* Field for password */}
        <Input
          type='password'
          label='Password'
          {...register('password')}
          error={!!errors.password}
          helperText={errors?.password?.message}
        />

        {/* Field for password confirmation */}
        <Input
          type='password'
          label='Confirm Password'
          defaultValue=''
          {...register('passwordConfirmation')}
          error={!!errors.passwordConfirmation}
          helperText={errors?.passwordConfirmation?.message}
        />

        {/* Button for submit CreateUser Step2 */}
        <Button type='submit' variant='contained' size='large' fullWidth>
          Next
        </Button>
      </Form>
    </>
  )
}

export default Step2
