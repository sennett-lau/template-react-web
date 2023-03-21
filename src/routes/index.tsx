import Home from '@pages/Home'
import { useRoutes } from 'react-router-dom'

const Router = () => {
  const routes = useRoutes([{ path: '', element: <Home /> }])

  return routes
}

export default Router
