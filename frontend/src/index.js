import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import User from './pages/User';
import SignIn from './pages/SignIn';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const router = createBrowserRouter([
  {//"chemin"
    path: "/",
    //"associé au composant:"
    element: <App />
  },
  {
    path: "/signIn",
    element:
      <>
        <SignIn />
      </>
  }
  // {//chemin avec paramètre URL avec id unique
  //   path: "/fiche/:id",
  //   element:
  //     <>
  //       <Fiche />
  //     </>
  // },
  // {
  //   path: "/404",
  //   element:
  //     <>
  //       <Error />
  //     </>
  // }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
//initialise le rendu initial de l'appli
root.render(
  //composant dans 'react-router-dom' qui enveloppe l'appli afin de gérer les routes
  <React.StrictMode>
    {/* //objet router en tant que prop */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
