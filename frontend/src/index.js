import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import store from './app/store';
import App from './app/App';
import Navbar from './components/navbar/navbar';
import User from './pages/user';
import SignIn from './pages/signIn';


const router = createBrowserRouter([
  {
    path: "/",
    element:
      <>
        <Navbar />
        <App />
      </>

  },
  {
    path: "/signIn",
    element:
      <>
        <Navbar />
        <SignIn />
      </>
  },

  {
    path: "/user",
    element:
      <>
        {/* <Navbar /> */}
        <User />
      </>
  }
  // {
  //   path: "/signUp",
  //   element:
  //     <>
  //       <SignUp />
  //     </>
  // }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
// Initialise le rendu initial de l'appli
root.render(
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
reportWebVitals();
