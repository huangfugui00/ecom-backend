import React from 'react'
import { Box, BasePropertyProps } from 'admin-bro'


const UploadImageList = (props:BasePropertyProps)=>{
  const { record } = props

  const srcImg = record.params['avatar']
  return (
    <Box>
      {srcImg ? (
        <img src={srcImg} width="100px"/>
      ) : 'no image'}
    </Box>
  )
}

export default UploadImageList