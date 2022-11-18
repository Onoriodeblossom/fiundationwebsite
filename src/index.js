import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hero from './pages/hero/hero';
import Poverty from './pages/poverty/poverty';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Community from './pages/community/community';
import Education from './pages/education/education';
import ElderCare from './pages/elderCare/elderCare';
import { Donate } from './pages/donate/donate';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router =createBrowserRouter([
  {
    path: "/",
    element: <Hero />,

  },
      
  
      {
        path: "poverty",
        element: <Poverty />,
      },

        // children:[

        {
          path: "community",
          element: <Community/>,
        },
        
      {
        path: "education",
        element: <Education/>,
      },
      {
        path: "eldercare",
        element: <ElderCare/>,
      },
      {
        path: "donate",
        element: <Donate/>,
      }
    // ],
  // },
]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
