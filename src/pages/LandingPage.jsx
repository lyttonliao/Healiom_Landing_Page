import React from 'react';

const LandingPage = () => {
    return (
        <div className="space-y-16">
            <div className="min-w-40 max-w-7xl p-8 md:px-16 mx-auto">
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col justify-center space-y-6">
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold">Healiom</h1>
                        <h1 className="text-2xl xl:text-3xl font-semibold">Scaling medical capacity so care + caring is easy & instant</h1>
                        <div>
                            <h1 className="text-2xl xl:text-3xl mb-4 lg:mb-2 font-semibold">For urgent care clinics, ERs, & small-midsize orgs</h1>
                            <p className="text-lg xl:text-xl">Healiom is a full drop-in solution, including diagnosis, e-prescribing, lab ordering, and credentialing, accessible in 3 steps: download, register, & start.</p>
                        </div>
                        <div>
                            <h1 className="text-2xl xl:text-3xl mb-4 lg:mb-2 font-semibold">For health systems, health plans, & tech orgs</h1>
                            <p className="text-lg xl:text-xl">Healiom's genAI & marketplace flex-agent platform is available as UX components and APIs.</p>
                        </div>
                    </div>

                    <div className="w-5/6 md:w-full flex mx-auto md:mx-0 mt-6 md:mt-0 md:mx-4">
                        <img src="/images/landing-page-iphone@2x.png" alt="landing page iphone"/>
                    </div>
                </div>
            </div>

            <div>
                <img src="/images/illustration_top.png" alt="illustration top"/>
            </div>

            <div className="space-y-8 px-8 md:py-16">
                <h1 className="text-2xl xl:text-3xl font-semibold text-center">Our Partners</h1>
                <div className="flex justify-center items-center">
                    <img src="/images/partners-group.png" alt="partners"/>
                </div>
            </div>
        </div>
    )
};

export default LandingPage;