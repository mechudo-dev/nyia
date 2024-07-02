import React from 'react'
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  keyboardType,
  ...props
}: {
  title: string
  value: string
  placeholder: string
  handleChangeText: (e: any) => void
  otherStyles: string
  keyboardType?: KeyboardTypeOptions
}) => {
  return (
    <View className={`space-y-1 ${otherStyles}`}>
      <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>
      <View className='w-full h-16 px-4 border-2 border-black-200 bg-black-100 rounded-2xl focus:border-secondary'>
        <TextInput
          className='flex-1 text-base text-white font-pregular'
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
          placeholderTextColor='#7b7b8b'
          keyboardType={keyboardType ? keyboardType : 'default'}
        />
      </View>
    </View>
  )
}

export default FormField
