import React from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Route } from 'react-router-dom'

// Elements/Pages
import App from '../App'
import Home from '../pages/Home'
import Australia from '../pages/Australia'
import Thailand from '../pages/Thailand'
import ContactUs from '../pages/ContactUs'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import TermsAndConditions from '../pages/TermsAndConditions'
import Vpn from '../pages/VPN'
import NotFound from '../pages/404'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/dmrs" element={<App/>}>
            <Route index element={<Home/>}/>
            
            <Route path="thailand" element={<Thailand/>}/>

            <Route path="australia" element={<Australia/>}/>

            <Route path="vpn" element={<Vpn/>}/>

            <Route path="contact" element={<ContactUs/>}/>

            <Route path="terms" element={<TermsAndConditions/>}/>

            <Route path="policy" element={<PrivacyPolicy/>}/>


            <Route path='*' element={<NotFound/>}/>
        </Route>

    ) 
)

const Router = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default Router