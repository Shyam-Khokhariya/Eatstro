import { FlatList } from "react-native";
import styled from "styled-components/native";
import { IContainerProps } from "./App.style";
import { IUser } from "../screens/Home";

const Container = styled.View`
  flex: 1;
  padding: 15px;
`;
const Title = styled.Text`
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  padding-left: 10px;
  color: ${(props: IContainerProps) => props?.theme?.primaryBlack};
`;

const SubTitle = styled.Text`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  padding-left: 5px;
  line-height: 24px;
  color: ${(props: IContainerProps) => props?.theme?.primaryBlack};
  opacity: 0.5;
`;
const SearchBar = styled.View`
  background: ${(props: IContainerProps) => props?.theme?.white};
  box-shadow: 0px 4px 40px rgba(34, 43, 50, 0.1);
  border-radius: 12px;
  height: 56px;
  margin-top: 6px;
  padding: 15px;
  flex-direction: row;
  display: flex;
`;
const SearchBarInput = styled.TextInput`
  margin: 0px 8px;
`;
const SearchResult = styled.View`
  flex: 1;
  margin-top: 12px;
  // background: ${(props: IContainerProps) => props?.theme?.activeTab};
`;
const SearchResultList = styled(FlatList as new () => FlatList<IUser>)`
  flex: 1;
  // background: ${(props: IContainerProps) => props?.theme?.primaryBlack};
`;
const SearchResultTitle = styled.Text`
  font-family: "Abel";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: ${(props: IContainerProps) => props?.theme?.primaryBlack};
`;
const SearchResultCard = styled.View`
  flex: 1;
  background: ${(props: IContainerProps) => props?.theme?.white};
  box-shadow: 0px 4px 40px rgba(34, 43, 50, 0.1);
  border-radius: 16px;
  margin-top: 16px;
  height: 280px;
`;
const CardImageView = styled.View`
  border-radius: 16px;
  position: absolute;
  height: 140px;
  width: 100%;
  background: ${(props: IContainerProps) => props?.theme?.inactiveTab};
`;
const CardImage = styled.Image`
  // resize-mode: "stretch";
  height: 140px;
`;
const FavoriteView = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  position: absolute;
  width: 60px;
  top: 15px;
  right: 15px;
`;
const FavoriteText = styled.Text`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  color: ${(props: IContainerProps) => props?.theme?.white};
`;
const FavoriteIcon = styled.TouchableOpacity`
  justify-content: center;
  height: 32px;
  width: 32px;
  border-radius: 20px;
  background: ${(props: IContainerProps) => props?.theme?.white};
`;
const FavoriteIconText = styled.Text`
  text-align: center;
  fontsize: 10px;
`;
const PlusView = styled.TouchableOpacity`
  justify-content: space-between;
  align-items: center;
  position: absolute;
  height: 40px
  width: 40px;
  bottom: 0;
  right: 0;
  border-top-left-radius:15;
  border-bottom-right-radius:15;
  background: ${(props: IContainerProps) => props?.theme?.activeTab};
`;
const PlusViewText = styled.Text`
  text-align: center;
  font-size: 30px;
  color: ${(props: IContainerProps) => props?.theme?.white};
`;

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
  FavoriteIcon,
  FavoriteIconText,
  PlusView,
  PlusViewText,
};
