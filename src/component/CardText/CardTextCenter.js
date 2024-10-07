import React from 'react';
import { RxSpeakerLoud } from "react-icons/rx";

const CardTextCenter = ({ mainText, secondaryText, textBlack }) => {
    return (
        <div className='flex flex-col space-y-2 text-center px-12'>
            <p className={`text-3xl md:text-4xl font-medium ${textBlack ? 'text-black' : 'text-white'}`}>
                {mainText}
            </p>
            <p className={`text-2xl ${textBlack ? 'text-black' : 'text-white'}`}>
                {secondaryText}
            </p>
        </div>
    );
};

export default CardTextCenter;
