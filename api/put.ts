import axios from 'axios'
import { Infomation } from '@/types/types'

export const putPostInfoFavoriteData = async (
  favorites: number,
  pageId: number
) => {
  try {
    await axios.put('https://share-tori.herokuapp.com/post_info/favorite', {
      favorites,
      id: pageId,
    })
  } catch (err) {
    console.log(err)
  }
}

export const putEditPostInfodata = async (
  postInformation: Infomation,
  imageUrl: string | undefined
) => {
  try {
    const result = await axios.put(
      'https://share-tori.herokuapp.com/post_info/edit',
      {
        id: postInformation.id,
        genre: postInformation.genre,
        place_name: postInformation.placeName,
        prefecture: postInformation.prefecture,
        post_number: postInformation.postNumber,
        address: postInformation.address,
        apeal_point: postInformation.apealPoint,
        recommendation: postInformation.recommendation,
        img_original_url: postInformation.imgOriginalUrl,
        image: imageUrl,
      }
    )
    if (result.data) {
      return result.data as Infomation
    }
    return null
  } catch (err) {
    console.log(err)
  }
}
