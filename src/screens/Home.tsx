import React, { useCallback } from 'react'
import { GraphQLClient } from 'graphql-request'
import { ItemsQuery, useItemsQuery } from '../generated'
import { FlatList, ScrollView } from 'react-native'
import {
  Container,
  Title,
  SubTitle,
  SearchBar,
  SearchBarInput,
  SearchResult,
  SearchResultCard,
  CardImageView,
  CardImage,
  FavoriteView,
  FavoriteText,
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
  FavoriteIconContainer,
  CalorieView,
  SearchingResult,
  Loader
} from '../styles/Home.style'
import { CalorieIcon, HeartIcon, PlateerIcon, SearchIcon, SpiceIcon } from '../assets/icon'
import { ListRenderItem } from 'react-native'
import Theme from '../styles/Theme'
import Toast from 'react-native-toast-message'

export interface IUser {
  createdAt: string
  cuisineType: string
  desc: string
  dietaryChoice: string
  favoriteCount: number
  id: number
  isPublished: Boolean
  name: string
  photo: string
  price: number
}

const Item = React.memo(
  ({ data }: { data: IUser }) => {
    const [favroite, setFavroite] = React.useState(false)
    const AddToCart = React.useCallback(() => {
      Toast.show({
        type: 'success',
        text1: 'Added to Cart'
      })
    }, [])
    return (
      <SearchResultCard>
        <CardImageView>
          <CardImage source={{ uri: data.photo }} resizeMode="stretch" />
          <FavoriteView>
            <FavoriteText>{favroite ? data.favoriteCount + 1 : data.favoriteCount}</FavoriteText>
            <FavoriteIconContainer onPress={() => setFavroite(data => !data)}>
              <HeartIcon
                fill={favroite ? Theme.activeTab : Theme.inactiveTab}
                stroke={favroite ? Theme.activeTab : Theme.inactiveTab}
              />
            </FavoriteIconContainer>
          </FavoriteView>
          <PlusView onPress={AddToCart}>
            <PlusViewText>+</PlusViewText>
          </PlusView>
        </CardImageView>
        <DetailView>
          <TitleView>
            <TitleText>{data.name}</TitleText>
            <TitleIconView>
              <PlateerIcon />
            </TitleIconView>
          </TitleView>
          <SubDetailView>
            <CalorieView>
              <CalorieIcon />
              <CalorieText>789 kcal</CalorieText>
            </CalorieView>
            <DetailText>{data.desc}</DetailText>
            <BottomView>
              <PriceText>$ {data.price}</PriceText>
              <SpiceText>
                <SpiceIcon fill={Theme.activeTab} /> <SpiceIcon fill={Theme.inactiveTab} />{' '}
                <SpiceIcon fill={Theme.inactiveTab} />
              </SpiceText>
            </BottomView>
          </SubDetailView>
        </DetailView>
      </SearchResultCard>
    )
  },
  () => true
)

const graphqlClient = new GraphQLClient('https://mockend.com/lakhanmandloi/fake-api/graphql')
export default function Home() {
  const [searchText, setSearchText] = React.useState<string>('')

  const { isLoading, data } = useItemsQuery<ItemsQuery, Error>(graphqlClient, {
    searchValue: searchText.trim()
  })
  return (
    <Container>
      <Title>Hi, User! 👋</Title>
      <SubTitle>What would you like to eat today?</SubTitle>
      <SearchBar>
        <SearchIcon />
        <SearchBarInput
          placeholder="Search something..."
          value={searchText}
          onChangeText={(text: string) => setSearchText(text)}
        />
      </SearchBar>
      {searchText.trim() ? (
        <SearchingResult>Search results for {searchText}</SearchingResult>
      ) : null}
      {isLoading ? <Loader animating={true} /> : null}
      {data?.items?.length ? (
        <SearchResult>
          <ScrollView
            contentContainerStyle={{ backgroundColor: Theme.background, paddingBottom: 50 }}
            showsVerticalScrollIndicator={false}
          >
            {data.items.map((item, index) => (
              <Item key={index} data={item} />
            ))}
          </ScrollView>
        </SearchResult>
      ) : null}
    </Container>
  )
}
