import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '@pages/Home'

const AppLoader: React.FC<{}> = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:menu" element={<Home />} />
                </Routes>
        </BrowserRouter>
    )
}

export default AppLoader