import React, { useEffect, useRef, useState, useCallback } from 'react';

import MultiSelect from './MultiSelect';

const Contact = ({ isModalOpen, setIsModalOpen }) => {
    const [error, setError] = useState(null);
    const [payload, setPayload] = useState({
        'name': '',
        'email': '',
        'phone': '',
        'specialty': [],
        'country': '',
        'state': '',
    });

    const contactRef = useRef(null);

    useEffect(() => {
        if (!isModalOpen) return;

        const handleClick = (event) => {
            if (contactRef && contactRef.current && !contactRef.current.contains(event.target)) {
                setIsModalOpen(false);
            }
        };

        window.addEventListener('mousedown', handleClick);

        return () => window.removeEventListener('mousedown', handleClick);
    }, [isModalOpen]);

    const handleUpdate = useCallback((key) => {
        return (e) => {
            const value = (e.target instanceof HTMLElement) ? e.target.value : e;
            setPayload(prevState => ({ ...prevState, [key]: value }));
        }
    }, [payload]);

    return (
        <div className={`${ isModalOpen ? '' : 'hidden' } fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10 w-screen h-screen flex justify-center items-center`}>
            <div className='fixed top-0 bottom-0 right-0 w-screen backdrop-blur-sm bg-black/20 z-20'></div>

            <div ref={contactRef} className="relative z-30 p-6 md:p-12 md:border md:shadow-md md:rounded-md bg-default md:bg-white min-w-80 max-w-3xl w-full h-full md:h-auto">
                <h2 className="text-3xl text-semibold mb-4">Contact</h2>
                <form className="space-y-3 mb-6">
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="name">Name</label>
                        <input className="py-1.5 px-2.5 border border-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 rounded-md transition-all ease-in-out" type="text" id="name" name="name" placeholder="Name" onChange={handleUpdate('name')} />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label htmlFor="email">Email</label>
                        <input className="py-1.5 px-2.5 border border-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 rounded-md transition-all ease-in-out" type="text" id="email" name="email" placeholder="Email" onChange={handleUpdate('email')} />
                    </div>
                    
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="phone">Mobile/Cell (Optional)</label>
                        <input className="py-1.5 px-2.5 border border-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 rounded-md transition-all ease-in-out" type="text" id="phone" name="phone" placeholder="Mobile/Cell" onChange={handleUpdate('phone')} />
                    </div>

                    <MultiSelect 
                        options={
                            [
                                { value: "option1", label: "Option 1" },
                                { value: "option2", label: "Option 2" },
                                { value: "option3", label: "Option 3" },
                                { value: "option4", label: "Option 4" },
                                { value: "option5", label: "Option 5" },
                                { value: "option6", label: "Option 6" },
                            ]
                        }
                        selection={payload.speciality}
                        handleUpdate={handleUpdate}
                    />

                    <div className="flex flex-col space-y-1">
                        <label htmlFor="country">Country</label>
                        <input className="py-1.5 px-2.5 border border-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 rounded-md transition-all ease-in-out" type="text" id="country" name="country" placeholder="Country" onChange={handleUpdate('country')} />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label htmlFor="state">State</label>
                        <input className="py-1.5 px-2.5 border border-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 rounded-md transition-all ease-in-out" type="text" id="state" name="state" placeholder="State/Province" onChange={handleUpdate('state')} />
                    </div>
                </form>

                <div className="flex justify-end pt-3 space-x-4 border-t border-slate-300 ">
                    <div className="bg-secondary-500 hover:bg-secondary-600 text-white text-lg rounded-md">
                        <button className="py-2 px-4" onClick={() => setIsModalOpen(false)}>Close</button>
                    </div>

                    <div className="bg-success-500 hover:bg-success-600 text-white text-lg rounded-md">
                        <button className="py-2 px-4" onClick={() => setIsModalOpen(false)}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;