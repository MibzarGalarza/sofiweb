import { Route, Routes } from "react-router-dom";
import { LayoutPublic } from "../layout/LayoutPublic";
import { PublicRoutes } from "./PublicRoutes";
import { PageNotFound } from "./NotFound";
import { Home, Servicios, Locacion, Bodas, Fiestas, Especiales, Galeria, Contacto } from "../lazyImplemetation/LazyGeneral";



export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<LayoutPublic />}>
                <Route element={<PublicRoutes />}>
                    <Route path="/" Component={Home} element={<Home />} />
                    <Route path="/Locacion" Component={Locacion} element={<Locacion />} />
                    <Route path="/Servicios" Component={Servicios} element={<Servicios />} />
                    <Route path="/Bodas" Component={Bodas} element={<Bodas />} />
                    <Route path="/Fiestas" Component={Fiestas} element={<Fiestas />} />
                    <Route path="/Especiales" Component={Especiales} element={<Especiales />} />
                    <Route path="/Galeria" Component={Galeria} element={<Galeria />} />
                    <Route path="/Contacto" Component={Contacto} element={<Contacto />} />
                </Route>
            </Route>
            <Route
                path="*"
                element={<PageNotFound />}
            />
        </Routes>
    );
};
