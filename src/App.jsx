import './App.css'
import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import StartPage from './pages/StartPage'
import CountriesPage from './pages/CountriesPage'
import CollectionPage from './pages/CollectionPage'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<StartPage />}/>
          <Route path='/countries'  element={<CountriesPage />}/>
          <Route path='/collection'  element={<CollectionPage />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
