import { lazy } from 'react'

import { Route, Routes } from 'react-router-dom'

import FullScreenLoading from '@/components/FullScreenLoading'

// pages
import About from './about'
import Mission from './about/Mission'
import Vision from './about/Vision'

import Services from './services'
import MobileApps from './services/MobileApps'
import WebApps from './services/WebApps'
import Marketing from './services/Marketing'

import Contacts from './contacts'
import Home from './Home'
import P404 from './P404'
import Cart from './cart'

import ShowProduct from './products/ShowProduct'
import { Suspense } from 'react'
import { useSelector } from 'react-redux';
import Category from './products/Category'


const Products = lazy(() => import('./products'))

const Users = lazy(() => import('./users'))


export default function Pages() {

  const { stat_loggedin } = useSelector(store => store.userSlice);


  // console.log('pages rendered')
  return (

    <Suspense fallback={<FullScreenLoading />}>
      <Routes>

        <Route path='/about' element={<About />}>
          <Route path='mission' element={<Mission />} />
          <Route path='vision' element={<Vision />} />
        </Route>

        <Route path='/services' element={<Services />}>
          <Route path='mobile' element={<MobileApps />} />
          <Route path='web' element={<WebApps />} />
          <Route path='marketing' element={<Marketing />} />
        </Route>

        {/* products */}
        <Route path='/products' element={<Products />} />
        <Route path='/products/category/:cat_slug' element={<Category />} />
        <Route path='/products/:id' element={<ShowProduct />} />

        {/* users */}
        {stat_loggedin && <Route path='/users' element={<Users />} />
        }

        <Route path='/contacts' element={<Contacts />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<P404 />} />
      </Routes>
    </Suspense>
  )
}
