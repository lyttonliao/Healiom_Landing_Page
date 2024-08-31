import React, { useEffect, useState } from 'react';

import ImageTextBlock from '../components/ImageTextBlock';
import Slider from '../components/Slider';


const LandingPage = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

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
    

    return (
        <div className="my-16">
            {data &&
                <div className="space-y-12">
                    <ImageTextBlock
                        data={data.landingPage[0]}
                        isReversed={false}
                    />

                    <div className="relative overflow-hidden">
                        <div className="flex min-w-md animate-refine-slide md:animate-none">
                            <img className="w-full" src="/images/illustration_top.png" alt="illustration top"/>
                            <img className="w-full md:hidden" src="/images/illustration_top.png" alt="illustration top"/>
                        </div>
                    </div>

                    <div className="space-y-8 md:px-16">
                        <h1 className="text-2xl xl:text-3xl font-semibold text-center">Our Partners</h1>
                        <div className="relative overflow-hidden">
                            <div className="flex min-w-md justify-center items-center animate-refine-slide md:animate-none">
                                <img className="px-5" src="/images/partners-group.png" alt="partners"/>
                                <img className="px-5 md:hidden" src="/images/partners-group.png" alt="partners"/>
                                <img className="px-5 md:hidden" src="/images/partners-group.png" alt="partners"/>
                            </div>
                        </div>
                    </div>

                    <div className="min-w-40 max-w-7xl py-6 px-8 md:px-16 mx-auto text-center">
                        <h1 className="text-primary-500 text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4 ">Healiom is designed to solve the capacity problem.</h1>
                        <p className="text-base md:text-xl lg:text-2xl xl:text-3xl">Using Healiom's clinically proven GenAI and marketplace dynamics similar to ride-sharing, we can support expanding the breadth of care handled remotely, saving time, and solving the supply-demand mismatch.</p>
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

                    <div className="relative overflow-hidden">
                        <div className="flex min-w-md animate-refine-slide md:animate-none">
                            <img className="w-full" src="/images/illustration.png" alt="illustration bottom"/>
                            <img className="w-full md:hidden" src="/images/illustration.png" alt="illustration bottom"/>
                        </div>
                    </div>

                    <ImageTextBlock
                        data={data.landingPage[data.landingPage.length - 2]}
                        isReversed={false}
                    />

                    
                    <div className="min-w-40 max-w-7xl py-8 px-8 md:px-16 mx-auto text-center">
                        <h1 className="text-primary-500 text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4 ">Healiom is available as a standalone app, UX components, or APIs.</h1>
                        <p className="text-base md:text-xl lg:text-2xl xl:text-3xl">We've combined the best of what's available in the market with our clinically proven GenAI, Holmes, to capture, interpret, and operationally leverage data for remote care.</p>
                    </div>

                    <ImageTextBlock
                        data={data.landingPage[data.landingPage.length - 1]}
                        isReversed={true}
                    />

                    <Slider
                        data={data.portraits}
                    />
                </div>
            }
        </div>
    )
};

export default LandingPage;