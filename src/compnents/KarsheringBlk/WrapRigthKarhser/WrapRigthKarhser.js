import React from 'react';
import './WrapRigthKarhser.css';


export const WrapRigthKarhser = (props) => {

    return (
        <div>

            <img src={props.karhherRigthImgMers} alt="" className="WrapRigthKarhserImg" />
            <p className="WrapRigthKarhserPrice">4 грн/мин  5 мест  50 тыс. км пробег</p>
            <div className="ConditionsContractWrapRigthKarhser">
                <a href="#" className="ConditionsRigthKarhser">{props.conditions} </a>
                <a href="#" className='ContractRigthKarhser'>{props.contract}</a>
            </div>
        </div>
    )
}