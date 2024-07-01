import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}: {
  title: string
  handlePress: () => void
  containerStyles: string
  textStyles?: string
  isLoading?: boolean
}) => {
  return (
    <TouchableOpacity
      className={`bg-secondary-100 rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
        isLoading ? 'opacity-50' : ''
      }`}
      activeOpacity={0.7}
      onPress={handlePress}
      disabled={isLoading}
    >
      <Text className={`text-lg font-psemibold text-primary ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton
