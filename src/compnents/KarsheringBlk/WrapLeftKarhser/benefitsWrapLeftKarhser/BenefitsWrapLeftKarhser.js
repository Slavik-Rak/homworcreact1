import React from 'react';
import './BenefitsWrapLeftKarhser.css';


export const BenefitsLeftKarhser = (props) => {

    return (
        <div className="benBlk">
            <div className="benBlkImg">
                <img src={props.benImg} alt="" />
            </div>
            <div className="benBlkTxt">
                {props.benTxt}
            </div>
        </div>

    )
}