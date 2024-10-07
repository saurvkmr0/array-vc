import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

const VidBox1 = ({img,upText1,upText2,cardText,vidLink}) => {
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
            { threshold: 0.2 } 
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
            
            <div ref={boxRef} className="relative w-full h-full p-4 group">
                
                <div
                    className={`absolute top-0 left-4 right-4 border-t border-gray-600 transform origin-left transition-transform duration-1000 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}
                ></div>
                <div
                    className={`absolute bottom-0 left-4 right-4 border-b border-gray-600 transform origin-left transition-transform duration-1000 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}
                ></div>

                
                <div
                    className={`absolute top-4 bottom-4 left-0 border-l border-gray-600 transform origin-top transition-transform duration-1000 ${isVisible ? 'scale-y-100' : 'scale-y-0'}`}
                ></div>
                <div
                    className={`absolute top-4 bottom-4 right-0 border-r border-gray-600 transform origin-top transition-transform duration-1000 ${isVisible ? 'scale-y-100' : 'scale-y-0'}`}
                ></div>

                
                <div className="w-auto h-auto relative">
                <video
        src={vidLink}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto relative object-cover"
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

export default VidBox1;
