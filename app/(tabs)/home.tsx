import { Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomNavbar from '@/components/navigation/CustomNavbar'
import { images } from '@/constants'
import { router } from 'expo-router'
import CustomButton from '@/components/buttons/CustomButton'

const Home = () => {
  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView>
        <View className='justify-center w-full h-full px-4 '>
          <CustomNavbar />
          <Text className='text-3xl tracking-widest text-white font-pmedium'>
            Home
          </Text>
          
          <CustomButton
            title='Show Transactions'
            handlePress={() => router.push('/transactions')}
            containerStyles='w-full mt-7'
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
