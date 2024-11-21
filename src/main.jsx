import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './utils/router'
import AuthProvider from './component/AuthProvider/AuthProvider'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
    <AuthProvider routes={<RouterProvider router={router}></RouterProvider>}>
    </AuthProvider>
    <ToastContainer
             position="top-right"
             autoClose={5000}
             />
    </div>
  </StrictMode>,
)
