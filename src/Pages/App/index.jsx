import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import MyAccount from '../MyAccount'
import SignIn from '../SignIn'
import NotFound from '../NotFound'
import NavBar from '../../Components/NavBar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/sign-in', element: <SignIn />},
    {path: '/*', element: <NotFound />}
  ])

  return routes
}

function App() {
  
  return (
      <BrowserRouter>
          <AppRoutes />
          <NavBar />
      </BrowserRouter>
  )
}

export default App
