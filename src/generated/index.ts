import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, useInfiniteQuery, UseQueryOptions, UseInfiniteQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BooleanOp = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export type IntOp = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
};

export type Item = {
  __typename?: 'Item';
  createdAt?: Maybe<Scalars['String']>;
  cuisineType?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  dietaryChoice?: Maybe<Scalars['String']>;
  favoriteCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  kitchen?: Maybe<Kitchen>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type ItemOrderByInput = {
  createdAt?: InputMaybe<SortOrder>;
  cuisineType?: InputMaybe<SortOrder>;
  desc?: InputMaybe<SortOrder>;
  dietaryChoice?: InputMaybe<SortOrder>;
  favoriteCount?: InputMaybe<SortOrder>;
  isPublished?: InputMaybe<SortOrder>;
  kitchen?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  photo?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
};

export type ItemWhereInput = {
  createdAt?: InputMaybe<StringOp>;
  cuisineType?: InputMaybe<StringOp>;
  desc?: InputMaybe<StringOp>;
  dietaryChoice?: InputMaybe<StringOp>;
  favoriteCount?: InputMaybe<IntOp>;
  isPublished?: InputMaybe<BooleanOp>;
  name?: InputMaybe<StringOp>;
  photo?: InputMaybe<StringOp>;
  price?: InputMaybe<IntOp>;
};

export type Kitchen = {
  __typename?: 'Kitchen';
  createdAt?: Maybe<Scalars['String']>;
  desc?: Maybe<Scalars['String']>;
  favoriteCount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  items?: Maybe<Array<Maybe<Item>>>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type KitchenOrderByInput = {
  createdAt?: InputMaybe<SortOrder>;
  desc?: InputMaybe<SortOrder>;
  favoriteCount?: InputMaybe<SortOrder>;
  isPublished?: InputMaybe<SortOrder>;
  items?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  photo?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
};

export type KitchenWhereInput = {
  createdAt?: InputMaybe<StringOp>;
  desc?: InputMaybe<StringOp>;
  favoriteCount?: InputMaybe<IntOp>;
  isPublished?: InputMaybe<BooleanOp>;
  name?: InputMaybe<StringOp>;
  photo?: InputMaybe<StringOp>;
  status?: InputMaybe<StringOp>;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  item?: Maybe<Item>;
  items?: Maybe<Array<Maybe<Item>>>;
  kitchen?: Maybe<Kitchen>;
  kitchens?: Maybe<Array<Maybe<Kitchen>>>;
};


export type RootQueryItemArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type RootQueryItemsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<ItemOrderByInput>>>;
  where?: InputMaybe<ItemWhereInput>;
};


export type RootQueryKitchenArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type RootQueryKitchensArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InputMaybe<KitchenOrderByInput>>>;
  where?: InputMaybe<KitchenWhereInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringOp = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type ItemsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type ItemsQuery = { __typename?: 'RootQuery', items?: Array<{ __typename?: 'Item', createdAt?: string | null, cuisineType?: string | null, desc?: string | null, dietaryChoice?: string | null, favoriteCount?: number | null, id?: number | null, isPublished?: boolean | null, name?: string | null, photo?: string | null, price?: number | null } | null> | null };


export const ItemsDocument = `
    query ITEMS($limit: Int, $offset: Int) {
  items(limit: $limit, offset: $offset) {
    createdAt
    cuisineType
    desc
    dietaryChoice
    favoriteCount
    id
    isPublished
    name
    photo
    price
  }
}
    `;
export const useItemsQuery = <
      TData = ItemsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: ItemsQueryVariables,
      options?: UseQueryOptions<ItemsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<ItemsQuery, TError, TData>(
      variables === undefined ? ['ITEMS'] : ['ITEMS', variables],
      fetcher<ItemsQuery, ItemsQueryVariables>(client, ItemsDocument, variables, headers),
      options
    );
export const useInfiniteItemsQuery = <
      TData = ItemsQuery,
      TError = unknown
    >(
      _pageParamKey: keyof ItemsQueryVariables,
      client: GraphQLClient,
      variables?: ItemsQueryVariables,
      options?: UseInfiniteQueryOptions<ItemsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useInfiniteQuery<ItemsQuery, TError, TData>(
      variables === undefined ? ['ITEMS.infinite'] : ['ITEMS.infinite', variables],
      (metaData) => fetcher<ItemsQuery, ItemsQueryVariables>(client, ItemsDocument, {...variables, ...(metaData.pageParam ?? {})}, headers)(),
      options
    );
