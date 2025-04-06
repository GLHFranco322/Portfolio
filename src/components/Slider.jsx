import React from 'react'
import './Slider.css'

export const Slider = () => {
    return (
        <>
            <section className='sliderContainer' id='sliderContainer'>
                <div className="sliderWarepper" id='sliderWarepper'>
                    <ul className="sliderList" id='sliderList'>
                        <li className="sliderItem" id='sliderItem'>
                            <img src="/slider/icon_ (1).svg" alt="" />
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}