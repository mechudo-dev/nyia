import { Tabs } from 'expo-router'
import React from 'react'
import { icons } from '../../constants'
import { TabIcon } from '@/components/navigation/TabIcon'

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFA001',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height: 60,
          },
        }}
      >
        <Tabs.Screen
          name='home'
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name='Home'
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='transactions'
          options={{
            title: 'Transactions',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.transactions}
                color={color}
                name='Transactions'
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout
