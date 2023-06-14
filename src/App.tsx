import { Route,Routes } from 'react-router-dom';

import { NavigationBar} from './components'
import { AboutMe, ContactMe,HomePage, Portfolio } from './pages';

import './App.css'

const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about-me' element={<AboutMe />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/contact-me' element={<ContactMe />}/>
      </Routes>
    </>
  )
}

export default App
