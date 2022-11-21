
import { createBrowserRouter } from "react-router-dom";
import LoginPage from './views/auth/LoginPage'
import Home from './views/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: 'home',
    element: <Home />,
  }
]);

export default router