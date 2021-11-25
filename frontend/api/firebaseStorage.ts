import { getStorage, ref, uploadBytes } from 'firebase/storage'
import { app } from '~/plugins/firebase'

// 画像データ取り込み
export const postImageData = (imgURL: string, imgData: any) => {
  const storage = getStorage(app)
  const imageRef = ref(storage, imgURL)
  uploadBytes(imageRef, imgData)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}
