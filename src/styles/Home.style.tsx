import styled from 'styled-components/native'
import { IContainerProps } from './App.style'

const Container = styled.View`
  flex: 1;
  padding: 15px;
`
const Title = styled.Text`
  font-family: 'Abel';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  padding-left: 10px;
  color: ${(props: IContainerProps) => props?.theme?.primaryBlack};
`

const SubTitle = styled.Text`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  padding-left: 5px;
  line-height: 24px;
  color: ${(props: IContainerProps) => props?.theme?.primaryBlack};
  opacity: 0.5;
`
const SearchBar = styled.View`
  background: ${(props: IContainerProps) => props?.theme?.white};
  box-shadow: 0px 4px 40px rgba(34, 43, 50, 0.1);
  border-radius: 12px;
  height: 56px;
  margin-top: 6px;
  padding: 15px;
  flex-direction: row;
  display: flex;
`
const SearchBarInput = styled.TextInput`
  margin: 0px 8px;
`
export { Container, Title, SubTitle, SearchBar, SearchBarInput }
