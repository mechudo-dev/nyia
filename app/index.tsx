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
import CustomNavbar from '@/components/navigation/CustomNavbar'

export default function RootLayout() {
  // const {loading, isLogged} = useGlobalContext()

  // if(!loading && isLogged) return <Redirect href='/home'/>
  return (
    <SafeAreaView className='h-full bg-primary'>
      {/* <Loader isLoading={loading} /> */}
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='items-center w-full min-h-[85vh] px-4 justify-center'>
          <CustomNavbar />
          <View
            className='border-2 border-white border-solid rounded-3xl w-[200px] h-[266px] overflow-hidden shadow-lg'
            style={{
              elevation: 5,
            }}
          >
            {/* <Image
              source={images.intro}
              className='object-contain w-full h-full'
              resizeMode='contain'
            /> */}
          </View>
          <View className='relative mt-5'>
            <Text className='text-3xl font-bold text-center text-white'>
              Splitting bills with friends?{' '}
              <Text className='text-secondary-100'>Nyia</Text> makes
              it simple.{' '}
            </Text>
          </View>

          <Text className='text-sm text-center text-gray-100 font-pregular mt-7'>
            Say goodbye to awkward money talks! Nyia keeps track of
            everything.
          </Text>

          <CustomButton
            title='Start App'
            handlePress={() => router.push('/sign-in')}
            containerStyles='w-full mt-7'
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  )
}
