import { Text, View } from 'react-native'
import React from 'react'

export default function EmptyTab(props: any) {
  return (
    <View>
      <Text>{props.route.name}</Text>
    </View>
  )
}
