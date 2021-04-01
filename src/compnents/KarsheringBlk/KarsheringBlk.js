import React from 'react';

import './KarsheringBlk.css';
import { ButtomYelowUniversal } from '../buttomYelow/ButtomYelow';
import { TextWrapLeft } from './WrapLeftKarhser/textWrapLeftKarhser/TextWrapLeftKarhser';
import { BenefitsLeftKarhser } from './WrapLeftKarhser/benefitsWrapLeftKarhser/BenefitsWrapLeftKarhser';
import { WrapRigthKarhser } from './WrapRigthKarhser/WrapRigthKarhser';

import benImgCar from '../image/banef_img/car.jpg'
import benImgCard from '../image/banef_img/card.jpg'
import benImgVector from '../image/banef_img/Vector.jpg'
import karhherImgMers from '../image/mersedesKarsh.jpg';

export const KarsheringBlk = (props) => {


    return (
        <div className="KarsheringWrap">

            <div className="wrapLeftKarhser">
                <TextWrapLeft title={props.title}
                    decription={props.description} />
                <span className="buttomWrapLeft">
                    <ButtomYelowUniversal bTxt={props.bTxt} />
                </span>
                <div className="benefsKarshLeft">
                    <BenefitsLeftKarhser benImg={benImgCar} benTxt='Более 300 автомобилей
                в вашем распоряжении'/>
                    <BenefitsLeftKarhser benImg={benImgCard} benTxt='Дешевле такси 
и собственного автомобиля
'/>
                    <BenefitsLeftKarhser benImg={benImgVector} benTxt='Лучшие автомобили в любой точке города' />
                </div>
            </div>

            <div className="wrapRigthKarhser">
                <WrapRigthKarhser conditions='Условия аренды автомобиля' contract='Публичный договор' karhherRigthImgMers={karhherImgMers} />
            </div>

        </div>
    )
}