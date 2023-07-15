import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

import { useEffect } from 'react';
import './App.css';
import './components/Animations/divider.css';

// Pages
import Home from './Pages/Home';
import Contact from './Pages/Contact';

// layouts
import RootLayout from './Layouts/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
)

function App() {
  
  useEffect( ()=> {
    const elements = document.querySelectorAll(".fade-in")
    const options = {
      rootMargin: "0px",
      threshhold: .4
    }
    const callbacks = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
        }
      })
    }
    let observer = new IntersectionObserver(callbacks, options)
    elements.forEach(element => {
      observer.observe(element)
    })
  }, [])

  

  return (
    <RouterProvider router={router} />
  )
}

export default App
