import { lazy } from "react";

export const Home = lazy(() => import("../pages/HomePage"));
export const Servicios = lazy(() => import("../pages/ServiciosPage"));
export const Bodas = lazy(() => import("../pages/BodasPage"));
export const Fiestas = lazy(() => import("../pages/FiestasPage"));
export const Especiales = lazy(() => import("../pages/EvEspecialesPage"));
export const Galeria = lazy(() => import("../pages/GaleriaPage"));
export const Contacto = lazy(() => import("../pages/ContactPage"));
export const Mobiliario = lazy(() => import("../pages/SillasPage"));
export const NuestrosEventos = lazy(() => import("../pages/NuestrosEvPage"));
export const locationPage = lazy(() => import("../pages/locationPage"));



