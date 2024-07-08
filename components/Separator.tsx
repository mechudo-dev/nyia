import { View } from 'react-native'
import React from 'react'

const Separator = ({ marginStyles, colorSyles, borderStyles }: {
  marginStyles?: string
  colorSyles?: string
  borderStyles?: string
}) => {
  return (
    <View className={` ${marginStyles ? marginStyles : 'my-5'} ${colorSyles ? colorSyles : 'border-secondary'} ${borderStyles ? borderStyles : 'border-t border-1'}`} />
  )
}

export default Separator