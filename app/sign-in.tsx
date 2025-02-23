import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../constants/images'
import icons from '@/constants/icons'
import { login } from '@/lib/appwrite'


const SignIn = () => {

  const handleLogin = async() => {
    const result = await login()

    if (result){
      console.log('Login Success')
    }
    else{
      Alert.alert('Login Failed')
      console.log('Login Failed')
    }

   }


  return (
    <SafeAreaView className='h-full bg-white'>
      <ScrollView contentContainerStyle={{
        height: "100%",
      }}>
        <View className='px-10'>

          <Image
            source={images.onboarding}
            className='w-full h-4/6'
            resizeMode='contain'
          />
          <View className='px-10'>
            <Text className='text-base text-center uppercase text-black-200 font-rubik'>Welcome to the Urban Keys</Text>
            <Text className='mt-2 text-2xl text-center text-black-300 font-rubik-bold'>Let's Find Your Perfect Space
              {"\n"}
              <Text className='text-primary-300'>
                Right at Your Fingertips!
              </Text>

            </Text>
            <Text className='mt-2 text-lg text-center font-rubik text-black-100'> Login to UrbanKeys with Google</Text>
            <TouchableOpacity onPress={handleLogin}
              className='w-full py-4 mt-5 bg-white rounded-full shadow-md shadow-zinc-400'
            >
              <View className='flex flex-row items-center justify-center'>
                <Image
                  className='w-5 h-5'
                  resizeMode='contain'
                  source={icons.google}
                />
                <Text className='ml-2 text-black-100 font-rubik'>Continue with Google</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn