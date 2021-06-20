import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { ListPhotos } from './styles'

export const ListOfPhotoCards = () => {
  return (
    <ListPhotos>
      {[1, 2, 3].map(card => (
        <li key={card}>
          <PhotoCard />
        </li>
      ))}
    </ListPhotos>
  )
}
