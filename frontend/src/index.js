import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import User from './pages/user';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BankStats from './pages/bankStats';
import UserEdit from './components/user/userEdit';


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
        <BankStats />
      </>
  },
  {
    path: "/user/edit",
    element:
      <>
        <UserEdit />
      </>
  }
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
