import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import RoomPage from './pages/RoomPage.tsx'
import ChatApp from './components/chatApp.tsx'
import AppLayout from './Layouts/AppLayout.tsx'


  const router  = createBrowserRouter([
    {
      element:<AppLayout/>,
      children:[
        {
          path:'/',
          element:<HomePage/>
        },
        {
          path:'/room-page',
          element:<RoomPage/>
        },
        {
          path:'/chat-room',
          element:<ChatApp/>
        }
      ]
    }
  ])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
