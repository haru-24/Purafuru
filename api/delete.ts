import axios from 'axios'

// お気に入り登録解除
export const deleteFavorite = async (userId: number | null, pageId: number) => {
  try {
    await axios.delete('http://localhost:8000/user_favorite', {
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
    await axios.delete('http://localhost:8000/post_info', {
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
    await axios.delete('http://localhost:8000/review', {
      data: {
        id: reviewId,
      },
    })
  } catch (err) {
    console.log(err)
  }
}

// https://share-tori.herokuapp.com
