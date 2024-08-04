import Navbar from "./Components/Navbar"
import SearchBar from "./Components/SearchBar"
import ExploreFood from "./Components/ExploreFood"
import FoodMenu from "./Components/FoodMenu"
import Footer from "./Components/Footer"
import './App.css'



const App = () => {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <ExploreFood/>
      <FoodMenu/>
      <Footer/>
    </div>
  )
}

export default App