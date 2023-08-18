import { Route,Routes } from 'react-router-dom';

import { Footer,Navigation } from './components'
import { AboutMe, ContactMe,HomePage, Placement, Portfolio } from './pages';

import './App.css'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen overflow-y-clip bg-white font-default'>
      <Navigation />
      <Routes>
        <Route
          path='/'
          element={<HomePage />}/>
        <Route
          path='/about-me'
          element={<AboutMe />}/>
        <Route
          path='/portfolio'
          element={<Portfolio />}/>
        <Route
          path='/contact-me'
          element={<ContactMe />}/>
        <Route
          path='/placement'
          element={<Placement />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
