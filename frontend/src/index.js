import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux'
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import User from './pages/user';
import App from './app/App';
import Transactions from './pages/Transactions';
import store from './reduxStore/store';


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
  },

  {
    path: "/user",
    element:
      <>
        <User />
      </>
  },
  {
    path: "/signUp",
    element:
      <>
        <SignUp />
      </>
  },
  {
    path: "/bankStatements",
    element:
      <>
        <Transactions />
      </>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
//initialise le rendu initial de l'appli
root.render(
  //composant dans 'react-router-dom' qui enveloppe l'appli afin de gérer les routes
  <React.StrictMode>
    <Provider store={store}>

      {/* store={store} -- store fait réf à la rootStore que l'on crée pour stocker les "actions/fonctions" via redux + on l'importe plus haut*/}
      <RouterProvider router={router} />
      /</Provider>
  </React.StrictMode >

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
