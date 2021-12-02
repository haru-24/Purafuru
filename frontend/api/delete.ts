import axios from 'axios'

// お気に入り登録解除
export const deleteFavorite = async (userId: number | null, pageId: number) => {
  try {
    await axios.delete('http://localhost:8888/user_favorite', {
      data: {
        user_id: userId,
        favorite_page_id: pageId,
      },
    })
  } catch (err) {
    console.log(err)
  }
}

// 記事の削除
export const deleteInformation = async (pageId: number) => {
  try {
    await axios.delete('http://localhost:8888/post_info', {
      data: {
        id: pageId,
      },
    })
  } catch (err) {
    console.log(err)
  }
}
