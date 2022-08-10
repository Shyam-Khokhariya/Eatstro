import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NavigationWrapper from './src/navigation/NavigationWrapper'
import { StatusBar, Platform, ActivityIndicator } from 'react-native'
import { useFonts } from '@use-expo/font'
import { ThemeProvider } from 'styled-components'
import Theme from './src/styles/Theme'
import { CustomKeyboardAvoidingView, CustomSafeAreaView } from './src/styles/App.style'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Toast from 'react-native-toast-message'

const queryClient = new QueryClient()

const customFonts = {
  Abel: require('./src/assets/fonts/Abel-Regular.ttf'),
  'DM Sans': require('./src/assets/fonts/DMSans-Regular.ttf'),
  'DM Sans Bold': require('./src/assets/fonts/DMSans-Bold.ttf')
}
const App = () => {
  const [isLoaded] = useFonts(customFonts)

  if (!isLoaded) {
    return <ActivityIndicator animating={true} />
  }
  return (
    <ThemeProvider theme={Theme}>
      <CustomKeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <StatusBar
          animated={true}
          backgroundColor="#f5f5f5"
          barStyle="dark-content"
          showHideTransition="fade"
          hidden={false}
        />
        <QueryClientProvider client={queryClient}>
          <CustomSafeAreaView>
            <NavigationContainer>
              <NavigationWrapper />
            </NavigationContainer>
          </CustomSafeAreaView>
        </QueryClientProvider>
        <Toast />
      </CustomKeyboardAvoidingView>
    </ThemeProvider>
  )
}

export default App
