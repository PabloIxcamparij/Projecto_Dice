import { useState } from "react";

import '../assets/Dice.css';
import { Select, SelectItem } from "@nextui-org/react";

const Dice = ({ roll }) => {

    return (
        <>
            <div className="dice-container">
                <div className={`dice dice-${roll}`}>
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className={`face face-${index + 1} text-white`} >
                            {index + 1}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Dice;

