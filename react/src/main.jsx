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

//https://colorhunt.co/palette/ffffecf1e4c3c6a969597e52
//https://colorhunt.co/palette/561c246d2932c7b7a3e8d8c4