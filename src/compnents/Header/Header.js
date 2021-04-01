import React from 'react';
import './Header.css';
import lux_logo from '../image/lux_logo.jpg';
import { MenuSite } from './menuHeader/MenHeader';

export const HeaderSite = (props) => {


    return (
        <div className="headersite">
            <div className="logo">
                <img src={lux_logo} alt=""/>
            </div>
            <div className="menuHeader">
                <MenuSite about='О НАС' autopark='АВТОПАРК' reviews='ОТЗЫВЫ' conditions='УСЛОВИЯ' contact='КОНТАКТЫ' />

            </div>
            <div className="headTel">{props.headTel}</div>

        </div>
    )
}