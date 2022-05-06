import React, {useContext} from "react";
import {Route, Routes} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {Layout, Login} from "../";
import {privateRoutes, publicRoutes} from "../../routes";
import {MusicContext} from "../../index";
import {MUSIC_ROUTE} from "../../utils/consts";

const AppRouter = () => {
  const {auth} = useContext(MusicContext)
  const [user] = useAuthState(auth)

  console.log(user)
  return user ?
    <Routes>
      <Route path='/' element={<Layout/>}>
        {privateRoutes.map(({path, Component}) => (
          <Route key={path} path={path} element={<Component/>} exact/>
        ))}
        <Route path='*' to={MUSIC_ROUTE}/>
      </Route>
    </Routes>
    :
    <Routes>
      {publicRoutes.map(({path, Component}) => (
        <Route key={path} path={path} element={<Component/>} exact/>
      ))}
      <Route path='*' element={<Login/>}/>
    </Routes>


};

export default AppRouter;
