import { icons } from '@/constants'
import React, { useState } from 'react'
import {
  Image,
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
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
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-1 ${otherStyles}`}>
      <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>
      <View className='w-full h-12 px-4 border-2 border-black-200 bg-black-100 rounded-2xl flex flex-row items-center focus:border-secondary'>
        <TextInput
          className='flex-1 text-base text-white font-pregular'
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
          placeholderTextColor='#7b7b8b'
          keyboardType={keyboardType ? keyboardType : 'default'}
          secureTextEntry={(title === "Password" || title === "Confirm Password") && !showPassword}
          {...props}
        />
        {(title === "Password" || title === "Confirm Password") && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField
