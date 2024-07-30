import { useState, useEffect } from 'react';
import Dice from './components/Dice';
import ModalWin from './components/ModalWin.jsx';
import { Button, Select, SelectItem } from "@nextui-org/react";
import { useDice } from './hooks/useDice.js';

function App() {
    const [startClicked, setStartClicked] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const { units1, units2, rollDice1, rollDice2, rollDice, setUnits1, setUnits2 } = useDice();
   
    const handleStart = () => {
        setStartClicked(true);
    };

    useEffect(() => {
        if (units1 === 0 || units2 === 0) {
            setShowModal(true)
            console.log("in app " + showModal)
        }
    }, [units1, units2]);


    return (
        <div className='p-5'>
            <h1 className='font-bold text-3xl m-5'>Dice Thrower</h1>

            <ModalWin isOpen={showModal} />

            <div className='flex flex-col justify-center w-full p-5 gap-8'>
                <div className='flex flex-col justify-center items-center w-full h-1/4 gap-8'>
                    <div className='flex flex-col md:flex-row justify-around w-full gap-8'>
                        <Select
                            label="Number of units"
                            placeholder="Select a number"
                            labelPlacement="outside"
                            className="max-w-xs"
                            onChange={(e) => setUnits1(Number(e.target.value))} // Maneja el cambio de selección
                        >
                            {Array.from({ length: 20 }, (_, index) => (
                                <SelectItem key={index + 1} textValue={`${index + 1}`} value={index + 1}>
                                    {index + 1}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>

                    <Dice roll={rollDice1} />
                </div>

                <div className='bg-slate-200 flex flex-wrap justify-center items-center w-full p-5 gap-4 rounded-3xl'>

                    <h1 className='text-xl font-semibold w-full text-center'>Remaining Units: {startClicked ? `${units1} / ${units2}` : 'Select units'}</h1>


                    <Button color="warning" variant="ghost" size="lg" className='text-lg md:text-xl md:font-semibold' onClick={handleStart}>
                        Start
                    </Button>
                    <Button color="danger" variant="ghost" size="lg" onClick={rollDice} className='text-lg md:text-xl md:font-semibold'>
                        Attack
                    </Button>
                    <Button color="default" variant="ghost" size="lg" className='text-lg md:text-xl md:font-semibold'>
                        Reset
                    </Button>
                </div>

                <div className='flex flex-col justify-center items-center w-full h-1/4 gap-8'>
                    <div className='flex flex-col md:flex-row justify-around w-full gap-8'>
                        <Select
                            label="Number of units"
                            placeholder="Select a number"
                            labelPlacement="outside"
                            className="max-w-xs"
                            onChange={(e) => setUnits2(Number(e.target.value))} // Maneja el cambio de selección
                        >
                            {Array.from({ length: 20 }, (_, index) => (
                                <SelectItem key={index + 1} textValue={`${index + 1}`} value={index + 1}>
                                    {index + 1}
                                </SelectItem>
                            ))}
                        </Select>

                    </div>

                    <Dice roll={rollDice2} />
                </div>
            </div>
        </div>
    );
}

export default App;
