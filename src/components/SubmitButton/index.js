import React from 'react'
import { Button } from './styles'

export const SubmitButton = ({ title, type, onClick }) => {
  return (
    <Button type={type} onClick={onClick}>{title}</Button>
  )
}
