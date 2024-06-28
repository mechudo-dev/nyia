import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

export default function RootLayout() {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text>Settle Ups Trips</Text>
      <StatusBar style='auto' />
      <Link href='/profile' className='text-blue-700'>
        Go to Profile
      </Link>
    </View>
  )
}
