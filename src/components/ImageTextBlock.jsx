import React from 'react';

const ImageTextBlock = ({ data, isReversed, setIsModalOpen = null }) => {

    return (
        <div className="min-w-40 max-w-7xl px-6 md:px-12 mx-auto text-center md:text-left">
            <div className={`flex flex-col ${ isReversed ? 'md:flex-row-reverse' : 'md:flex-row' }`}>
                <div className="flex flex-col justify-center">

                    {data.hasOwnProperty('mainHeading') && <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold mb-6 text-center md:text-left">{data.mainHeading}</h1>}

                    <div className="flex flex-col justify-center space-y-6">
                        {data.texts.map((section, i) => (
                            <div key={i}>
                                {section.h && <h1 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-center md:text-left">{section.h}</h1>}
                                {section.p.map((subtext, j) => {
                                    if (Array.isArray(subtext)) {
                                        return subtext.map((t, k) => (
                                            <p key={`${i}-${j}-${k}`} className={`text-sm md:text-base lg:text-lg xl:text-xl md:pl-10 mt-1 italic`}>
                                                {t}
                                            </p>
                                        ))
                                    } else {
                                        return (
                                            <p key={`${i}-${j}`} className={`text-base md:text-lg lg:text-xl xl:text-2xl mt-6`}>   
                                                {subtext}
                                            </p>
                                        )
                                    }
                                })}
                            </div>
                        ))}
                        

                        <div className={`${ data.hasButton ? 'flex' : 'hidden'} justify-center md:justify-start`}>
                            <div className="bg-primary-500 text-white rounded-md text-base md:text-lg lg:text-xl xl:text-xl">
                                <button className="py-3 px-6" onClick={() => setIsModalOpen(true)}>Request a Demo</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex mx-auto md:mx-0 mt-8 md:mt-0 md:mx-4 max-w-2xl">
                    <img src={data.img} />
                </div>
            </div>
        </div>
    )
};

export default ImageTextBlock;