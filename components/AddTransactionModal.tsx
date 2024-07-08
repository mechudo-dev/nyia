import React, { useState } from 'react'
import {
  Modal,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import CustomButton from './buttons/CustomButton'
import { icons } from '@/constants'
import FormField from './FormField'
import { TransactionInterface } from '@/types'
import { generateUUID } from '@/lib/utils'

interface TransactionFormInterface {
  amount: number | string
  description: string
}

const AddTransactionModal = ({
  addTransactionItem,
}: {
  addTransactionItem: (transaction: TransactionInterface) => void
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [transactionForm, setTransactionForm] =
    useState<TransactionFormInterface>({
      amount: '',
      description: '',
    })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible)
    clearForm()
  }

  const submit = () => {
    const transaction = {
      id: generateUUID(),
      amount: Number(transactionForm.amount),
      description: transactionForm.description,
      date: new Date(),
    } as TransactionInterface
    addTransactionItem(transaction)
    toggleModal()
  }

  const clearForm = () => {
    setTransactionForm({
      amount: '',
      description: '',
    })
  }

  const cancelAdd = () => {
    toggleModal()
  }

  return (
    <View className='absolute right-4 bottom-4'>
      <CustomButton
        title='Add Transaction'
        handlePress={toggleModal}
        containerStyles=''
        icon={icons.add
        }
      />
      <Modal
        animationType='slide'
        transparent={true}
        visible={isModalVisible}
        className=' bg-secondary-100'
      >
        <View className='p-5 m-5 border-2 bg-primary border-secondary-100 rounded-xl'>
          <Text className='text-2xl text-white'>Add Transaction</Text>
          <Text className='text-white'>
            Here you can add a new transaction.
          </Text>

          <FormField
            title='Description'
            value={transactionForm.description}
            handleChangeText={(e) =>
              setTransactionForm({ ...transactionForm, description: e })
            }
            otherStyles='mt-5'
            placeholder='Description'
          />

          <FormField
            title='Amount'
            value={transactionForm.amount.toString()}
            handleChangeText={(e) =>
              setTransactionForm({ ...transactionForm, amount: e })
            }
            otherStyles='mt-5'
            placeholder='Amount'
            keyboardType='numeric'
          />

          <View className='justify-end w-full my-2'>
            <CustomButton
              title='Add Transaction'
              handlePress={submit}
              containerStyles='mt-4'
              isLoading={isSubmitting}
            />
            <CustomButton
              title='Cancel'
              handlePress={() => { cancelAdd() }}
              containerStyles='mt-4 bg-primary border border-secondary'
              textStyles='text-white'
              isLoading={isSubmitting}
            />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default AddTransactionModal

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})
