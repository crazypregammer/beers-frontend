import HomePage from '../pages/HomePage'
import BeerDetailsPage from '../pages/BeerDetailsPage'
import AllBeersPage from '../pages/AllBeersPage'
import AddBeerPage from '../pages/AddBeerPage'
import EditBeerPage from '../pages/EditBeerPage'
import Login from '../pages/Login'
import Register from '../pages/Register'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/beers/:beerId' element={<BeerDetailsPage />} />
        <Route path='/beers' element={<AllBeersPage />} />
        <Route path='/beers/new' element={<AddBeerPage />} />
        <Route path='/beers/:beerId/edit' element={<EditBeerPage />} />
      </Routes>
    </>
  )
}

export default App
