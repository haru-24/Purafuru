import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { app } from '~/plugins/firebase'

// 画像データ取り込み＆書き出し

export const postStrage = async (imgURL: string, imgData: any) => {
  try {
    const storage = getStorage(app)
    const imageRef = ref(storage, imgURL)
    const upload = await uploadBytes(imageRef, imgData)
    if (upload) {
      const getImgUrl = await getDownloadURL(ref(storage, imgURL))
      return getImgUrl
    }
  } catch (err) {
    console.log(err)
  }
}
