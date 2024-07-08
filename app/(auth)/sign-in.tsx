import { Alert, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router';
import CustomNavbar from '@/components/navigation/CustomNavbar';
import FormField from '@/components/FormField';
import CustomButton from '@/components/buttons/CustomButton';
import Separator from '@/components/Separator';
// import { getCurrentUser, signIn } from "../../lib/appwrite";

const SignIn = () => {
  // const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const submit = async () => {
    if (form.email === '' || form.password === '') {
      Alert.alert('Error', ' Please fill in all fields')
    }

    setIsSubmitting(true);

    try {
      // await SignIn(form.email, form.password)
      // const result = await getCurrentUser()
      // setUser(result);
      // setIsLogged(true);
      Alert.alert("Success", "User signed in successfully");
      router.replace("/home");

    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      // setSubmitting(false);
    }

  }


  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className='w-full flex justify-center h-full px-4 my-6'
          style={{ minHeight: Dimensions.get('window').height - 100 }}>
            <CustomNavbar />
            <Text className='pb-2 text-2xl tracking-widest text-white font-pmedium'>
              Sign In
            </Text>
            <FormField
              title='Email'
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles='mt-4'
              keyboardType='email-address'
              placeholder='Email'
            />

            <FormField
              title='Password'
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles='mt-4'
              placeholder='Password'
            />

            <CustomButton
              title='Sign In'
              handlePress={submit}
              containerStyles='mt-4'
              isLoading={isSubmitting}
            />

            <Separator />

            <View className='flex-row w-full justify-center gap-2 px-1'>
              <CustomButton
                title='Google'
                handlePress={() => { }}
                containerStyles='mx-1'
              // isLoading={isSubmitting}
              />

              <CustomButton
                title='Apple ID'
                handlePress={() => { }}
                containerStyles='mx-1'
              // isLoading={isSubmitting}
              />
            </View>


            <View className='flex justify-center pt-5 flex-row gap-2'>
              <Text className='text-base text-gray-100 font-pregular'>
                Don't have an account?
              </Text>
              <Link href='/sign-up'
                className='text-base font-psemibold text-secondary' >
                Signup
              </Link>
            </View>
          </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn