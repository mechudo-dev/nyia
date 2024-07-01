import { Text, View, ScrollView, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomNavbar from '@/components/navigation/CustomNavbar'
import { StatusBar } from 'expo-status-bar'
import CustomFloatingButton from '@/components/buttons/CustomFloatingButton'

interface TransactionInterface {
  id?: string
  amount: number
  description: string
  date: Date
}

const DEFAULT_TRANSACTIONS = [
  {
    id: 'adsfasdf',
    amount: 5600,
    description: 'Uvas',
    date: new Date('05/05/2024'),
  },
  {
    id: 'asdsdfffdsd',
    amount: 60000,
    description: 'Almuerzo',
    date: new Date('25/05/2024'),
  },
  {
    id: 'sdfs',
    amount: 80000,
    description: 'Comida',
    date: new Date('6/05/2024'),
  },
] as TransactionInterface[]

const Item = ({ item }: { item: TransactionInterface }) => (
  <View className='p-5 my-2 bg-white rounded-xl'>
    <Text className='text-lg'>
      {item.description} - {item.amount}
    </Text>
  </View>
)

const Transactions = () => {
  const [transactions, setTransactions] = useState<
    TransactionInterface[] | null
  >([])
  return (
    <SafeAreaView className='h-full bg-primary'>
      {/* <ScrollView> */}
      <View className='w-full h-full '>
        <View className='px-4 '>
          <CustomNavbar />
          <View className='flex-col justify-between'>
            <Text className='text-2xl tracking-widest text-white font-pmedium'>
              Transactions
            </Text>
            {transactions?.length === 0 ? (
              <Text className='tracking-widest text-center text-white'>
                No transactions yet. Add a new one.
              </Text>
            ) : (
              <FlatList
                className='flex flex-col gap-2'
                data={transactions}
                renderItem={({ item }) => <Item item={item} />}
              />
            )}

            <CustomFloatingButton
              title='Add Transaction'
              handlePress={() => {}}
              containerStyles='mt-7'
            />
          </View>
        </View>
        <View className='flex-row items-center justify-between w-full p-4 border-t'>
          <Text className='text-2xl text-white font-pmedium'>Total</Text>
          <Text className='flex text-xl text-white font-pregular'>
            $323.540
          </Text>
        </View>
      </View>
      {/* </ScrollView> */}
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  )
}

export default Transactions
