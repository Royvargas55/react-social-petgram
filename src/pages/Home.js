import React from 'react'
import { ListOfCategories } from '../container/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'

export const Home = ({ id }) => {
  return (
    <div>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </div>
  )
}
