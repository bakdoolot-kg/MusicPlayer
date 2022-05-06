import "./app.scss";
import { BrowserRouter } from "react-router-dom";
import { Loader } from "./components";
import AppRouter from "./components/AppRouter/AppRouter";
import { useContext } from "react";
import { MusicContext } from "./index";
import { useAuthState } from "react-firebase-hooks/auth";

{
  /*<Routes>*/
}
{
  /*  <Route path="/" element={<Layout />}>*/
}
{
  /*    <Route index element={<Home />} />*/
}
{
  /*    /!*<Route path="about" element={<About />} />*!/*/
}
{
  /*    <Route path="*" element={<NotFound />} />*/
}
{
  /*  </Route>*/
}
{
  /*</Routes>*/
}

function App() {
  const { auth } = useContext(MusicContext);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <div className="app">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
