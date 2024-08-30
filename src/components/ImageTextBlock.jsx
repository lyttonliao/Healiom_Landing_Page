import React from 'react';

const ImageTextBlock = ({ data, isReversed, classNames = '' }) => {

    return (
        <>
            {data && 
                <div className="min-w-40 max-w-7xl px-8 md:px-16 mx-auto text-center md:text-left">
                    <div className={`flex flex-col ${ isReversed ? 'md:flex-row-reverse' : 'md:flex-row' }`}>
                        <div className="flex flex-col justify-center">

                            {data.hasOwnProperty('mainHeading') && <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold mb-6 text-center md:text-left">{data.mainHeading}</h1>}

                            <div className="flex flex-col justify-center space-y-5">
                                {data.texts.map((section, i) => (
                                    <div key={i}>
                                        {section.h && <h1 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-center md:text-left">{section.h}</h1>}
                                        {section.p.map((subtext, j) => {
                                            if (Array.isArray(subtext)) {
                                                return subtext.map((t, k) => (
                                                    <p key={`${i}-${j}-${k}`} className={`text-base md:text-xl lg:text-2xl xl:text-3xl ${classNames} md:pl-8 mt-2`}>
                                                        {t}
                                                    </p>
                                                ))
                                            } else {
                                                return (
                                                    <p key={`${i}-${j}`} className={`text-base md:text-xl lg:text-2xl xl:text-3xl ${classNames} `}>   
                                                        {subtext}
                                                    </p>
                                                )
                                            }
                                        })}
                                    </div>
                                ))}
                                

                                <div className={`${ data.hasButton ? 'flex justify-center' : 'hidden'}`}>
                                    <div className="bg-primary-500 text-white rounded-md text-base md:text-xl lg:text-2xl xl:text-3xl w-max">
                                        <button className="py-4 px-8">Request a Demo</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex w-5/6 md:w-full mx-auto md:mx-0 mt-8 md:mt-0 md:mx-4">
                            <img src={data.imgUrl} />
                        </div>
                    </div>
                </div>
            }
        </>
    )
};

export default ImageTextBlock;