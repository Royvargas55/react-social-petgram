import React from 'react'
import { Link } from '@reach/router'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useSetLikeAnonymousPhoto } from '../../Graphql/mutationLikePhotos'
import { ImgWrapper, Img, Article } from './styles'
import { FavButton } from '../FavButton'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const { element, show } = useIntersectionObserver()

  const key = `like-${id}`
  const { storedValue: liked, setLocalStorage: setLiked } = useLocalStorage(key, false)

  const { toggleLike } = useSetLikeAnonymousPhoto(id)

  const handleFavClick = () => {
    !liked && toggleLike()
    setLiked(!liked)
  }

  return (
    <Article ref={element}>
      {
        show &&
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} alt='image' />
              </ImgWrapper>
            </Link>
            <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
          </>
      }

    </Article>
  )
}
