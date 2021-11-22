import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import './styles.css'

import CheckAuth from '../auth/CheckAuth'
import LoginContainer from '../auth/LoginContainer'
import RegisterContainer from '../auth/RegisterContainer'
import NoFound from '../shared/noFound'
import LayoutAdmin from '../../components/layout/admin/Layout'
import LayoutClient from '../../components/layout/client/Layout'
import { useSelector } from 'react-redux'

// Dashboard Client
import HomeContainer from '../dashboard/client/home/HomeContainer'
import ProfileContainer from '../dashboard/client/profile/ProfileContainer'
import ChatContainer from '../dashboard/client/chat/ChatContainer'
import ProductContainer from '../dashboard/client/product/ProductContainer'
import ProductDetail from '../dashboard/client/product/components/ProductDetail'
import NewsContainerAdmin from '../dashboard/client/news/NewsContainer'
import NewsDetail from '../dashboard/client/news/components/NewsDetail'

// Client
import HomeClientContainer from '../client/home/HomeClientContainer'
import NewsClienntContainer from '../client/news/NewsClientContainer'
import ProductClienntContainer from '../client/product/productClientContainer'

// Dashboar

const App = () => {
  //   const { token } = useSelector((state) => state.auth);
  const token = localStorage.getItem('token')
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path="/registrar" element={<RegisterContainer />} />
        <Route path="/login" element={<LoginContainer />} />
      </Routes> */}
      {token ? (
        <CheckAuth>
          <div id="body-id" className="g-sidenav-show  bg-gray-100">
            {/* <LayoutAdmin> */}
            <Routes>
              <Route path="/" element={<LayoutAdmin />}>
                <Route index element={<HomeContainer />} />
                <Route path="/chat" element={<ChatContainer />} />
                <Route path="/chat/:roomId" element={<ChatContainer />} />
                <Route path="/productos" element={<ProductContainer />} />
                <Route path="/productos/:slug" element={<ProductDetail />} />
                <Route path="/noticias" element={<NewsContainerAdmin />} />
                <Route path="/noticias/:slug" element={<NewsDetail />} />
                <Route path="/perfil" element={<ProfileContainer />} />
              </Route>
              <Route element={<NoFound />} />
            </Routes>
            {/* </LayoutAdmin> */}
          </div>
        </CheckAuth>
      ) : (
        <Routes>
          <Route path="/registrar" element={<RegisterContainer />} />
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/" element={<LayoutClient />}>
            <Route index element={<HomeClientContainer />} />
            <Route path="/noticias" element={<NewsClienntContainer />} />
            <Route path="/noticias/:slug" element={<NewsDetail />} />
            <Route path="/productos" element={<ProductClienntContainer />} />
            <Route path="/productos/:slug" element={<ProductDetail />} />
            <Route path="/*" element={<NoFound />} />
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  )
}

export default App
