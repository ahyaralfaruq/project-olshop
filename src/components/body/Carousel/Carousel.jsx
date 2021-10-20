import React, {useState, useEffect} from 'react'
import {NavigateBefore, NavigateNext} from '@material-ui/icons'

import './style.css'

const Carousel = () => {


    // data :
    const datas = [
        {
            image : `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d47177ae-b3aa-46ce-9b83-fea143b96f7d/d2moy3f-f3ea8ed8-bf8f-4dcc-9aae-1054f16e6535.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9kNDcxNzdhZS1iM2FhLTQ2Y2UtOWI4My1mZWExNDNiOTZmN2QvZDJtb3kzZi1mM2VhOGVkOC1iZjhmLTRkY2MtOWFhZS0xMDU0ZjE2ZTY1MzUucG5nIn1dXX0.ymooVy7_5g-Vm7E171envwjyn0bJ00_OXVj0IQt7kZQ`,
        },
        {
            image : `http://2.bp.blogspot.com/-ZSZne0Pi0CM/TrKLgrwD4_I/AAAAAAAAAIE/dZoS9I97obo/s1600/one-piece-banner.png`,
        },
        {
            image : `https://pbs.twimg.com/profile_banners/262323400/1398538604/1500x500`,
        }
    ]

    // image saat ini :
    const [currentImg,setCurrentImg] = useState(0)
    const len = datas.length;

    // set interval waktu

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImg(currentImg === len - 1 ? 0 : currentImg + 1)
        }, 4000)
        return () => clearInterval(interval)
    }, [currentImg, len]) 

    // fungsi tombol prev dan next

    const nextSlide = () => {
        setCurrentImg(currentImg === len - 1 ? 0 : currentImg + 1)
    }

    const prevSlide = () => {
        setCurrentImg(currentImg === 0 ? len - 1 : currentImg - 1)
    }

    const datadots = (val) => {
        setCurrentImg(val)
    }

    if(!Array.isArray(datas) || datas.length <= 0) {
        return null
    }

    return (
        <>
            <div className="button-prev">
                <button className="carousel-item-prev" onClick={prevSlide}>
                    <NavigateBefore />
                </button>
            </div>
            
            <div className="button-next">
                <button className="carousel-item-next" onClick={nextSlide}>
                    <NavigateNext />
                </button>
            </div>

            <ul className="carousel-inner">

                {
                    datas.map((data,index) => {
                        return (
                            <li key={index} className={index === currentImg ? `carousel-item active` : `carousel-item`}>
                                {
                                    index === currentImg && (
                                        <img src={data.image} alt={index} className="img-responsive" />
                                    )
                                }
                            </li>
                        )
                    })  
                }            
            </ul>

            <div className="all-dots">
                {
                    datas.map((dot, index) => (
                        <span 
                            key={index} 
                            className={currentImg === index ? `dots active` : `dots`}
                            onClick={() => datadots(index)}>
                        </span>
                    ))
                }
            </div>
        </>
    )
}

export default Carousel
