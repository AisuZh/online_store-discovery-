import React, { useEffect, useState } from 'react'
import Loader from '../../assets/Loader.svg'
import "./Catalog.scss"

const CardItem = ({ id, image, title, firstPrice, secondPrice, isActive }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [ids, setIds] = useState([])

    const handleClick = async () => {
        setIsLoading(true)
        if (!JSON.parse(localStorage.getItem("localArr"))) {
            localStorage.setItem("localArr", JSON.stringify([]))
        }
        let arr = JSON.parse(localStorage.getItem("localArr"))
        console.log(arr)

        arr.push(id)

        localStorage.setItem("localArr", JSON.stringify(arr))

        setIds(JSON.parse(localStorage.getItem("localArr")))
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json())

        setIsLoading(false)
    }

    const handleRemoveItem = () => {
        let arr = JSON.parse(localStorage.getItem("localArr"))

        const elemId = arr.indexOf(id)

        arr.splice(elemId, 1)

        localStorage.setItem("localArr", JSON.stringify(arr))
        setIds(JSON.parse(localStorage.getItem("localArr")))

    }

    console.log(ids, "ids")


    useEffect(() => {
        setIds(JSON.parse(localStorage.getItem("localArr")))
    }, [])

    const svg = <svg className='svg_btn' width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5316 1.80934L5.63353 11.2369L1.34826 7.19234" stroke="#F4F6F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

    return (
        <div className={`catalog__card${!isActive ? '-active' : ''}`}>
            <div className='catalog__card-img'>
                <img src={image} alt="img" />
            </div>
            <div className='catalog_card-info'>
                <div className='catalog__card-title'>
                    {title}
                </div>

                <div className='catalog__buy'>
                    {isActive ? <div className='catalog__card-price'>
                        <div className='catalog__card-price1'>
                            {firstPrice}
                        </div>
                        <div className='catalog__card-price2'>
                            {secondPrice}
                        </div>
                    </div>
                        : <p>Продано на аукционе</p>}


                    {isLoading &&
                        <div className='spinner'>
                            <img src={Loader} alt='loader' />
                        </div>
                    }
                    {!isLoading &&
                        isActive &&
                        !ids?.includes(id) &&
                        <button onClick={handleClick} className="catalog__card-buy">
                            Купить
                        </button>
                    }
                    {
                        !isLoading &&
                        isActive &&
                        ids?.includes(id) &&
                        <button onClick={handleRemoveItem} className="catalog__card-buyed">
                            {svg}
                            В корзине
                        </button>
                    }

                </div>

            </div>

        </div>
    )
}

export default CardItem