import Container from 'componentes/Container'
import Footer from 'componentes/Footer'
import Header from 'componentes/Header/Index'
import FavoritesProvider from 'contexts/Favorite'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Default() {
  return (
    <main>
        <Header/>
        <FavoritesProvider>
            <Container>
                <Outlet/>
            </Container>
        </FavoritesProvider>
        <Footer/>
    </main>
  )
}
