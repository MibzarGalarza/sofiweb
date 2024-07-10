import { lazy } from "react";

export const Home = lazy(() => import("../pages/HomePage"));
export const Locacion = lazy(() => import("../pages/location"));
export const Servicios = lazy(() => import("../pages/ServiciosPage"));
export const Bodas = lazy(() => import("../pages/BodasPage"));
