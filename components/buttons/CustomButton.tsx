import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  icon,
}: {
  title: string
  handlePress: () => void
  containerStyles: string
  textStyles?: string
  isLoading?: boolean
  icon?: ImageSourcePropType
}) => {
  return (
    <TouchableOpacity
      className={`bg-secondary-100 rounded-xl h-[48px] justify-center items-center px-2 ${containerStyles} ${
        isLoading ? 'opacity-50' : ''
      }`}
      activeOpacity={0.7}
      onPress={handlePress}
      disabled={isLoading}
    >
      <View className={icon ? 'flex-row gap-2' : ''}>
        {icon && (
          <Image
            source={icon}
            resizeMode='contain'
            tintColor={'#161622'}
            className='w-6 h-6'
          />
        )}
        <Text className={`text-lg font-psemibold text-primary ${textStyles}`}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default CustomButton
