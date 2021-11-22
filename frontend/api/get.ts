import axios from 'axios'
import { Infomation } from '~/types/types'

export const getInformations = async (
  prefecturePrams: string,
  genreParams: string
) => {
  try {
    const result = await axios.get('http://localhost:8888/post_info/search', {
      params: {
        prefecture: prefecturePrams,
        genre: genreParams,
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
