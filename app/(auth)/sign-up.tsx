import { Alert, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router';
import CustomNavbar from '@/components/navigation/CustomNavbar';
import FormField from '@/components/FormField';
import CustomButton from '@/components/buttons/CustomButton';
import Separator from '@/components/Separator';
// import { getCurrentUser, signIn } from "../../lib/appwrite";

const SignUp = () => {
  // const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: '',
    birthday: '',
    phone: '',
    email: '',
    password: '',
    confirmationPassword: '',
    image: '',
  });

  const submit = async () => {
    if (
      form.name === '' ||
      form.phone === '' ||
      form.email === '' ||
      form.password === '' ||
      form.confirmationPassword === ''
      // || form.image === ''
    ) {
      Alert.alert('Error', ' Please fill in all fields')
    }

    setIsSubmitting(true);

    try {
      // const result = await createUser(form.email, form.password, form.username);
      // setUser(result);
      // setIsLogged(true);

      router.replace("/home");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      // setSubmitting(false);
    }

  }

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView>
        <View
          className='flex justify-center w-full h-full px-4 my-6'
          style={{ minHeight: Dimensions.get('window').height - 100 }}>

          <CustomNavbar />

          <Text className='pb-2 text-2xl tracking-widest text-white font-pmedium'>
            Sign Up
          </Text>

          <FormField
            title='Name'
            value={form.name}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles='mt-3'
            placeholder='Name'
          />

          <FormField
            title='Phone'
            value={form.email}
            handleChangeText={(e) => { }}
            otherStyles='mt-3'
            placeholder='Phone'
            keyboardType='numeric'
          />

          <FormField
            title='Password'
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles='mt-3'
            placeholder='Password'
          />

          <FormField
            title='Confirm Password'
            value={form.confirmationPassword}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles='mt-3'
            placeholder='Confirm Password'
          />

          <CustomButton
            title='Sign Up'
            handlePress={submit}
            containerStyles='mt-5'
            isLoading={isSubmitting}
          />

          <Separator />

          <View className='flex-row justify-center w-full grid-cols-2 gap-2'>
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


          <View className='flex flex-row justify-center gap-2 pt-5'>
            <Text className='text-base text-gray-100 font-pregular'>
              Already have an account?
            </Text>
            <Link href='/sign-in'
              className='text-base font-psemibold text-secondary' >
              Sign In
            </Link>
          </View>
        </View>


      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp