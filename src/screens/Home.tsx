import React from 'react'
import { GraphQLClient } from 'graphql-request'
import { ItemsQuery, useInfiniteItemsQuery, useItemsQuery } from '../generated'
import { ActivityIndicator, Text, View } from 'react-native'
import {
  Container,
  Title,
  SubTitle,
  SearchBar,
  SearchBarInput,
  SearchResult,
  SearchResultList,
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
const AddToCart = () => {
  Toast.show({
    type: 'success',
    text1: 'Added to Cart'
  })
}
const Item = ({ data }: { data: IUser }) => {
  const [favroite, setFavroite] = React.useState(false)
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
}

const graphqlClient = new GraphQLClient('https://mockend.com/lakhanmandloi/fake-api/graphql')
export default function Home() {
  const [queryParams] = React.useState({ limit: 12 })
  const [searchText, setSearchText] = React.useState<string>('')

  // const { isLoading, data, hasNextPage, fetchNextPage } = useInfiniteItemsQuery<ItemsQuery, Error>(
  const { isLoading, data } = useItemsQuery<ItemsQuery, Error>(
    graphqlClient,
    { limit: queryParams.limit, offset: 0, searchValue: searchText.trim() }
    // {
    //   getNextPageParam: (lastPage: any, allPages: any) => {
    //     return {
    //       limit: queryParams.limit,
    //       offset: (allPages.length ?? 0) * (queryParams.limit ?? 1)
    //     }
    //   }
    // }
  )
  // const loadMore = () => {
  //   if (hasNextPage) {
  //     fetchNextPage()
  //   }
  // }
  const renderItem: ListRenderItem<IUser> = ({ item }) => <Item data={item} />

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
      {isLoading ? (
        <Loader animating={true} />
      ) : (
        <SearchResult>
          <SearchResultList
            data={data?.items || []}
            contentContainerStyle={{ backgroundColor: Theme.background, paddingBottom: 50 }}
            // data={data.pages.map(page => page.items).flat()}
            renderItem={renderItem}
            keyExtractor={(item: IUser) => item.id}
            showsVerticalScrollIndicator={false}
            // onEndReached={loadMore}
            // onEndReachedThreshold={0.3}
          />
        </SearchResult>
      )}
    </Container>
  )
}
