import React, { useState, useEffect } from 'react'

function ImageItemPreview({ index, setStepImages, stepImages }) {
  // 選擇的檔案
  const [selectedFile, setSelectedFile] = useState(null)
  // 是否有檔案被挑選
  const [isFilePicked, setIsFilePicked] = useState(false)
  // 預覽圖片
  const [preview, setPreview] = useState('')

  // 當選擇檔案更動時建立預覽圖
  useEffect(() => {
    if (!selectedFile) {
      setPreview('')
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // 當元件unmounted時清除記憶體
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const changeHandler = (e) => {
    const file = e.target.files[0]

    if (file) {
      setIsFilePicked(true)
      setSelectedFile(file)

      const tempStepImages = stepImages
      tempStepImages[index] = file
      setStepImages(tempStepImages)
    } else {
      setIsFilePicked(false)
      setSelectedFile(null)

      const tempStepImages = stepImages
      tempStepImages[index] = null
      setStepImages(tempStepImages)
    }
  }

  return (
    <div>
      <input type="file" name="file" onChange={changeHandler} />
      {selectedFile && (
        <div>
          <img src={preview} alt="" />
        </div>
      )}
    </div>
  )
}

export default ImageItemPreview
