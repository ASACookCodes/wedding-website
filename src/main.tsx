import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Venue from './Venue.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/venue" element={<Venue />} />
          {/* <Route path="/day" element={<Day />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
