import Slider from '../components/Slider'
import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
       <Announcement/>      {/* announcement component before navbar so it appears on top */}
        <Navbar/>               {/* We are importing the other jsx files under components to keep things organized and clean */}
        <Slider/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Home