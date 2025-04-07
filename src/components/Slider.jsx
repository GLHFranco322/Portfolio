import React from 'react';
import './Slider.css';

export const Slider = () => {
    return (
        <>
            <section className="sliderContainer" id="sliderContainer">
                <div className="slider" id="slider">
                    <ul className="List" id="List">
                        <li className="sliderItem item_1" style={{ '--position': 1 }} id="sliderItem">
                            <img src="/slider/icon_ (1).svg" alt="" />
                        </li>
                        <li className="sliderItem item_3" style={{ '--position': 2 }} id="sliderItem">
                            <img src="/slider/icon_ (3).svg" alt="" />
                        </li>
                        <li className="sliderItem item_5" style={{ '--position': 3 }} id="sliderItem">
                            <img src="/slider/icon_ (5).svg" alt="" />
                        </li>
                        <li className="sliderItem item_6" style={{ '--position': 4 }} id="sliderItem">
                            <img src="/slider/icon_ (6).svg" alt="" />
                        </li>
                        <li className="sliderItem item_7" style={{ '--position': 5 }} id="sliderItem">
                            <img src="/slider/icon_ (7).svg" alt="" />
                        </li>
                        <li className="sliderItem item_8" style={{ '--position': 6 }} id="sliderItem">
                            <img src="/slider/icon_ (8).svg" alt="" />
                        </li>
                        <li className="sliderItem item_2" style={{ '--position': 7 }} id="sliderItem">
                            <img src="/slider/icon_ (2).svg" alt="" />
                        </li>
                        <li className="sliderItem item_4" style={{ '--position': 8 }} id="sliderItem">
                            <img src="/slider/icon_ (4).svg" alt="" />
                        </li>
                        <li className="sliderItem item_9" style={{ '--position': 9 }} id="sliderItem">
                            <img src="/slider/icon_(9).svg" alt="" />
                        </li>
                        <li className="sliderItem item_10" style={{ '--position': 10 }} id="sliderItem">
                            <img src="/slider/icon_(10).svg" alt="" />
                        </li>
                        <li className="sliderItem item_11" style={{ '--position': 11 }} id="sliderItem">
                            <img src="/slider/icon_(11).svg" alt="" />
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};