import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import CustomButton from '@/components/buttons/CustomButton'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router'

export default function RootLayout() {
  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='items-center w-full min-h-[85vh] px-4 justify-center'>
          <Text className='my-4 text-4xl tracking-widest text-center text-white font-pbold'>
            Settle Ups <Text className='text-violet-500'>Trips</Text>
          </Text>
          <View
            className='border-2 border-white border-solid rounded-3xl w-[200px] h-[266px] overflow-hidden shadow-lg'
            style={{
              elevation: 5,
            }}
          >
            <Image
              source={images.intro}
              className='object-contain w-full h-full'
              resizeMode='contain'
            />
          </View>
          <View className='relative mt-5'>
            <Text className='text-3xl font-bold text-center text-white'>
              Splitting bills with friends?{' '}
              <Text className='text-secondary-100'>Settle Ups Trips</Text> makes
              it simple.{' '}
            </Text>
          </View>

          <Text className='text-sm text-center text-gray-100 font-pregular mt-7'>
            Say goodbye to awkward money talks! Settle Up keeps track of
            everything.
          </Text>

          <CustomButton
            title='Start App'
            handlePress={() => router.push('/home')}
            containerStyles='w-full mt-7'
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  )
}