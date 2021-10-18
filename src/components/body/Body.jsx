import React from 'react'
import Carousel from './Carousel/Carousel'
import Kategori from './Kategori/Kategori'
import Produk from './Produk/Produk'

import './style.css'

const Body = () => {
    return (
        <main className="main">
            <div className="carousel-container">
                <Carousel />
            </div>
        </main>
    )
}

export default Body
