import React from 'react';

import TextSection from '../../components/TextSection';
import content from './content';

const Faq = () => {
    return (
        <div className='min-w-40 max-w-7xl p-6 md:px-12 mx-auto'>
            <h1 className="text-3xl font-semibold mb-4">Faq</h1>

            <div className="space-y-4">
                {content.map((section, i) => (
                    <TextSection
                        key={`${section.title}-${i}`}
                        title={section.title}
                    >
                        <p>{section.body}</p>
                    </TextSection>
                ))}
            </div>
        </div>
    )
};

export default Faq;