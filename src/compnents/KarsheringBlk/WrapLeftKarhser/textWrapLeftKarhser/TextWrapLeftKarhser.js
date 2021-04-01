import React from 'react';
import './TextWrapLeftKarhser.css';

export const TextWrapLeft = (props) => {


    return (
        <div className="textWrapLeftKarhser">
            <div className="tiletextWrapLeftKarhser">{props.title}</div>
            <div className="descriptiontextWrapLeftKarhser">{props.decription}</div>
        </div>
    )
}