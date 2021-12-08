import axios from 'axios'
import qs from 'qs'
import {
  Infomation,
  ResponseInformationData,
  UserFavoriteData,
} from '../types/types'

// 検索データを取得
export const getSearchInformation = async (
  selectedPrefecture: string,
  selectedGenre: string,
  queryPageNumber: string
) => {
  try {
    const result = await axios.get(
      'https://share-tori.herokuapp.com/post_info/search',
      {
        params: {
          prefecture: selectedPrefecture,
          genre: selectedGenre,
          page_number: queryPageNumber,
        },
      }
    )
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

// 検索データを取得(お気に入り順)
export const getSearchInformationFavoriteSort = async (
  selectedPrefecture: string,
  selectedGenre: string,
  queryPageNumber: string
) => {
  try {
    const result = await axios.get(
      'https://share-tori.herokuapp.com/post_info/search/sort_favorite',
      {
        params: {
          prefecture: selectedPrefecture,
          genre: selectedGenre,
          page_number: queryPageNumber,
        },
      }
    )
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
    const result = await axios.get(
      'https://share-tori.herokuapp.com/post_info',
      {
        params: {
          page_number: queryPageNumber,
        },
      }
    )

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

// お気に入り順１０件分のデータ
export const favoriteSortInformation = async (queryPageNumber: string) => {
  try {
    const result = await axios.get(
      'https://share-tori.herokuapp.com/post_info/sort_favorite',
      {
        params: {
          page_number: queryPageNumber,
        },
      }
    )

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
    const result = await axios.get(
      `https://share-tori.herokuapp.com/review/${pageId}`
    )

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
      `https://share-tori.herokuapp.com/post_info/information/${pageId}`
    )
    if (result.data) {
      const infoData = {
        id: result.data.id,
        genre: result.data.genre,
        placeName: result.data.place_name,
        prefecture: result.data.prefecture,
        postNumber: result.data.post_number,
        address: result.data.address,
        apealPoint: result.data.apeal_point,
        recommendation: result.data.recommendation,
        image: result.data.image,
        postUser: result.data.post_user,
        userID: result.data.user_id,
        favorites: result.data.favorites,
        postedAt: result.data.posted_at,
        imgOriginalUrl: result.data.img_original_url,
      } as Infomation
      return infoData
    }
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
    const result = await axios.get(
      'https://share-tori.herokuapp.com/user_favorite',
      {
        params: {
          user_id: userId,
          favorite_page_id: pageId,
        },
      }
    )
    if (result.data) {
      return true as boolean
    } else {
      return false as boolean
    }
  } catch (err) {
    console.log(err)
  }
}

export const getUserPostInfoData = async (userId: number) => {
  try {
    const result = await axios.get(
      'https://share-tori.herokuapp.com/post_info/userPostInfo',
      {
        params: {
          userID: userId,
        },
      }
    )
    if (result.data) {
      return result.data as Infomation[]
    }
  } catch (err) {
    console.log(err)
  }
}

export const getUserFavoritePageId = async (userId: number) => {
  try {
    const result = await axios.get(
      'https://share-tori.herokuapp.com/user_favorite/page_number',
      {
        params: {
          userID: userId,
        },
      }
    )
    if (result) {
      return result.data as UserFavoriteData[]
    }
  } catch (err) {
    console.log(err)
  }
}

export const getUserFavoritePages = async (pageId: number[]) => {
  try {
    const result = await axios.get(
      'https://share-tori.herokuapp.com/post_info/favorite_page',
      {
        params: { pageId },
        paramsSerializer(params) {
          return qs.stringify(params, { arrayFormat: 'repeat' })
        },
      }
    )
    if (result) {
      return result.data as Infomation[]
    }
  } catch (err) {
    console.log(err)
  }
}
