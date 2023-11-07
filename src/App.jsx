import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'

// PAGES
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ErrorPage from './pages/ErrorPage'
import SingleImage from './pages/SingleImage'
import LikedImages from './pages/LikedImages'
import Login from './pages/Login'

function App() {
  const roots = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage/>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'singlepage/:id',
          element: <SingleImage/>
        },
        {
          path: 'likedimages',
          element: <LikedImages/>, 
        },
        {
          path: "login",
          element: <Login />,
        }
      ],
    },
  ])

  return <RouterProvider router={roots} />
}

export default App