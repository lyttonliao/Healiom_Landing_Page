import React from 'react';

const TextSection = ({ title, children }) => {
    return (
        <div>
            <h1 className="text-3xl font-semibold mb-2">
                {title}
            </h1>

            <div className="space-y-4 leading-5">
                {children}
            </div>
        </div>
    )
};

export default TextSection;