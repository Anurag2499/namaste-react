import React, { lazy, Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { UserContext } from './utils/UserContext';
// import Grocery from './components/Grocery';

const Grocery = lazy(() => import('./components/Grocery'));
const About = lazy(() => import('./components/About'));

const Applayout = () => {
  const [userName, setUserName] = useState();

  // Authentication
  useEffect(() => {
    const data = {
      name: 'Onu',
    };
    setUserName(data.name);
  }, []);

  return (
    //Here iam setting the new value of userContext in the value
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        {' '}
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Applayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(jsxHeading);
root.render(<RouterProvider router={appRouter} />);
