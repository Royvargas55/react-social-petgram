import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { ListPhotos } from './styles'

export const ListOfPhotoCards = () => {
  return (
    <ListPhotos>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(card => (
        <li key={card}>
          <PhotoCard id={card} />
        </li>
      ))}
    </ListPhotos>
  )
}
