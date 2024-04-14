import React from 'react';
import {useParams} from "react-router-dom";

export const Model = () => {
    let {modelId} = useParams()
    console.log(' id: ', modelId);
    return (
        <div>
            Model
        </div>
    );
};