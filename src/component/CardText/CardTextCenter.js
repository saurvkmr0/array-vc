import React from 'react'
import { RxSpeakerLoud } from "react-icons/rx";

const CardTextCenter = ({mainText,secondaryText}) => {
    console.log(mainText)
  return (
    <div className='flex flex-col space-y-2 text-center px-12'>
        <p className="text-3xl md:text-4xl font-medium">
            {mainText}
        </p>
        <p className='text-2xl'>
            {secondaryText}
        </p>
    </div>
  )
}

export default CardTextCenter;