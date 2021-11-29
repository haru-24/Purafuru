import axios from 'axios'
import { Infomation, UserData } from '~/types/types'

// クチコミ投稿
export const postReviewData = async (
  inputReview: string,
  pageid: number,
  userId: number,
  userName: string,
  userBirthPlace: string
) => {
  try {
    if (inputReview !== '') {
      const result = await axios.post('http://localhost:8888/review', {
        review: inputReview,
        post_information_id: pageid,
        user_id: userId,
        user: userName,
        user_birth_place: userBirthPlace,
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
export const postInformation = async (
  postInformation: Infomation,
  userData: UserData,
  strageUrl: string | undefined
) => {
  try {
    const result = await axios.post('http://localhost:8888/post_info', {
      genre: postInformation.genre,
      place_name: postInformation.placeName,
      prefecture: postInformation.prefecture,
      post_number: postInformation.postNumber,
      address: postInformation.address,
      apeal_point: postInformation.apealPoint,
      recommendation: postInformation.recommendation,
      image: strageUrl,
      post_user: userData.userName,
      post_history_id: postInformation.postHistoryId,
      user_id: userData.id,
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

// ログイン情報
export const postRegister = async (registerData: UserData) => {
  try {
    if (registerData.password === registerData.confirmPassword) {
      await axios.post('http://localhost:8888/users/register', {
        user_name: registerData.userName,
        birth_place: registerData.birthPlace,
        email: registerData.email,
        password: registerData.password,
      })
    } else {
      alert('パスワードが違います')
    }
  } catch (err) {
    console.log(err)
  }
}
