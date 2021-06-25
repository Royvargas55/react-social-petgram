import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { AccessLogo } from '../AccessLogo'
import { SubmitButton } from '../SubmitButton'
import { Form, Input, Title, SignUpPhrase, SignUpSpan, Link, ErrorMsg } from './styles'

export const UserForm = ({ onSubmit, title, error }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSumbit = event => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <AccessLogo />
      <Title>{title}</Title>
      {error && <ErrorMsg>{error}</ErrorMsg>}
      <Form onSubmit={handleSumbit}>
        <Input type='text' placeholder='Email' {...email} />
        <Input type='password' placeholder='Password' {...password} />
        <SubmitButton title={title} />
        {title === 'Registrate'
          ? (
            <SignUpPhrase>¿Ya tienes una cuenta?<Link to='/signin'><SignUpSpan> Inicia Sesión</SignUpSpan></Link></SignUpPhrase>
            )
          : (
            <SignUpPhrase>¿No tienes una cuenta?<Link to='/signup'><SignUpSpan> Registrate</SignUpSpan></Link></SignUpPhrase>
            )}
      </Form>
    </>
  )
}
