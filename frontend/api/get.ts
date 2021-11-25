import axios from 'axios'
import { Infomation } from '../types/types'

// 検索データを取得
export const getSearchInformation = async (
  selectedPrefecture: string,
  selectedGenre: string
) => {
  try {
    const result = await axios.get('http://localhost:8888/post_info/search', {
      params: {
        prefecture: selectedPrefecture,
        genre: selectedGenre,
      },
    })
    if (result.data) {
      return result.data as Infomation
    }
    return null
  } catch (err) {
    console.log(err)
  }
}

// 全県全ジャンル新着１０件分のデータ
export const allSearchInformation = async () => {
  try {
    const result = await axios.get('http://localhost:8888/post_info')

    if (result.data) {
      return result.data as Infomation
    }
    return null
  } catch (err) {
    console.log(err)
  }
}

// クチコミデータを取得
export const getAllReviewData = async (pageId: number) => {
  try {
    const result = await axios.get(`http://localhost:8888/review/${pageId}`)

    if (result.data) {
      return result.data
    }
    return null
  } catch (err) {
    console.log(err)
  }
}

// 個別のページデータ
export const getIndividualInformation = async (pageId: string) => {
  try {
    const result = await axios.get(
      `http://localhost:8888/post_info/information/${pageId}`
    )
    if (result.data) {
      return result.data as Infomation
    }
    return null
  } catch (err) {
    console.log(err)
  }
}
