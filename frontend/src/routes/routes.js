import React from "react";
import {Route, Routes} from "react-router-dom"

const PageRouter = () => {
    return(
        <Routes>
            <Route element={<Home/>} path="home"/>
        </Routes>
    )
}

export default PageRouter