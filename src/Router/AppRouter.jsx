import { Route, Routes } from "react-router-dom";
import { LayoutPublic } from "../layout/LayoutPublic";
import { PublicRoutes } from "./PublicRoutes";
import { PageNotFound } from "./NotFound";
import { Home, Prueba, Locacion } from "../lazyImplemetation/LazyGeneral";



export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<LayoutPublic />}>
                <Route element={<PublicRoutes />}>
                    <Route path="/" Component={Home} element={<Home />} />
                    <Route path="/Prueba" Component={Prueba} element={<Prueba/>} />
                    <Route path="/Locacion" Component={Locacion} element={<Locacion/>} />
                </Route>
            </Route>
            <Route
                path="*"
                element={<PageNotFound />}
            />
        </Routes>
    );
};
