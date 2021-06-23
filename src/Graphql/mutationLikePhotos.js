import { gql, useMutation } from '@apollo/react-hooks'

const SET_LIKE_ANONYMOUS_PHOTO = gql`
    mutation likeAnonymousPhoto($input: LikePhoto!) {
        likeAnonymousPhoto(input: $input) {
            id,
            liked,
            likes
        }
    }
`

export const useSetLikeAnonymousPhoto = (id) => {
  const [toggleLike, data] = useMutation(SET_LIKE_ANONYMOUS_PHOTO, { variables: { input: { id } } })
  return { toggleLike, data }
}
