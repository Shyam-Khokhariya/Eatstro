import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <SafeAreaView
      style={{
        flex: 1
      }}
    >
      <Text style={{ fontSize: 25, paddingLeft: 10 }}>Hi, User!👋</Text>
      <Text style={{ fontSize: 15, marginVertical: 5, paddingLeft: 5 }}>
        What would you like to eat today?
      </Text>
      <TextInput
        style={{
          height: 60,
          backgroundColor: 'white',
          borderRadius: 15,
          shadowColor: 'white',
          shadowOpacity: 0.5,
          shadowRadius: 3,
          shadowOffset: {
            height: 0,
            width: 0
          },
          elevation: 2
        }}
        placeholder={'Search something'}
      >
        <Text></Text>
      </TextInput>
    </SafeAreaView>
  )
}
