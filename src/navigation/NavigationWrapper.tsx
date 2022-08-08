import React from 'react'
import {
  Alert,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { CurvedBottomBar } from 'react-native-curved-bottom-bar'
import Home from '../screens/Home'

const NavigationWrapper = () => {
  const onClickButton = () => {
    Alert.alert('Change type curve up')
  }

  const renderIcon = (routeName: string, selectedTab: string) => {
    let icon = ''

    switch (routeName) {
      case 'Home':
        icon = '../assets/profile.png'
        break
      case 'Favourite':
        icon = '../assets/profile.png'
        break
      case 'Orders':
        icon = '../assets/profile.png'
        break
      case 'Profile':
        icon = '../assets/profile.png'
        break
    }
    return <Image source={require('../assets/profile.png')} />
  }

  return (
    <CurvedBottomBar.Navigator
      type={'DOWN'}
      height={60}
      circleWidth={55}
      bgColor="white"
      borderTopLeftRight={true}
      strokeWidth={2}
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      renderCircle={() => (
        <TouchableOpacity
          style={styles.btnCircle}
          onPress={() => onClickButton()}
        ></TouchableOpacity>
      )}
      tabBar={({ routeName, selectedTab, navigate }) => (
        <TouchableOpacity
          onPress={() => navigate(routeName)}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {renderIcon(routeName, selectedTab)}
        </TouchableOpacity>
      )}
    >
      <CurvedBottomBar.Screen name="Home" position="LEFT" component={Home} />
      <CurvedBottomBar.Screen name="Favourite" position="LEFT" component={Home} />
      <CurvedBottomBar.Screen name="Orders" position="RIGHT" component={Home} />
      <CurvedBottomBar.Screen name="Profile" position="RIGHT" component={Home} />
    </CurvedBottomBar.Navigator>
  )
}

export default NavigationWrapper

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 28
  },
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
    bottom: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: '#48CEF6'
  },
  img: {
    width: 30,
    height: 30
  }
})
