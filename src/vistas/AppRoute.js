import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,

} from 'react-router-dom';
import { Header } from './components/Header';
import { Inicio } from './Inicio';
import { Noticias } from './Noticias';
import { Productos } from './Productos';

export const AppRoute = () => {
    return (
        <Router>
            <div>
                <Header/>
                <Routes>
                    <Route path="/" element={<Inicio/>}/>
                    <Route path="/products" element={<Productos/>}/>
                    <Route path="/news" element={<Noticias/>}/>
                </Routes>
            </div>
        </Router>
    )
}
