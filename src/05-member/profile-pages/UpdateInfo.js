import '.././style/profile-pages/UpdateInfo.scss'

import React, { useEffect, useRef, useState } from 'react'
import UserProfileTmp from '../components/UserProfileTmp'
import { DistrictData } from '../data/DistrictData'
import { map, find, propEq, forEach, isNil, update } from 'ramda'
import Select from 'react-select'
import axios from 'axios'
import { UPDATE_PASS } from '../../my-config'

// selectedCity
const selectedCity = (cityName) => ({ value: cityName, label: cityName })
// selectedDistrict
const selectedDistrict = (districtName) => ({
  value: districtName,
  label: districtName,
})
// 當前縣市選項
const cities = () =>
  map((city) => ({ value: city.name, label: city.name }), DistrictData)
// 當前區域選項
const findDistricts = (cityName) =>
  find(propEq('name', cityName))(DistrictData)?.districts
// 區域選項 (符合下拉式選單的格式)
const districtOpts = (cityName) =>
  map(
    (d) => ({ value: d.name, label: d.name, zip: d.zip }),
    findDistricts(cityName)
  )
// 使用區域尋找，呼叫方式: queryByDistrict('新莊區')
const queryByDistrict = (district) => queryProcess('value', district)
// 使用區域代碼尋找、使用區域尋找共用元件
const queryProcess = (type, params) => {
  // 處理 params 空值的狀況
  if (isNil(params)) return
  // 所有的縣市名
  const citiesName = map((city) => city.name, DistrictData)
  let foundedObj = null
  // 從單一縣市內找尋的動作
  const findAction = (cityName) => {
    // 依據區域代碼找尋縣市內的地區資訊
    const found = find(propEq(type, params))(districtOpts(cityName))
    // 找不到回傳空值
    if (isNil(found)) return
    // 找到則將找到的值指派給foundedObj
    // e.g. => { value: "新莊區", label: "新莊區", zip: "242", city: "新北市" }
    foundedObj = { ...found, city: cityName }
  }
  // 執行動作
  forEach(findAction, citiesName)
  // 回傳找到的物件
  return foundedObj
}

