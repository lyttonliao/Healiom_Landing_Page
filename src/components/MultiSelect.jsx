import React, { useState } from 'react';

import Select from 'react-select';


const MultiSelect = ({ options, selection, handleUpdate }) => {
    return (
        <div className='flex flex-col space-y-1'>
            <label htmlFor='specialty'>Specialty</label>
            <Select
                id='specialty'
                defaultValue={selection}
                options={options}
                placeholder='Specialty'
                styles={{
                    control: (baseStyles, state) => {
                        return {
                            ...baseStyles,
                            borderWidth: '1px',
                            borderRadius: '0.375rem',
                            color: 'rgb(27 30 41)',
                            borderColor: state.isFocused ? 'rgb(14 165 233)' : 'rgb(148 163 184)',
                            outline: state.isFocused ? '2px solid transparent' : '',
                        }
                    }
                }}  
                isMulti
                noOptionsMessage={() => "No results found"}
                onChange={handleUpdate('specialty')}
            />
        </div>
    )
};

export default MultiSelect;