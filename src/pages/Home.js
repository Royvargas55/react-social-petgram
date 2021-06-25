import React from 'react'
import { ListOfCategories } from '../container/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Helmet } from 'react-helmet'

export const Home = ({ id }) => {
  return (
    <>
      <Helmet>
        <title>Petgram - App de fotos para mascotas</title>
        <meta name='description' content='Encuentra y postea fotos de las mascotas mas bonitas del mundo con Petgram' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  )
}
