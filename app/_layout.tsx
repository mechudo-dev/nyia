import { Stack } from 'expo-router'
import React from 'react'

const RootLayout = () => {
  return (
    // Declare each one of the screens
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
    </Stack>
  )
}

export default RootLayout
