import {Route,Routes} from 'react-router-dom';

import {FloatingNav} from './components'
import {AboutMe, ContactMe,HomePage, Portfolio} from './pages';

import './App.css'

const App = () => {
  return (
    <div className='p-8 bg-gradient-to-tr from-indigo-950 to-indigo-900'>
      <FloatingNav />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about-me' element={<AboutMe />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/contact-me' element={<ContactMe />}/>
      </Routes>
    </div>
  )
}

export default App
