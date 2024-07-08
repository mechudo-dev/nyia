import { Text, View } from 'react-native'
import React from 'react'

const CustomNavbar = () => {
  return (
    <View className='my-2'>
      <Text className='text-3xl tracking-widest text-center text-white font-pbold'>
        Nyia <Text className='text-secondary'>App</Text>
      </Text>
    </View>
  )
}

export default CustomNavbar
