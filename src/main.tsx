import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./App.css";
import Venue from './Venue.tsx'
import Day from './Day.tsx'
import { HashRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/venue" element={<Venue />} />
           <Route path="/day" element={<Day />} />
          {/*<Route path="/accommodation" element={<Accommodation />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
    </HashRouter>
  </StrictMode>,
)
