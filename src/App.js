import React from 'react'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import CatalogCards from "./components/Catalog/CatalogCards"

const App = () => {
  return (

    <div>
      <Header />
      <CatalogCards />
      <Footer />
    </div>
  )
}

export default App