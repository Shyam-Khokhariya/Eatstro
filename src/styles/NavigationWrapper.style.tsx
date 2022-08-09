import styled from 'styled-components/native'
import { IContainerProps } from './App.style'

interface ITextProps {
  color: string
}

const CenterButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background: ${(props: IContainerProps) => props?.theme?.activeTab};
  box-shadow: 0px 20px 40px rgba(244, 67, 41, 0.2);
  bottom: 28px;
`
const TabButtons = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`
const ProfileIcon = styled.Image`
  height: 24px;
  width: 24px;
  border-radius: 12px;
`
const CustomText = styled.Text`
  margin-top: 4px;
  font-size: 12px;
  color: ${(props: ITextProps) => (props.color ? props.color : '#000000')};
`
const CustomDot = styled.View`
  height: 6;
  width: 6;
  border-radius: 50%;
  background: ${(props: IContainerProps) => props?.theme?.activeTab};
  margin-top: 4px;
`

export { CenterButton, TabButtons, ProfileIcon, CustomText, CustomDot }
