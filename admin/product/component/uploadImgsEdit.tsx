import React from 'react'

import { Label, Box, DropZone, BasePropertyProps, DropZoneProps, DropZoneItem } from 'admin-bro'


const UploadImgsEdit = (props:BasePropertyProps)=>{
  const { property, onChange, record } = props

  const handleDropZoneChange: DropZoneProps['onChange'] = (files) => {
    onChange(property.name, files)
  }

//   const uploadedImgs = record.params.imgs//当前数据库中存储的图片

  const uploadedImgs = Object.keys(record.params)
    .filter(key=>key.startsWith('imgs'))
    .map(key=>record.params[key])
//   const photoToUpload = record.params[property.name]//选择的图片
  const photoToUpload = Object.keys(record.params).filter(key=>key.startsWith('uploadImgs')).length ?true:false;

  return (
    <Box marginBottom="xxl">
      <Label>{property.label}</Label>
      <DropZone multiple onChange={handleDropZoneChange}/>
      {uploadedImgs && !photoToUpload && (
          uploadedImgs.map((uploadImg)=>
          <DropZoneItem src={uploadImg}/>
          )
      )}
    </Box>
  )
}   

export default UploadImgsEdit