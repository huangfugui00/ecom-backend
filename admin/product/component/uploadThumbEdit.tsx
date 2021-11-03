import React from 'react'

import { Label, Box, DropZone, BasePropertyProps, DropZoneProps, DropZoneItem } from 'admin-bro'



const UploadThumbEdit = (props:BasePropertyProps)=>{
  const { property, onChange, record } = props

  const handleDropZoneChange: DropZoneProps['onChange'] = (files) => {
    onChange(property.name, files[0])
  }

  const uploadedPhoto = record.params.thumb//当前数据库中存储的图片
  const photoToUpload = record.params[property.name]//选择的图片

  return (
    <Box marginBottom="xxl">
      <Label>{property.label}</Label>
      <DropZone  onChange={handleDropZoneChange}/>
      {uploadedPhoto && !photoToUpload && (
        <DropZoneItem src={uploadedPhoto} />
      )}
    </Box>
  )
}   

export default UploadThumbEdit