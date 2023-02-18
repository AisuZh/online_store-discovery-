import React from 'react'
import Images1 from "../../assets/img1.png"
import Images2 from "../../assets/img2.png"
import Images3 from "../../assets/img3.png"
import Images4 from "../../assets/img4.png"
import CardItem from './CardItem'
import "./Catalog.scss"


const arr = [
    {
        id: 1,
        image: Images1,
        title: "«Рождение Венеры» Сандро Боттичелли",
        firstPrice: "2 000 000 $",
        secondPrice: "1 000 000 $",
        isActive: true,
    },

    {
        id: 2,
        image: Images2,
        title: "«Тайная вечеря»  Леонардо да Винчи",
        firstPrice: "",
        secondPrice: "3 000 000 $",
        isActive: true,
    },

    {
        id: 3,
        image: Images3,
        title: "«Сотворение Адама» Микеланджело  ",
        firstPrice: "6 000 000 $",
        secondPrice: "5 000 000 $",
        isActive: true,
    },

    {
        id: 4,
        image: Images4,
        title: "«Урок анатомии»  Рембрандт",
        firstPrice: "",
        secondPrice: "",
        isActive:false

    },
]

const CatalogCards = () => {
    return (
        <div className='catalog'>
            <div className='container'>
                <p className='catalog__title'>
                    Картины эпохи Возрождения
                </p>
                <div className='catalog__wrapper'>
                    {arr.map((item) => (
                        <CardItem
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            firstPrice={item.firstPrice}
                            secondPrice={item.secondPrice}
                            isActive={item.isActive}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CatalogCards