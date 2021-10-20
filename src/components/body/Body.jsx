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
            <div className="category-container">
                <Kategori />
            </div>
            <div className="product-container">
                <Produk />
            </div>
        </main>
    )
}

export default Body
