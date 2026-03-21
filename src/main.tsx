import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./App.css";
import Day from './Day.tsx'
import Acommodation from './Accommodation.tsx'
import Faq from './Faq.tsx'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Gifts from './Gifts.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/day" element={<Day />} />
          <Route path="/acommdation" element={<Acommodation />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/gifts" element={<Gifts />} />
        </Routes>
    </HashRouter>
  </StrictMode>,
)
