import { Routes, Route } from 'react-router-dom';
import { NavigationBar, Test } from './components'
import './App.css'
import { HomePage, AboutMe, Portfolio, ContactMe } from './pages';

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
