import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { app } from '~/plugins/firebase'

interface ResultImageUrl {
  uploadUrl: string
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
      const uploadUrl = upload.metadata.fullPath
      const resultImageUrl = {
        uploadUrl,
        getImgUrl,
      } as ResultImageUrl
      return resultImageUrl
    }
  } catch (err) {
    console.log(err)
  }
}

// 画像データの削除
// export const deleteFile = () =>{
//   try{
// const desertRef = ref(storage,"image")

//   }catch(err ){
//     console.log(err)
//   }
// }
