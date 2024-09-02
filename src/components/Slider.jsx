import React, { useState, useCallback, useMemo, useRef } from 'react';

const Slider = ({ data, slidesToShow = 3, slidesToScroll = 1 }) => {
    const [index, setIndex] = useState(0);
    const sliderRef = useRef(null);

    const handleClickBack = useCallback(() => {
        setIndex(prev => (prev - slidesToScroll + data.length) % data.length);
        sliderRef.current.style.transform = `translate(${(index - 1)  * 100 * slidesToScroll / slidesToShow}%)`;
    }, [index, slidesToScroll, slidesToShow]);

    const handleClickNext = useCallback(() => {
        setIndex(prev => (prev + slidesToScroll) % data.length);
        sliderRef.current.style.transform = `translate(-${(index + 1) * 100 * slidesToScroll / slidesToShow}%)`; 
    }, [index, slidesToScroll, slidesToShow]);

    const processedData = useMemo(() => [...data.slice(index), ...data.slice(0, index)], [data, index]);

    return (
        <div className="relative max-w-4xl mx-auto px-8 md:px-16">
            <div className="absolute top-1/2 left-2 md:left-8 transform -translate-y-1/2">
                <button 
                    className="rounded-full text-slate-700 hover:text-primary-500 hover:bg-gray-200 p-1"
                    onClick={handleClickBack}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

            <div className="overflow-hidden">
                <div 
                    className="grid grid-flow-col auto-cols-1/3 transition-transform duration-500 ease-in-out"
                    ref={sliderRef}
                >
                    {processedData.map((d, i) => (
                        <div key={i} className="flex flex-col items-center px-6 pt-2">
                            <img src={d.imgUrl} alt={d.name} />
                            <p className="text-center text-[#0086c3]">{d.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute top-1/2 right-2 md:right-8 transform -translate-y-1/2">
                <button 
                    className="rounded-full hover:text-primary-500 hover:bg-gray-200 p-1"
                    onClick={handleClickNext}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

        </div>
    )
};

export default Slider;