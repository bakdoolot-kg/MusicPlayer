import { GUEST_ROUTE, LOGIN_ROUTE, MUSIC_ROUTE } from "./utils/consts"
import { Login } from "./components"
import {Guest, Home} from "./pages"

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login
  },
  {
    path: GUEST_ROUTE,
    Component: Guest
  }
]

export const privateRoutes = [
  {
    path: MUSIC_ROUTE,
    Component: Home
  }
]