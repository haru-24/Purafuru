import { prefectures } from '../utils/prefectures'

export type Genre = 'スポット' | 'グルメ'

export type Prefecture = typeof prefectures[number]

export interface Infomation {
  genre: Genre
  placeName: string
  prefecture: Prefecture
  postNumber: string
  address: string
  apealPoint: string
  recommendation: string
  image: string | null
  postUser: string | null
  postHistoryId: number | null
  userID: number | null
  favorites: number
}
