import React from 'react';
import {useParams} from 'react-router';

const Pages = () => {
    let { valInp, fontColor = 'black', backgroundColor = 'transparent'} = useParams();

    return (
        <>
            {isNaN(valInp)?
                <div style={{color: `${fontColor}`, backgroundColor: `${backgroundColor}`}}>
                    <p >The word is: {valInp}</p>
                </div>:
                <div>
                    <p>The number is: {valInp}</p>
                </div>
            }
        </>
    )
};

export default Pages;