import React from 'react'
import { UserSection } from '../container/UserSection'
import { Helmet } from 'react-helmet'

export const User = () => {
  return (
    <>
      <Helmet>
        <title>Petgram - Usuario</title>
        <meta name='description' content='Encuentra y postea fotos de las mascotas mas bonitas del mundo con Petgram' />
      </Helmet>
      <UserSection />
    </>
  )
}
