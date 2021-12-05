import { prefectures } from '../utils/prefectures'

export type Genre = 'スポット' | 'グルメ'

export type Prefecture = typeof prefectures[number]

export interface Infomation {
  id: number
  genre: Genre
  placeName: string
  prefecture: Prefecture
  postNumber: string
  address: string
  apealPoint: string
  recommendation: string
  image: string
  postUser: string | null
  postHistoryId: number | null
  userID: number | null
  favorites: number
  postedAt: string
  imgOriginalUrl: string
}

export interface UserData {
  id: number
  userName: string
  birthPlace: Prefecture
  email: string
  password?: string
  confirmPassword?: string
}

export interface ReviewData {
  id: number
  user: string
  userId: number
  userBirthPlace: string
  reviedAt?: string
  review: string
  postInformationId: number
}

export interface ResponseInformationData {
  dbInfoData: Infomation[]
  dbDataCount: number
}
