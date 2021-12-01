import axios from 'axios'
import { Infomation, ResponseInformationData } from '../types/types'

// 検索データを取得
export const getSearchInformation = async (
  selectedPrefecture: string,
  selectedGenre: string,
  queryPageNumber: string
) => {
  try {
    const result = await axios.get('http://localhost:8888/post_info/search', {
      params: {
        prefecture: selectedPrefecture,
        genre: selectedGenre,
        page_number: queryPageNumber,
      },
    })
    if (result.data) {
      const dbInfoData = result.data.rows as Infomation[]
      const dbDataCount = result.data.count as number
      const resultData = { dbInfoData, dbDataCount } as ResponseInformationData
      return resultData
    }
    return null
  } catch (err) {
    console.log(err)
  }
}

// 全県全ジャンル新着１０件分のデータ
export const allInformation = async (queryPageNumber: string) => {
  try {
    const result = await axios.get('http://localhost:8888/post_info', {
      params: {
        page_number: queryPageNumber,
      },
    })

    if (result.data) {
      const dbInfoData = result.data.rows as Infomation[]
      const dbDataCount = result.data.count as number
      const resultData = { dbInfoData, dbDataCount } as ResponseInformationData
      return resultData
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

// ユーザーがお気に入りしているか否か
export const getUserFavoriteData = async (
  userId: number | null,
  pageId: number
) => {
  try {
    const result = await axios.get('http://localhost:8888/user_favorite', {
      params: {
        user_id: userId,
        favorite_page_id: pageId,
      },
    })
    if (result.data) {
      return true as boolean
    } else {
      return false as boolean
    }
  } catch (err) {
    console.log(err)
  }
}
