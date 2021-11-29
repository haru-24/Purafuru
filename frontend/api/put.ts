import axios from 'axios'

export const putPostInfoFavoriteData = async (
  favorites: number,
  pageId: number
) => {
  try {
    await axios.put('http://localhost:8888/post_info/favorite', {
      favorites,
      id: pageId,
    })
  } catch (err) {
    console.log(err)
  }
}
