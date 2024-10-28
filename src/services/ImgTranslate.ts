import { translateImg } from '@/pages/Operation/Product/service'
import { beforeUpload } from '@/utils/tool'
import { message } from 'antd'
import type { RcFile } from 'antd/es/upload'

/*
 使用例子
  const handleUpload = async (file: RcFile, editingSpec: any, index: any) => {
    const imageUrl = await ImgTranslate.handleUpload(file)
    if (imageUrl && imageUrl.length > 0) {
      editingSpec.specValue[index].fileUrl = imageUrl
    }
  }

  const translateImage = async (translateImage: any, editingSpec: any, index: any) => {
    if (!translateImage.fileUrl) {
      message.error('没有图片需要翻译')
      return
    }

    const filename = 'downloaded_file.jpg'
    const mimeType = 'image/jpeg'

    try {
      const file = await ImgTranslate.urlToFile(translateImage.fileUrl, filename, mimeType)
      handleUpload(file as RcFile, editingSpec, index)
    } catch (error) {
      console.error('文件上传失败', error)
      message.error('文件上传失败')
    }
  }
  */
class ImgTranslate {
  static async handleUpload(file: RcFile): Promise<string> {
    const formData = new FormData()
    formData.append('file', file)
    try {
      await beforeUpload(file, 4)
      const res = await translateImg(formData)
      if (res.success) {
        message.success('图片翻译成功')
        return res.data
      } else {
        message.error(res.debugMsg)
        return ''
      }
    } catch (err) {
      message.error('图片翻译失败')
      return ''
    }
  }

  static async urlToFile(url: string, filename: string, mimeType: string): Promise<File> {
    try {
      const response = await fetch(url)
      const blob = await response.blob()
      return new File([blob], filename, { type: mimeType })
    } catch (error) {
      console.error('从URL获取文件失败', error)
      throw new Error('从URL获取文件失败')
    }
  }
}

export default ImgTranslate
