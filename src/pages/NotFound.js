import React from 'react'
import { NotFoundContainer } from '../container/NotFoundContainer'
import { Helmet } from 'react-helmet'

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Petgram - Página no encontrada</title>
        <meta name='description' content='Encuentra y postea fotos de las mascotas mas bonitas del mundo con Petgram' />
      </Helmet>
      <NotFoundContainer />
    </>
  )
}
