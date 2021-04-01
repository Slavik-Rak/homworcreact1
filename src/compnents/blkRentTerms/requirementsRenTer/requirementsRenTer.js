import React from 'react';
import './requirementsRenTer.css';



export const RequirementRenTer = (props) => {


    return (
        <div className='requiremenItemRenTerWrap'>
            <img src={props.reqRenTerimg} alt="" />
            <p className="regItTitle">
                {props.regItTitle}
            </p>
            <p className="regItDescrip">
                {props.regItDescrip}
            </p>
        </div>
    )
}