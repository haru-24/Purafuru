import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage'
import { app } from '~/plugins/firebase'

interface ResultImageUrl {
  originalUrl: string
  getImgUrl: string
}

// 画像データ取り込み＆書き出し
const storage = getStorage(app)
export const postStrage = async (imgURL: string, imgData: any) => {
  try {
    const imageRef = ref(storage, imgURL)
    const upload = await uploadBytes(imageRef, imgData)
    if (upload) {
      const getImgUrl = await getDownloadURL(ref(storage, imgURL))
      const originalUrl = upload.metadata.fullPath
      const resultImageUrl = {
        originalUrl,
        getImgUrl,
      } as ResultImageUrl
      return resultImageUrl
    }
  } catch (err) {
    console.log(err)
  }
}

// 画像データの削除
export const deleteStorageData = async (imgUrl: string) => {
  try {
    const desertRef = ref(storage, imgUrl)
    await deleteObject(desertRef)
    console.log('delete storage data')
  } catch (err) {
    console.log(err)
  }
}
