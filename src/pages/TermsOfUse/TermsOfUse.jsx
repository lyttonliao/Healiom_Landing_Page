import React from 'react';

import TextSection from '../../components/TextSection';
import content from './content';

const TermsOfUse = () => {
    return (
        <div className='min-w-40 max-w-7xl p-6 md:px-12 mx-auto'>
            <div className="space-y-4">
                {content.map((section) => {
                    return (
                        <TextSection 
                            key={section.title}
                            title={section.title}
                        >
                            {section.body.map((text, i) => (
                                <p key={`${section.title}-${i}`}>{text}</p>
                            ))}
                        </TextSection>
                    )
                })}
            </div>
        </div>
    )
};

export default TermsOfUse;