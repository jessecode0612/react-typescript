import React from 'react'

import {Carousel} from '../../components/Carousel'

let features = [
    {
        text: 'blue',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7vhDBHGcYfgGumwP_JdDsWdbmRBJrO822ayjYBWnUeOpg4mvv5HBrUCHh&s'
    },
    {
        text: 'r32',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcedysoUHEN5Pu8C5gy1_H_-fwbYUbZTqHhLblNaFvYGMlDVdQ6r0d3T5n&s'
    },
    {
        text: 'gold',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVUpJPnUV2JjON_U8j_GsNfpzB1TE_1YSPTFB4ElJX3-e7BPB_Dz0WJLvZ&s'
    },
    {
        text: 'white',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQawL7bAfO-DV0rY3XlWnkm2cJcAAB9JQsZw4P9k8R0RElWDOhPyJ06WEMO&s'
    },
    {
        text: 'nissan',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-3a4aW0nL4gsFvceXOcqfFT5qlrOwHU0DySevbEo8-45XzIJJxu4x5ZeB&s'
    },
    {
        text: 'modified',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXsPphsOHUfc10c5bCr6VkCDK2d0YYYc7PkjiA527xIMsJZw7x5qqt3GZZ&s'
    },
    {
        text: 'red',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJnGchkU3zwrTdq4WbFSjd5E-ehy9gtEaaxiuOE9-LHZnh8PYhANsp3D_&s'
    },
    {
        text: 'rocket bunny',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYefgcSyvUOC_qcNY9yZV7AX8yPaDlnZ3BU5eH794jT3AQH6AiTVXPDl5S&s'
    },
    {
        text: 'r33',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA2ZYkl0giWGtaNXKwr2z8HbJszowxKEQTDATCJMLvJ7kpGsRl9dr8CBnD&s'
    },
    {
        text: 'chrome',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtKFD8Oalc6HqSrkWVMtPTitLO0mXpV9ofKYxgusg8zjfZdlaA4wX3KVv&s'
    },
    {
        text: 'car',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdTsdEjLHkQIYipiaZcLUP9LG2GsplKl7MQSuawbDbOgtQ_5ygK46i_3xc&s'
    },
    {
        text: 'cool',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfhHP8XoQ0X3eL4J_Xy0BJ0pnvrkINkKR78N6yhfXa7eWXn3UBh1ZzMep8&s'
    },
    {
        text: 'widebody',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlGGm-Hh5so6PtScyr7lXrB9V13dFr7mtMJC5YlO9aaDPHfPQNRvzsFPK_&s'
    }
]


function CarouselPage() {

    return (
        <section>
            <div className="container">
                <Carousel
                    swiping={true}
                    dynamic={true}
                    show={5.15}
                    slide={5}
                    transition={0.5}
                >
                    {features.map((feature, idx) => (
                        <div key={idx.toString()}>
                            <img src={feature.img} alt={feature.text}/>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    )
}

export default CarouselPage