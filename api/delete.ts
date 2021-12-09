import axios from 'axios'

// お気に入り登録解除
export const deleteFavorite = async (userId: number | null, pageId: number) => {
  try {
    await axios.delete('https://share-tori.herokuapp.com/user_favorite', {
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
    await axios.delete('https://share-tori.herokuapp.com/post_info', {
      data: {
        id: pageId,
      },
    })
  } catch (err) {
    console.log(err)
  }
}

export const deleteReview = async (reviewId: number) => {
  try {
    await axios.delete('https://share-tori.herokuapp.com/review', {
      data: {
        id: reviewId,
      },
    })
  } catch (err) {
    console.log(err)
  }
}
// ページ削除時、お気に入りテーブルの削除
export const deletePageFavorite = async (pageId: number) => {
  try {
    await axios.delete(
      'https://share-tori.herokuapp.com/user_favorite/page_delete',
      {
        data: {
          favorite_page_id: pageId,
        },
      }
    )
  } catch (err) {
    console.log(err)
  }
}
