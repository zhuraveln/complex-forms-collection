import React from 'react'
import { useNavigate } from 'react-router-dom'

import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Form from '../../Form'
import Input from '../../UI/Input/Input'

import { IUserFieldsStep1, UserSchemaStep1 } from './types'
import { Button } from '@mui/material'

const Step1: React.FC = () => {
  const navigate = useNavigate()

  // Hook useForm
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IUserFieldsStep1>({
    mode: 'onBlur',
    resolver: yupResolver(UserSchemaStep1),
    defaultValues: {
      firstName: 'Nikita',
      lastName: 'Zhuravel',
      birthday: '1996-04-20'
    }
  })

  /** onSubmit for form Step1*/
  const onSubmit: SubmitHandler<IUserFieldsStep1> = data => {
    console.log(data)
    navigate('/step2')
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Field for First name */}
        <Input
          type='text'
          label='First name'
          {...register('firstName')}
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />

        {/* Field for Last name */}
        <Input
          type='text'
          label='Last name'
          {...register('lastName')}
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />

        {/* Field for Birthday */}
        <Input
          type='date'
          label='Birthday date'
          defaultValue=''
          {...register('birthday')}
          InputLabelProps={{
            shrink: true
          }}
          error={!!errors.birthday}
          helperText={errors?.birthday?.message}
        />

        {/* Button for submit CreateUser Step1 */}
        <Button type='submit' variant='contained' size='large' fullWidth>
          Next
        </Button>
      </Form>
    </>
  )
}

export default Step1
