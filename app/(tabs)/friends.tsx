import { Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomNavbar from '@/components/navigation/CustomNavbar'
import { images } from '@/constants'
import { router } from 'expo-router'
import CustomButton from '@/components/buttons/CustomButton'

const Friends = () => {
  return (
    <SafeAreaView className='h-full text-white bg-primary '>
      <ScrollView>
        <View className='justify-center w-full h-full px-4 '>
          <CustomNavbar />
          <Text className='pb-4 text-2xl tracking-widest text-white font-pmedium'>
            Friends
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

export default Friends
