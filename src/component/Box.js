import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

const Box = ({img,upText1,upText2,cardText}) => {
    const boxRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false); 

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); 
                    observer.disconnect(); 
                }
            },
            { threshold: 0.5 }
        );

        if (boxRef.current) {
            observer.observe(boxRef.current); 
        }

        return () => {
            observer.disconnect(); 
        };
    }, []);

    return (
        <div className="relative">
            {/* Parent div with custom border without corners using pseudo-elements */}
            <div ref={boxRef} className="relative w-full h-full p-4 group">
                {/* Top and Bottom Borders with animation */}
                <div
                    className={`absolute top-0 left-4 right-4 border-t border-gray-600 transform origin-left transition-transform duration-1000 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}
                ></div>
                <div
                    className={`absolute bottom-0 left-4 right-4 border-b border-gray-600 transform origin-left transition-transform duration-1000 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}
                ></div>

                {/* Left and Right Borders with animation */}
                <div
                    className={`absolute top-4 bottom-4 left-0 border-l border-gray-600 transform origin-top transition-transform duration-1000 ${isVisible ? 'scale-y-100' : 'scale-y-0'}`}
                ></div>
                <div
                    className={`absolute top-4 bottom-4 right-0 border-r border-gray-600 transform origin-top transition-transform duration-1000 ${isVisible ? 'scale-y-100' : 'scale-y-0'}`}
                ></div>

               
                <div className="w-auto h-auto relative">
                    <img
                    src={img}
                    alt="Cover"
                    className="w-full h-auto relative"
                    />
                    <div className="absolute top-0 h-full w-full">
                        <div className="flex flex-col justify-between h-full p-4 md:p-6 text-white"> {/*inner content*/}
                            <div className="flex justify-between">
                                <p>{upText1}</p>
                                <div className="flex">
                                    <p className="transition-transform duration-300 ease-in-out transform group-hover:-translate-x-3">
                                        {upText2}
                                    </p>
                                    <IoIosArrowRoundForward 
                                        className="text-2xl hidden group-hover:block opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" 
                                    />
                                </div>
                            </div>
                            {cardText}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Box;
