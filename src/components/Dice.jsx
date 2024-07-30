import React from 'react';
import '../assets/Dice.css';
import { Select, SelectItem } from "@nextui-org/react";

const Dice = ({ roll }) => {
    const limit = 20; // Variable que define el número de opciones


    return (
        <div className='flex flex-col justify-center items-center w-full h-1/4 gap-8'>

            <div className='flex flex-col md:flex-row justify-around w-full gap-8'>

                <Select
                    label="Number of units"
                    placeholder="Select a number"
                    labelPlacement="outside"
                    className="max-w-xs"
                >
                    {Array.from({ length: limit }, (_, index) => (
                        <SelectItem key={index + 1} textValue={`${index + 1}`} value={index + 1}>
                            {index + 1}
                        </SelectItem>
                    ))}
                </Select>

                <h1 className='text-xl font-semibold'>Remaining Units: { }</h1>

            </div>

            <div className="dice-container">
                <div className={`dice dice-${roll}`}>
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className={`face face-${index + 1} text-white`} >
                            {index + 1}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dice;

