import React from 'react';
import {adidasArr, AdidasItem} from "./Adidas";
import s from './ShoesPhotos.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "../../App";


export const ShoesPhotos = () => {
    return (
        <div className={s.shoes}>
            {
                adidasArr.map((shoes) => {
                    return <NavLink
                        className={s.shoe}
                        key={shoes.id}
                        to={`/model/`
                             + shoes.id
                    }>
                        <img src={shoes.picture}
                             alt={shoes.model}/>
                    </NavLink>
                })
            }
        </div>
    );
};