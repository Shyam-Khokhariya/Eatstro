import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NavigationWrapper from './src/navigation/NavigationWrapper'
import { StatusBar, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native'

const App = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <StatusBar
        animated={true}
        backgroundColor="#f5f5f5"
        barStyle="dark-content"
        showHideTransition="fade"
        hidden={false}
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
        <NavigationContainer>
          <NavigationWrapper />
        </NavigationContainer>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default App
