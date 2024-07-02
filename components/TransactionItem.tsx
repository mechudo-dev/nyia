import { View, Text, Image } from 'react-native';
import React from 'react';
import { TransactionInterface } from '@/types';
import { icons } from '@/constants';
import { format } from 'date-fns';
import { formatCurrency } from '@/lib/utils';
import { TouchableOpacity, GestureHandlerRootView } from 'react-native-gesture-handler';

const TransactionItem = ({
  item,
  removeTransactionItem,
}: {
  item: TransactionInterface;
  removeTransactionItem: (transaction: TransactionInterface) => void;
}) => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <View
      className='flex-row items-center justify-between p-5 mb-4 bg-gray-400 rounded-xl'
    >
      <View className='flex-row justify-between pr-4' style={{ flex: 1 }}>
        <View>
          <Text className='text-lg'>{item.description}</Text>
          <Text className='text-base italic'>
            {format(item.date, 'hh:mm - dd MMMM yyyy')}
          </Text>
        </View>
        <View>
          <Text className='text-lg'>{formatCurrency(item.amount)}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => removeTransactionItem(item)}>  
        <Image
          source={icons.trash}
          resizeMode='contain'
          tintColor={'#161622'}
          className='w-6 h-6'
        />
      </TouchableOpacity>
    </View>
  </GestureHandlerRootView>
)

export default TransactionItem;