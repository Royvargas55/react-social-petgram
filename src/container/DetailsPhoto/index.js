import React from 'react'
import { Loader } from '../../components/Loader'
import { CenterLoader } from './styles'
import { useGetSinglePhoto } from '../../hoc/queryPhotos'
import { PhotoCard } from '../../components/PhotoCard'

export const DetailsPhotoCard = ({ id }) => {
  const { loading, error, data } = useGetSinglePhoto(id)
  if (loading) {
    return (
      <CenterLoader>
        <Loader />
      </CenterLoader>
    )
  }
  if (error) return <h1>Error...</h1>
  return (
    <PhotoCard {...data.photo} />
  )
}
