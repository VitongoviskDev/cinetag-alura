import Header from "componentes/Header/Index";
import Footer from "componentes/Footer";

import Inicio from "pages/Inicio";
import Favorites from "pages/Favorites";    
import Container from "componentes/Container";
import FavoritesProvider from "contexts/Favorite";
import Player from "pages/Player";
import NotFound from "pages/NotFound";
import Default from "pages/Default";


const { BrowserRouter, Routes, Route  } = require("react-router-dom");

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Default/>}>
                    <Route index element={<Inicio/>}/>
                    <Route path="favorites" element={<Favorites/>}/>
                    <Route path="player/:id" element={<Player/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
} 