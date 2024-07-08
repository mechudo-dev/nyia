import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
// import { useGlobalContext } from "../../context/GlobalProvider";

const AuthLayout = () => {
  // const { loading, isLogged } = useGlobalContext();
  // if (!loading && isLogged) return <Redirect hred='/home' />
  return (
    <>
      <Stack>
        <Stack.Screen
          name='sign-in'
          options={{
            headerShown: false
          }} />
        <Stack.Screen
          name='sign-up'
          options={{
            headerShown: false
          }} />
      </Stack>
      {/* <Loader isLoading={loading} /> */}
      <StatusBar backgroundColor='#161622' style='light' />
    </>
  )
}

export default AuthLayout