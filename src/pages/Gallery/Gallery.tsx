import React from 'react'
import { useCopy } from '../../utils/useCopy'
import { Text } from '../../components/Text'
import { VerticalTab } from '../../components/VerticalTab'
export default function Gallery() {
    const {data:copy}  = useCopy({filePath:'/copy/gallery.json'})
  return (
    <>
    <div>
        <Text text={copy?.title} />
        <Text text={copy?.subtitle}/>
        <VerticalTab/>
    </div>
    </>
  )
}