function UpdateInfo(props) {
  // -----讀取地址-----
  // 被選區域
  const [district, setDistrict] = useState(props?.district)
  // 被選縣市
  const [city, setCity] = useState(queryByDistrict(district)?.city)

  console.log(city)
  // 被選縣市的相依區域
  const [districts, setDistricts] = useState(null)

  // -----檔案上傳-----
  // 選擇的檔案
  const [selectedFile, setSelectedFile] = useState(null)
  // 是否有檔案被挑選
  const [isFilePicked, setIsFilePicked] = useState(false)
  // 預覽圖片
  const [preview, setPreview] = useState('')
  // server上的圖片網址
  const [imgServerUrl, setImgServerUrl] = useState('')
  // Trigger the clicking of the input element
  const hiddenFileInput = useRef(null)

  // -----更新會員資料-----
  // 更新會員資料
  const [updateFD, setUpdateFD] = useState({
    mbuPhoto: '',
    // mbuBoy: false,
    // mbuGirl: false,
    mbuGender: '',
    mbuAddressCity: '',
    mbuAddressArea: '',
    mbuAddressDetail: '',
    mbuPhone: '',
    mbuSid: '',
  })

  // =================================================

  // -----讀取地址-----
  // city 改變對應動作
  useEffect(() => {
    if (!isNil(city)) setDistricts(districtOpts(city))
  }, [city])

  console.log(district)
  // city change 事件處理
  const handleCityChange = (e) => {
    setDistrict('')
    setCity(e.value)

    console.log(e.value)

    const id = e.currentTarget.id
    const val = e.currentTarget.value
    console.log({ id, val })

    setUpdateFD({ ...updateFD, [id]: val })
  }

  // -----檔案上傳-----
  // 使用點擊image去呼叫input file 才可以開啟資料夾選擇照片
  // Add a click event handler to the Button element and input element
  const handleClick = (e) => {
    hiddenFileInput.current.click()
  }

  useEffect(() => {
    if (!selectedFile) {
      setPreview('')
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    console.log(objectUrl)
    setPreview(objectUrl)

    // 當元件unmounted時清除記憶體
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  // Access to the uploaded file
  const handleChange = (e) => {
    const fileUploaded = e.target.files[0]
    // props.handleFile(fileUploaded)

    if (fileUploaded) {
      setIsFilePicked(true)
      setSelectedFile(fileUploaded)
      setImgServerUrl('')
    } else {
      setIsFilePicked(false)
      setSelectedFile(null)
      setImgServerUrl('')
    }

    const id = e.currentTarget.id
    const val = e.currentTarget.value
    console.log({ id, val })

    setUpdateFD({ ...updateFD, [id]: val })
  }

  // ====================================
  // 註冊
  const updateHandler = (e) => {
    const id = e.currentTarget.id
    const val = e.currentTarget.value
    console.log({ id, val })

    setUpdateFD({ ...updateFD, [id]: val })
  }

  const radioGenderHandler = (e) => {
    const id = e.currentTarget.id

    if (id === 'mbuBoy') {
      setUpdateFD({ ...updateFD, mbuGender: '男' })
    } else {
      setUpdateFD({ ...updateFD, mbuGender: '女' })
    }

    // if (id === 'mbuBoy') {
    //   setUpdateFD({ ...updateFD, mbuBoy: true, mbuGirl: false })
    // } else {
    //   setUpdateFD({ ...updateFD, mbuBoy: false, mbuGirl: true })
    // }
  }

  const updateSubmit = async (e) => {
    e.preventDefault()
    const { data } = await axios.post(UPDATE_PASS, updateFD)

    if (data.success) {
      alert('更新成功')
    } else {
      alert('更新失敗')
    }
  }

  return (
    <>
      <div className="s-body-profile">
        <div className="container">
          <UserProfileTmp />
          <div className="main-content">
            <div className="s-ui">
              <h2 className="s-ui-title">資料修改</h2>
              <form className="s-ui-card" action="" onSubmit={updateSubmit}>
                <input type="hidden" name="mbuSid" />
                <div className="s-ui-imgBx">
                  <img
                    className="s-ui-img"
                    src={selectedFile ? preview : '/05-member/ghost.png'}
                    alt=""
                    onClick={handleClick}
                  />
                  <input
                    className="s-ui-img-input"
                    type="file"
                    style={{ display: 'none' }}
                    ref={hiddenFileInput}
                    onChange={handleChange}
                    id="mbuPhoto"
                  />
                </div>
                <div className="s-ui-details">
                  <div className="s-ui-block1">
                    <div className="s-ui-block2">
                      <label className="s-ui-question">姓名: </label>
                      <div className="s-ui-answer">Sharon Yu</div>
                    </div>
                    <div className="s-ui-block2">
                      <label className="s-ui-question">電子郵件: </label>
                      <div className="s-ui-answer">yu5286pp@gmail.com</div>
                    </div>
                  </div>

                  <label className="s-ui-label">性別</label>
                  <div className="s-ui-radio1">
                    <input
                      type="radio"
                      name="mbuGender"
                      value="男"
                      id="mbuBoy"
                      className="s-ui-radio2"
                      checked={updateFD.mbuBoy}
                      onChange={radioGenderHandler}
                    />
                    <span className="s-ui-man">男</span>
                    <br />
                    <input
                      type="radio"
                      name="mbuGender"
                      value="女"
                      id="mbuGirl"
                      className="s-ui-radio2"
                      checked={updateFD.mbuGirl}
                      onChange={radioGenderHandler}
                    />
                    <span className="s-ui-man">女</span>
                  </div>

                  <label className="s-ui-label">預設地址</label>
                  <div className="s-ui-selectAddress">
                    <Select
                      value={city ? selectedCity(city) : ''}
                      id="mbuAddressCity"
                      className="s-ui-address"
                      name={props?.cityName}
                      options={cities()}
                      // value={selectedCity(city)}
                      onChange={handleCityChange}
                      placeholder="選擇城市"
                    />
                    <Select
                      value={district ? selectedDistrict(district) : ''}
                      id="mbuAddressArea"
                      className="s-ui-address"
                      name={props?.districtName}
                      // value={selectedDistrict(district)}
                      options={districts}
                      placeholder="選擇區域"
                      onChange={(e) => setDistrict(e.value)}
                    />
                  </div>
                  <input
                    className="s-ui-input"
                    type="text"
                    id="mbuAddressDetail"
                    placeholder="請輸入地址"
                    onChange={updateHandler}
                  />
                  <label className="s-ui-label">聯絡電話</label>
                  <input
                    className="s-ui-input"
                    type="text"
                    id="mbuPhone"
                    placeholder="請輸入連絡電話"
                    onChange={updateHandler}
                  />
                </div>
                <div className="s-ui-actionBtns">
                  <input
                    className="s-ui-actionBtn"
                    type="submit"
                    value="確認送出"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </>
  )
}

// reference:
// 1. https://medium.com/web-dev-survey-from-kyoto/how-to-customize-the-file-upload-button-in-react-b3866a5973d8
// 2. https://chenhanting.medium.com/react-rails-%E5%8F%B0%E7%81%A3%E5%8D%80%E7%B8%A3%E5%B8%82-%E5%8D%80%E5%9F%9F%E7%9A%84%E4%B8%8B%E6%8B%89%E9%81%B8%E5%96%AE-ffe75285a443

export default UpdateInfo
