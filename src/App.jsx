// from react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// from Layouts
import { MainLayout } from "./layouts"

// from pages
import { Contact, Home, About, Login, SignUp } from "./pages";

// from components
import { ProtectedRoutes } from "./components"; 

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes>
          <MainLayout/>
        </ProtectedRoutes>
      ),
      children:[
        {
          index: true,
          element: <Home/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
      ]
    },
    {
      path: "/signup",
      element: <SignUp/>
    },
    {
      path: "/login",
      element: <Login/>
    },
  ])

  return <RouterProvider router = {router} />
};

export default App;