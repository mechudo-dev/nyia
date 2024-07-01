import React from 'react'
import { Image, ImageSourcePropType, Text, View } from 'react-native'

export const TabIcon = ({
  icon,
  color,
  name,
  focused,
}: {
  icon: ImageSourcePropType
  color: string
  name: string
  focused: any
}) => {
  return (
    <View className='items-center justify-center gap-1'>
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className='w-6 h-6'
      />
      <Text
        className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  )
}
