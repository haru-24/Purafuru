import axios from 'axios'
import { Infomation } from '~/types/types'

export const postReviewData = async (inputReview: string, pageid: number) => {
  try {
    if (inputReview !== '') {
      const result = await axios.post('http://localhost:8888/review', {
        review: inputReview,
        post_information_id: pageid,
      })
      if (result.data) {
        return result.data
      }
    } else {
      window.alert('文字が入力されていません')
    }
  } catch (err) {
    console.log(err)
  }
}

// 情報を投稿する

export const postInformation = async (postInformation: Infomation) => {
  try {
    const result = await axios.post('http://localhost:8888/post_info', {
      genre: postInformation.genre,
      place_name: postInformation.placeName,
      prefecture: postInformation.prefecture,
      post_number: postInformation.postNumber,
      address: postInformation.address,
      apeal_point: postInformation.apealPoint,
      recommendation: postInformation.recommendation,
      image: postInformation.image,
      post_user: postInformation.postUser,
      post_history_id: postInformation.postHistoryId,
      user_id: postInformation.userID,
      favorites: postInformation.favorites,
    })
    if (result.data) {
      return result.data as Infomation
    }
    return null
  } catch (err) {
    console.log(err)
  }
}
