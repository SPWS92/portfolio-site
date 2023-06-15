import { Route,Routes } from 'react-router-dom';

import { Footer,Navigation } from './components'
import { AboutMe, ContactMe,HomePage, Portfolio } from './pages';

import './App.css'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen overflow-y-clip bg-gradient-to-tr from-indigo-950 to-indigo-900'>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about-me' element={<AboutMe />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/contact-me' element={<ContactMe />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
