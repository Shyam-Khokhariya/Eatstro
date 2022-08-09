import styled from 'styled-components/native'
import { ITheme } from './Theme'

export interface IContainerProps {
  theme?: ITheme
}
const CustomKeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`
const CustomSafeAreaView = styled.SafeAreaView`
  flex: 1;
  backgroundcolor: ${(props: IContainerProps) => props?.theme?.white};
`
export { CustomKeyboardAvoidingView, CustomSafeAreaView }
