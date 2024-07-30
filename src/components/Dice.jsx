import React from 'react';
import '../assets/Dice.css';

const Dice = ({ roll, units  }) => {
    return (
        <div className='flex flex-col justify-center items-center p-4 gap-8'>
            <div className='flex justify-around w-full'>
                <select name="units" id="units" className='w-2/6 text-center'>
                    {
                        // Crear tantas opciones como la variable unidades indique
                        Array.from({ length: 20 }, (_, index) => (
                            <option key={index} value={index + 1}>
                                Unit {index + 1}
                            </option>
                        ))
                    }
                </select>

                <h1 className='font-semibold'>Remaining Units: {units}</h1>
            </div>

            <div className="dice-container">
                <div className={`dice dice-${roll}`}>
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className={`face face-${index + 1}`}>
                            {index + 1}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dice;
