import { LOGIN_ROUTE, MUSIC_ROUTE } from "./utils/consts"
import { Login } from "./components"
import {Home} from "./pages"

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login
  }
]

export const privateRoutes = [
  {
    path: MUSIC_ROUTE,
    Component: Home
  }
]