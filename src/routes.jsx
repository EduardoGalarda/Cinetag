import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Favorites from "./pages/Favorites/Favorites.jsx";
import Player from "./pages/Player/Player.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>    
          <Route index element={<Home />}></Route>
          <Route path="favoritos" element={<Favorites />}></Route>
          <Route path=":id" element={<Player />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>    
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
