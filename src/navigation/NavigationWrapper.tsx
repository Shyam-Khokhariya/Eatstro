import React from 'react'
import { CurvedBottomBar } from 'react-native-curved-bottom-bar'
import { CartIcon, FavroiteIcon, HomeIcon, OrderIcon } from '../assets/icon'
import EmptyTab from '../screens/EmptyTab'
import Home from '../screens/Home'
import {
  CenterButton,
  CustomDot,
  CustomText,
  ProfileIcon,
  TabButtons
} from '../styles/NavigationWrapper.style'
import Theme from '../styles/Theme'

const NavigationWrapper = () => {
  const renderTabIcon = (props: { routeName: string; selectedTab: string; navigate: any }) => {
    const { routeName, selectedTab, navigate } = props
    let iconComponent
    const color = routeName === selectedTab ? Theme.activeTab : Theme.inactiveTab
    switch (routeName) {
      case 'Home':
        iconComponent = <HomeIcon fill={color} />
        break
      case 'Favourite':
        iconComponent = <FavroiteIcon fill={color} stroke={color} />
        break
      case 'Orders':
        iconComponent = <OrderIcon fill={color} stroke={color} />
        break
      case 'Profile':
        iconComponent = <ProfileIcon source={require('../assets/profile.png')} />
        break
    }
    return (
      <TabButtons onPress={() => navigate(routeName)}>
        {iconComponent}
        <CustomText color={color}>{routeName}</CustomText>
        {routeName === selectedTab ? <CustomDot /> : null}
      </TabButtons>
    )
  }

  const renderCircle = (props: { selectedTab: string; navigate: any }) => {
    const { selectedTab, navigate } = props
    const routeName = selectedTab === 'Cart' ? 'Cart' : ''
    return (
      <CenterButton onPress={() => navigate(routeName)}>
        <CartIcon />
      </CenterButton>
    )
  }

  return (
    <CurvedBottomBar.Navigator
      type={'DOWN'}
      height={60}
      circleWidth={55}
      bgColor="white"
      borderTopLeftRight={true}
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      renderCircle={renderCircle}
      tabBar={renderTabIcon}
    >
      <CurvedBottomBar.Screen name="Home" position="LEFT" component={Home} />
      <CurvedBottomBar.Screen name="Favourite" position="LEFT" component={EmptyTab} />
      <CurvedBottomBar.Screen name="Cart" position="CENTER" component={EmptyTab} />
      <CurvedBottomBar.Screen name="Orders" position="RIGHT" component={EmptyTab} />
      <CurvedBottomBar.Screen name="Profile" position="RIGHT" component={EmptyTab} />
    </CurvedBottomBar.Navigator>
  )
}

export default NavigationWrapper
