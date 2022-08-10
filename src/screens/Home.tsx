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
  CalorieView
} from '../styles/Home.style'
import { Image } from 'react-native-svg'
import {
  CalorieIcon,
  FavroiteIcon,
  HeartIcon,
  PlateerIcon,
  SearchIcon,
  SpiceIcon
} from '../assets/icon'
import { ListRenderItem } from 'react-native'
import Theme from '../styles/Theme'

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

const Item = ({ data }: { data: IUser }) => (
  <SearchResultCard>
    <CardImageView>
      <CardImage source={{ uri: data.photo }} resizeMode="stretch" />
      <FavoriteView>
        <FavoriteText>{data.favoriteCount}</FavoriteText>
        <FavoriteIconContainer>
          <HeartIcon fill={Theme.activeTab} />
        </FavoriteIconContainer>
      </FavoriteView>
      <PlusView>
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

const graphqlClient = new GraphQLClient('https://mockend.com/lakhanmandloi/fake-api/graphql')
export default function Home() {
  const [page, setPage] = React.useState(0)
  const [queryParams] = React.useState({ limit: 12 })
  const pageParams = {
    limit: 10,
    offset: page
  }
  const { isLoading, data, hasNextPage, fetchNextPage } = useInfiniteItemsQuery<ItemsQuery, Error>(
    { limit: queryParams.limit, offset: 0 },
    graphqlClient,
    {
      getNextPageParam: (lastPage: any, allPages: any) => {
        return {
          limit: queryParams.limit,
          offset: (allPages.length ?? 0) * (queryParams.limit ?? 1)
        }
      }
    }
  )
  console.log('data', data)
  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage()
    }
  }
  // console.log('data', data)
  if (isLoading) {
    return <ActivityIndicator animating={true} />
  }

  const renderItem: ListRenderItem<IUser> = ({ item }) => <Item data={item} />

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
          data={data.pages.map(page => page.items).flat()}
          renderItem={renderItem}
          keyExtractor={(item: IUser) => item.id}
          showsVerticalScrollIndicator={false}
          onEndReached={loadMore}
          onEndReachedThreshold={0.3}
        />
      </SearchResult>
    </Container>
  )
}
