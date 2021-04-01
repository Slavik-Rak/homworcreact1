import React from 'react';
import './blkRentTerms.css'
import { ButtomYelowUniversal } from '../buttomYelow/ButtomYelow';
import { RequirementRenTer } from './requirementsRenTer/requirementsRenTer';

import reqRenTerimgOne from '../image/one.jpg';
import reqRenTerimgTwo from '../image/two.jpg';
import reqRenTerimgThree from '../image/three.jpg';


export const BlkRentTerms = (props) => {


    return (
        <div className="blkRentTerms">

            <div className="rentTermsWrapItems">

                <div className="rentCondiItem">
                    <p className="rentCondiItemTitle">
                        {props.rentCondiTitle}
                    </p>
                    <p className="rentCondiItemDescriptionUp">
                        Мы ценим каждого клиента и предоставляем качественный сервис каршеринга в Киеве.
                    </p>
                    <p className="rentCondiItemDescriptionDown">
                        Именно для того, что бы Вам было приятно и безопасно пользоваться нашим сервисом на постоянной основе, мы выделили несколько условий для того, чтобы взять машину в аренду
                    </p>
                    <div className="renTemButt">
                        <ButtomYelowUniversal bTxt='Скачать приложение' />
                    </div>
                </div>

                <RequirementRenTer
                    reqRenTerimg={reqRenTerimgOne}
                    regItTitle='Опыт вождения от 2х лет'
                    regItDescrip='Для того, чтобы арендовать автомобиль, Вам необходимо зарегестрировать свои прав в нашем мобильном приложении'
                />
                <RequirementRenTer
                    reqRenTerimg={reqRenTerimgTwo}
                    regItTitle='Только по Киеву'
                    regItDescrip='Наши автомобили работают только в пределах города Киев. За город на наших автомобилях, к сожалению, выезжать нельзя.'
                />
                <RequirementRenTer
                    reqRenTerimg={reqRenTerimgThree}
                    regItTitle='Мобильный телефон и интернет'
                    regItDescrip='Для использования нашего сервиса Вам необходим мобильный телефон и интернет. Бронирование, оплата и вся отчетность происходит онлайн'
                />

            </div>



        </div>
    )
}