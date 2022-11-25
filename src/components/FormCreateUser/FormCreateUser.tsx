import React from 'react'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import dayjs, { Dayjs } from 'dayjs'
import 'dayjs/locale/ru'

import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography
} from '@mui/material'

import { UserSchema, IUserFields } from './types'

const FormCreateUser: React.FC = () => {
  // useForm
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IUserFields>({
    mode: 'onChange',
    resolver: yupResolver(UserSchema),
    defaultValues: {
      firstName: 'Nikita',
      lastName: 'Zhuravel',
      birthday: '1996-04-20',
      email: 'zhuravel.nikita@gmail.com',
      password: '214Fsdg%35'
    }
  })

  /** onSubmit for form */
  const onSubmit: SubmitHandler<IUserFields> = data => {
    console.log(data)
    reset()
  }

  return (
    // Form for user's information
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={1} mb={4}>
        {/* Field for First name */}
        <Controller
          name='firstName'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              label='First name'
              error={!!errors.firstName}
              helperText={errors.firstName ? errors.firstName.message : ''}
            />
          )}
        />

        {/* Field for Last name */}
        <Controller
          name='lastName'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              label='Last name'
              error={!!errors.lastName}
              helperText={errors.lastName ? errors.lastName.message : ''}
            />
          )}
        />

        {/* Field for password */}
        <Controller
          name='password'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              type='password'
              label='Password'
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ''}
            />
          )}
        />

        {/* Field for Birthday date */}
        <Controller
          name='birthday'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              type='date'
              label='Birthday date'
              onChange={date => field.onChange(date)}
              error={!!errors.birthday}
              helperText={errors.birthday ? errors.birthday.message : ''}
              InputLabelProps={{
                shrink: true
              }}
            />
          )}
        />

        {/* Field for email */}
        <Controller
          name='email'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              label='Email'
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ''}
            />
          )}
        />

        {/* Button for submit user's form */}
        <Button type='submit' variant='contained' size='large'>
          Готово
        </Button>
      </Stack>
    </form>
  )
}

export default FormCreateUser
