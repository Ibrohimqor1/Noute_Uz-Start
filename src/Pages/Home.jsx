import React from 'react'
import Navtel from "../Components/Navtel/Navtel.jsx"
import Navbar from "../Components/Navbar/Navbar.jsx"
import Header from '../Components/Header/Header.jsx'
import Section from '../Components/Section/Section.jsx'
import AllProducts from '../Components/AllProducts/AllProducts'
const Home = () => {
  return (
    <div>
      
        <Navtel/>
        <Navbar/>
        <Header/>
        <Section/>
        <AllProducts/>
        {/* bilol */}
    </div>
  )
}

export default Home