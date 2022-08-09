import React from 'react'
import { Container, SearchBar, SearchBarInput, SubTitle, Title } from '../styles/Home.style'
import { SearchIcon } from '../assets/icon'

export default function Home() {
  return (
    <Container>
      <Title>Hi, User! 👋</Title>
      <SubTitle>What would you like to eat today?</SubTitle>
      <SearchBar>
        <SearchIcon />
        <SearchBarInput placeholder="Search something..." />
      </SearchBar>
    </Container>
  )
}
