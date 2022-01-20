import "./app.scss";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { Layout } from "./components";
import { Home, NotFound } from "./pages";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/*<Route path="about" element={<About />} />*/}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
