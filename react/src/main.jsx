import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {ContextProvider} from "./contexts/ContextProvider.jsx";
import {RouterProvider} from "react-router-dom";
import router from "./router.jsx";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ContextProvider>
        <RouterProvider router={router}/>
      </ContextProvider>
  </React.StrictMode>,
)
