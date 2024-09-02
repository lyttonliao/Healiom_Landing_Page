import React, { useEffect, useState, useRef, useCallback } from 'react';

import ImageTextBlock from '../components/ImageTextBlock';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const LandingPage = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const sliderRef = useRef(null);

    const sliderSettings = {
        ref: sliderRef,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    rows: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
        ]
    };

    const sliderNext = useCallback(() => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    }, [sliderRef]);

    const sliderPrev = useCallback(() => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    }, [sliderRef]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/lp_content.json');
            if (!res.ok) {
                setError(res.status);
                return;
            };

            const payload = await res.json();
            setData(payload);
        };

        fetchData();
    }, []);
    
    if (data) {
        console.log(data.portraits)
    }

    return (
        <div className="my-16">
            {data &&
                <div className="space-y-12">
                    <ImageTextBlock
                        data={data.landingPage[0]}
                        isReversed={false}
                    />

                    <div className="relative overflow-hidden pt-8">
                        <div className="flex min-w-md animate-refine-slide md:animate-none">
                            <img className="w-full" src="/images/illustration_top.png" alt="illustration top"/>
                            <img className="w-full md:hidden" src="/images/illustration_top.png" alt="illustration top"/>
                        </div>
                    </div>

                    <div id="solution" className="min-w-40 max-w-7xl pt-20 px-8 md:px-16 mx-auto text-center">
                        <h1 className="text-primary-500 text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6">Healiom is designed to solve the capacity problem.</h1>
                        <p className="text-base md:text-xl lg:text-2xl xl:text-3xl">Using Healiom's clinically proven GenAI and marketplace dynamics similar to ride-sharing, we can support expanding the breadth of care handled remotely, saving time, and solving the supply-demand mismatch.</p>
                    </div>

                    <div id="partners" className="space-y-8 md:px-16 py-20">
                        <h1 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-center">Our Partners</h1>
                        <div className="relative overflow-hidden">
                            <div className="flex min-w-md justify-center items-center animate-refine-slide md:animate-none">
                                <img className="px-6" src="/images/partners-group.png" alt="partners"/>
                                <img className="px-6 md:hidden" src="/images/partners-group.png" alt="partners"/>
                                <img className="px-6 md:hidden" src="/images/partners-group.png" alt="partners"/>
                            </div>
                        </div>
                    </div>

                    {data.landingPage.slice(1, data.landingPage.length - 2).map((d, i) => {
                        return (
                            <ImageTextBlock
                                key={i + 1}
                                data={d}
                                isReversed={ i % 2 !== 0 }
                            />
                        )
                    })}

                    <div className="relative overflow-hidden py-8">
                        <div className="flex min-w-md animate-refine-slide md:animate-none">
                            <img className="w-full" src="/images/illustration.png" alt="illustration bottom"/>
                            <img className="w-full md:hidden" src="/images/illustration.png" alt="illustration bottom"/>
                        </div>
                    </div>

                    <ImageTextBlock
                        data={data.landingPage[data.landingPage.length - 2]}
                        isReversed={false}
                    />
                    
                    <div className="min-w-40 max-w-7xl pt-20 pb-14 px-8 md:px-16 mx-auto text-center">
                        <h1 className="text-primary-500 text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6">Healiom is available as a standalone app, UX components, or APIs.</h1>
                        <p className="text-base md:text-xl lg:text-2xl xl:text-3xl">We've combined the best of what's available in the market with our clinically proven GenAI, Holmes, to capture, interpret, and operationally leverage data for remote care.</p>
                    </div>

                    <ImageTextBlock
                        data={data.landingPage[data.landingPage.length - 1]}
                        isReversed={true}
                    />

                    <div id="team" className="max-w-7xl mx-auto px-8 md:px-16 pt-8 text-center">
                        <h1 className="text-primary-500 text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6">Healiom is supported by a global team with decades of experience in healthcare and technology entrepreneurship.</h1>

                        <div className="relative">
                            <div className="absolute top-1/2 -left-5 md:-left-8 transform -translate-y-1/2">
                                <button 
                                    className="rounded-full text-slate-700 hover:text-primary-500 hover:bg-gray-200 p-1"
                                    onClick={sliderPrev}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            
                            <div className="px-2">
                                <Slider {...sliderSettings}>
                                    {data.portraits.map((d, i) => {
                                        const formattedName = d.name.split(' ');
                                        const len = formattedName.length;
                                        const lastName = formattedName[len - 1];
                                        formattedName[len - 1] = `${lastName[0]}.`;

                                        return (
                                            <div key={i} className="px-4 py-2">
                                                <img src={d.imgUrl} alt={d.name} />
                                                <p className="text-center text-[#0086c3]">{d.name}</p>
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </div>

                            <div className="absolute top-1/2 -right-5 md:-right-8 transform -translate-y-1/2">
                                <button 
                                    className="rounded-full hover:text-primary-500 hover:bg-gray-200 p-1"
                                    onClick={sliderNext}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
};

export default LandingPage;