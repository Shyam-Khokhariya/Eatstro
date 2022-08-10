import React from "react";
import {
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
} from "../styles/Home.style";
import { SearchIcon } from "../assets/icon";
import { ListRenderItem } from "react-native";
import { Image } from "react-native-svg";

export interface IUser {
  id: string;
  name: string;
  img: any;
  favorite: string;
  kcal: string;
  details: string;
  price: string;
}

const DATA = [
  {
    id: "1",
    name: "Burger",
    img: "../assets/burger.png",
    favorite: "150",
    kcal: "749 kcal",
    details:
      "Homemade beef cutlet with signature sauce with parmesan and mustard will not leave you indifferent...",
    price: "$ 14",
  },
  {
    id: "2",
    name: "FoodItemX",
    img: "../assets/FoodItemX.png",
    favorite: "180",
    kcal: "835 kcal",
    details:
      "Homemade beef cutlet with signature sauce with parmesan and mustard will leave you un-care...",
    price: "$ 20",
  },
];

const Item = ({ data }: { data: IUser }) => (
  <SearchResultCard>
    {/* <SearchResultTitle>{data.name}</SearchResultTitle> */}
    <CardImageView>
      <CardImage source={require('../assets/burger.png')} resizeMode="stretch"/>
      <FavoriteView>
        <FavoriteText>{data.favorite}</FavoriteText>
        <FavoriteIcon>
          <FavoriteIconText>H</FavoriteIconText>
        </FavoriteIcon>
      </FavoriteView>
      <PlusView>
        <PlusViewText>+</PlusViewText>
      </PlusView>
    </CardImageView>
    <DetailView>
      <TitleView>
        <TitleText>{data.name}</TitleText>
        <TitleIconView></TitleIconView>
      </TitleView>
      <SubDetailView>
        <CalorieText>🔥 {data.kcal}</CalorieText>
        <DetailText>{data.details}</DetailText>
        <BottomView>
          <PriceText>{data.price}</PriceText>
          <SpiceText></SpiceText>
        </BottomView>
      </SubDetailView>
    </DetailView>
  </SearchResultCard>
);

export default function Home() {
  const renderItem: ListRenderItem<IUser> = ({ item }) => <Item data={item} />;

  return (
    <Container>
      <Title>Hi, User! 👋</Title>
      <SubTitle>What would you like to eat today?</SubTitle>
      <SearchBar>
        <SearchIcon />
        <SearchBarInput placeholder="Search something..." />
      </SearchBar>
      <SearchResult>
        <SearchResultList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item: IUser) => item.id}
        />
      </SearchResult>
    </Container>
  );
}
