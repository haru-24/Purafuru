import axios from 'axios'

export const postReviewData = async (inputReview: string, pageid: number) => {
  try {
    if (inputReview !== '') {
      const result = await axios.post('http://localhost:8888/review', {
        review: inputReview,
        post_information_id: pageid,
      })
      if (result.data) {
        return result.data
      }
    } else {
      window.alert('文字が入力されていません')
    }
  } catch (err) {
    console.log(err)
  }
}
