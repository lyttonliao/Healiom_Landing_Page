import React from 'react';

import TextSection from '../../components/TextSection';
import content from './content';

const Privacy = () => {
    return (
        <div className='min-w-40 max-w-7xl p-6 md:px-12 mx-auto'>
            <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
            <h1 className="text-3xl font-semibold mb-4">HEALIOM Inc. (DBA "Healiom") PRIVACY POLICY</h1>

            <div className="space-y-4">
                {content.slice(2).map((section) => {
                    const body = section.body.map((text, i) => {
                        if (Array.isArray(text)) {
                            const bullets = text.map((bullet, j) => <li key={`${section.title}-${i}-bullet-${j}`}>{bullet}</li>)

                            return (
                                <ul key={`${section.title}-${i}-list`} className="list-disc pl-8 space-y-2"> 
                                    {bullets}
                                </ul>
                            )
                        } else {
                            return <p key={`${section.title}-${i}`}>{text}</p>
                        }
                    })

                    return (
                        <TextSection 
                            key={section.title}
                            title={section.title}
                        >
                            {body}
                        </TextSection>
                    )
                })}
            </div>
        </div>
    )
};

export default Privacy;