import { Text, View, ScrollView, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomNavbar from '@/components/navigation/CustomNavbar'
import { StatusBar } from 'expo-status-bar'
import { formatCurrency } from '@/lib/utils'
import AddTransactionModal from '@/components/AddTransactionModal'
import { TransactionInterface } from '@/types'
import TransactionItem from '@/components/TransactionItem'

const Transactions = () => {
  const [transactions, setTransactions] = useState<TransactionInterface[]>([])
  const [total, setTotal] = useState<number>(0)

  const addTransactionItem = (transaction: TransactionInterface) => {
    setTransactions([...transactions, transaction])
    setTotal(total + transaction.amount)
  }

  const removeTransactionItem = (transaction: TransactionInterface) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter(
        (transactionItem) => transactionItem.id !== transaction.id
      )
    )
    setTotal(total - transaction.amount)
  }

  return (
    <SafeAreaView className='h-full text-white bg-primary '>
      <View style={{ flex: 1 }}>
        <View className='justify-center w-full h-full' style={{ flex: 1 }}>
          <View className='px-4 '>
            <CustomNavbar />
            <Text className='pb-2 text-2xl tracking-widest text-white font-pmedium'>
              Transactions
            </Text>
          </View>
          <View className='justify-center ' style={{ flex: 1 }}>
            {transactions?.length === 0 ? (
              <Text className='tracking-widest text-center text-white'>
                No transactions yet.{' '}
                <Text className='text-secondary-100'>Add a new one below.</Text>
              </Text>
            ) : (
              <FlatList
                className='flex flex-col w-full p-2'
                data={transactions}
                renderItem={({ item }) => (
                  <TransactionItem
                    item={item}
                    removeTransactionItem={removeTransactionItem}
                  />
                )}
              />
            )}
            <AddTransactionModal addTransactionItem={addTransactionItem} />
          </View>
        </View>
        <View className='flex-row items-center justify-between w-full p-4 border-t border-secondary-100'>
          <Text className='text-2xl text-white font-pmedium'>Total</Text>
          <Text className='flex text-xl text-white font-pregular'>
            {formatCurrency(total)}
          </Text>
        </View>
      </View>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  )
}

export default Transactions
