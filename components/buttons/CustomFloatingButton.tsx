import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { icons } from '@/constants'

const CustomFloatingButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}: {
  title: string
  handlePress: () => void
  containerStyles?: string
  textStyles?: string
  isLoading?: boolean
}) => {
  return (
    <TouchableOpacity
      className={`bg-secondary-100 rounded-xl min-h-[62px] justify-center items-center absolute bottom-4 right-0 px-3 ${containerStyles} ${
        isLoading ? 'opacity-50' : ''
      }`}
      activeOpacity={0.7}
      onPress={handlePress}
      disabled={isLoading}
    >
      <View className='flex-row gap-2'>
        <Image
          source={icons.plus}
          resizeMode='contain'
          tintColor={'#161622'}
          className='w-6 h-6'
        />
        <Text className={`text-lg font-psemibold text-primary ${textStyles}`}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default CustomFloatingButton
