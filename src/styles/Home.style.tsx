import { FlatList } from 'react-native'
import styled from 'styled-components/native'
import { IContainerProps } from './App.style'
import { IUser } from '../screens/Home'

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
const SearchResult = styled.View`
  flex: 1;
  margin-top: 12px;
  // background: ${(props: IContainerProps) => props?.theme?.activeTab};
`
const SearchResultList = styled.FlatList`
  // flex: 1;
`
const SearchResultTitle = styled.Text`
  font-family: 'Abel';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: ${(props: IContainerProps) => props?.theme?.primaryBlack};
`
const SearchResultCard = styled.View`
  flex: 1;
  background: ${(props: IContainerProps) => props?.theme?.white};
  box-shadow: 0px 4px 40px rgba(34, 43, 50, 0.1);
  border-radius: 16px;
  margin-top: 16px;
`
const CardImageView = styled.View`
  border-radius: 16px;
  background: ${(props: IContainerProps) => props?.theme?.inactiveTab};
`
const CardImage = styled.Image`
  border-radius: 16px;
  height: 140px;
`

const FavoriteView = styled.View`
  align-items: center;
  flex-direction: row;
  position: absolute;
  right: 16px;
  top: 16px;
`
const FavoriteText = styled.Text`
  margin-right: 8px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  color: ${(props: IContainerProps) => props?.theme?.white};
`
const FavoriteIconContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 20px;
  background: ${(props: IContainerProps) => props?.theme?.white};
`
const FavoriteIconText = styled.Text`
  text-align: center;
  fontsize: 10px;
`
const PlusView = styled.TouchableOpacity`
  justify-content: space-between;
  align-items: center;
  position: absolute;
  height: 40px
  width: 40px;
  bottom: 0;
  right: 0;
  border-top-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background: ${(props: IContainerProps) => props?.theme?.activeTab};
`
const PlusViewText = styled.Text`
  text-align: center;
  font-size: 30px;
  color: ${(props: IContainerProps) => props?.theme?.white};
`
const DetailView = styled.View`
  padding: 16px;
`
const TitleView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`
const TitleText = styled.Text`
  font-family: 'DM Sans Bold';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${(props: IContainerProps) => props?.theme?.primaryBlack};
`
const TitleIconView = styled.TouchableOpacity`
  border: 2px solid #d1d1d1;
  height: 24px;
  width: 24px;
  border-radius: 18px;

  align-items: center;
  justify-content: center;
`
const SubDetailView = styled.View``
const CalorieView = styled.View`
  align-items: center;
  flex-direction: row;
`
const CalorieText = styled.Text`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  opacity: 0.5;
  margin-vertical: 10px;
  margin-left: 7px;
  color: ${(props: IContainerProps) => props?.theme?.primaryBlack};
`
const DetailText = styled.Text`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  flex: none;
  color: ${(props: IContainerProps) => props?.theme?.primaryBlack};
`
const BottomView = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
`
const PriceText = styled.Text`
  font-family: 'DM Sans Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  flex: none;
  flex-grow: 0;
  color: ${(props: IContainerProps) => props?.theme?.primaryBlack};
`
const SpiceText = styled.Text`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  flex: none;
  flex-grow: 0;
  color: ${(props: IContainerProps) => props?.theme?.primaryBlack};
`

export {
  Container,
  Title,
  SubTitle,
  SearchBar,
  SearchBarInput,
  SearchResult,
  SearchResultList,
  SearchResultTitle,
  SearchResultCard,
  CardImageView,
  CardImage,
  FavoriteView,
  FavoriteText,
  FavoriteIconContainer,
  FavoriteIconText,
  PlusView,
  PlusViewText,
  DetailView,
  TitleView,
  TitleText,
  TitleIconView,
  SubDetailView,
  CalorieText,
  DetailText,
  BottomView,
  PriceText,
  SpiceText,
  CalorieView
}
