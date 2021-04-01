import React from 'react';
import './MenuHeader.css'


export const MenuSite = (props) => {


    return (
        <div className="menuHeader">
            <a href="#" className="indent">{props.about}</a>
            <a href="#">{props.autopark}</a>
            <a href="#">{props.reviews}</a>
            <a href="#">{props.conditions}</a>
            <a href="#">{props.contact}</a>
        </div>
    )
}

