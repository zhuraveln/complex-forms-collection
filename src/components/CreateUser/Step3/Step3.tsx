import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'

import Form from '../../Form'

import { Button } from '@mui/material'

import { IUserFieldsStep3 } from './types'

import FileInput from '../../UI/FileInput/FileInput'

const Step3: React.FC = () => {
  const navigate = useNavigate()

  // Hook useForm
  const { control, handleSubmit } = useForm<IUserFieldsStep3>()

  /** onSubmit for form Step3*/
  const onSubmit: SubmitHandler<IUserFieldsStep3> = data => {
    console.log(data)
    navigate('/result')
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name='files' control={control} />

        {/* Button for submit CreateUser Step3 */}
        <Button type='submit' variant='contained' size='large' fullWidth>
          Result
        </Button>
      </Form>
    </>
  )
}

export default Step3
