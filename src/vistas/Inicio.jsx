import React from 'react'
import { Footer } from './components/Footer'
import { News } from './components/News'
import { Products } from './components/Products'
import { Team } from './components/Team'

export const Inicio = () => {
    return (
        <>
            <Products/>
            <News/>
            <Team/>
            <Footer/>
        </>
    )
}
