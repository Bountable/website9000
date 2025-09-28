import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { mainLinks, toolLinks } from './config/navigation'
import powerlines from './assets/1555195820.svg'
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import { Routes, Route, Navigate } from 'react-router-dom'
import AboutMe from './pages/aboutme'
import Resume from './pages/resume'
import Contact from './pages/contact'
import Portfolio from './pages/portfolio'
function App() {
  const [search, setSearch] = useState('')

  return (
    <>
      <Header searchValue={search} onSearchChange={setSearch} />
      <RemoveScrollBar />
      <div className="container-fluid">
        <div className="row">
          <Sidebar mainLinks={mainLinks} toolLinks={toolLinks} />

          {/* Main content */}
          <main className="col-md-9 ms-sm-auto col-lg-10 bg-white gx-0">
            <Routes>
              <Route
                path="/"
                element={<img src={powerlines} alt="Powerlines illustration" style={{ height: '100vh' }} />}
              />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/resume" element={<Resume/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/portfolio" element={<Portfolio />} />


              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
