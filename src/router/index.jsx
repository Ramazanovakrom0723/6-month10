import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
}from "react-router-dom";
import { Asosiy, Buyurtmalar, Xizmatlar, Single} from "../pages";
import App from"../App.jsx"
// import { Header } from "../components";
// import { Sidebar } from "../components";
import React from 'react'

const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App/>}>
            <Route index element={<Asosiy/>}/>
            <Route path="/buyurtmalar" element={<Buyurtmalar/>} />
            <Route path="/single" element={<Single/>} />
            <Route path="/xizmatlar" element={<Xizmatlar/>}/>
            </Route>
        )
    )
    return <RouterProvider router={router}/>
}

export default Index

