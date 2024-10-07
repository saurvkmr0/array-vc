import React from 'react'
import { RxSpeakerLoud } from "react-icons/rx";

const CardTextLeft = ({mainText,secondaryText}) => {
  return (
    <div className='flex flex-col w-[80%] lg:max-w-[60%] space-y-2'>
        <RxSpeakerLoud className='text-2xl' />
        <p className="text-3xl md:text-4xl font-medium">
            {mainText}
        </p>
        <p className='text-2xl'>
            {secondaryText}
        </p>
    </div>
  )
}

export default CardTextLeft;