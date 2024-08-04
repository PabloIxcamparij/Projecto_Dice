import Dice from './components/Dice';
import ModalWin from './components/ModalWin.jsx';
import { Button, Select, SelectItem } from "@nextui-org/react";
import { useDice } from './hooks/useDice.js';

function App() {
    const {
        limit,
        units1,
        units2,
        rollDice1,
        rollDice2,
        rollDice,
        setUnits1,
        setUnits2,
        showModal,
        winner,
        winnerColor,
        closeModal,
        startClicked,
        handleStart,
        handleReset,
        selectedUnits1,
        setSelectedUnits1,
        selectedUnits2,
        setSelectedUnits2,
        color1,
        setColor1,
        color2,
        setColor2,
        colors
    } = useDice();

    const isStartDisabled = !selectedUnits1 || !selectedUnits2;
    const isSelectDisabled = startClicked;
    const isAttackDisabled = !startClicked;
    const isResetDisabled = !startClicked;

    return (
        <div className='p-5'>

            <ModalWin isOpen={showModal} onClose={closeModal} winner={winner} winnerColor={winnerColor} />

            <div className='flex flex-col justify-center w-full p-5 gap-8'>
                
                {/* Dice 1 */}
                <div className='flex flex-col justify-center items-center w-full h-1/4 gap-8'>
                    <div className='flex justify-around w-full gap-8'>
                        <Select
                            label="Select units"
                            placeholder="Select"
                            labelPlacement="outside"
                            className="max-w-xs"
                            value={selectedUnits1}
                            onChange={(e) => {
                                const value = Number(e.target.value);
                                setSelectedUnits1(value);
                                setUnits1(value);
                            }}
                            isDisabled={isSelectDisabled}
                        >
                            {Array.from({ length: limit }, (_, index) => (
                                <SelectItem key={index + 1} textValue={`${index + 1}`} value={index + 1}>
                                    {index + 1}
                                </SelectItem>
                            ))}
                        </Select>

                        <Select
                            label="Select Color"
                            placeholder="Select"
                            labelPlacement="outside"
                            className="max-w-xs"
                            value={color1}
                            onChange={(e) => setColor1(e.target.value)}
                            isDisabled={isSelectDisabled}
                        >
                            {colors.map((color) => (
                                <SelectItem key={color.value} textValue={color.name} value={color.value}>
                                    {color.name}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>

                    <Dice roll={rollDice1} color={color1} />
                </div>

                {/* Container buttons */}
                <div className='bg-slate-200 flex flex-wrap justify-center items-center w-full p-5 gap-4 rounded-3xl'>
                    <h1 className='text-xl font-semibold w-full text-center'>
                        Remaining Units: {startClicked ? `${units1} / ${units2}` : 'Select units'}
                    </h1>

                    <Button
                        color="warning"
                        variant="ghost"
                        size="lg"
                        className='text-lg md:text-xl md:font-semibold'
                        onClick={handleStart}
                        isDisabled={isStartDisabled}
                    >
                        Start
                    </Button>

                    <Button
                        color="danger"
                        variant="ghost"
                        size="lg"
                        onClick={rollDice}
                        className='text-lg md:text-xl md:font-semibold'
                        isDisabled={isAttackDisabled}
                    >
                        Attack
                    </Button>
                    <Button
                        color="default"
                        variant="ghost"
                        size="lg"
                        onClick={handleReset}
                        className='text-lg md:text-xl md:font-semibold'
                        isDisabled={isResetDisabled}
                    >
                        Reset
                    </Button>
                </div>

                {/* Dice 2 */}
                <div className='flex flex-col justify-center items-center w-full h-1/4 gap-8'>
                    <div className='flex justify-around w-full gap-8'>
                        <Select
                            label="Select units"
                            placeholder="Select"
                            labelPlacement="outside"
                            className="max-w-xs"
                            value={selectedUnits2}
                            onChange={(e) => {
                                const value = Number(e.target.value);
                                setSelectedUnits2(value);
                                setUnits2(value);
                            }}
                            isDisabled={isSelectDisabled}
                        >
                            {Array.from({ length: limit }, (_, index) => (
                                <SelectItem key={index + 1} textValue={`${index + 1}`} value={index + 1}>
                                    {index + 1}
                                </SelectItem>
                            ))}
                        </Select>

                        <Select
                            label="Select Color"
                            placeholder="Select"
                            labelPlacement="outside"
                            className="max-w-xs"
                            value={color2}
                            onChange={(e) => setColor2(e.target.value)}
                            isDisabled={isSelectDisabled}
                        >
                            {colors.map((color) => (
                                <SelectItem key={color.value} textValue={color.name} value={color.value}>
                                    {color.name}
                                </SelectItem>
                            ))}
                        </Select>
                    </div>

                    <Dice roll={rollDice2} color={color2} />
                </div>
            </div>
        </div>
    );
}

export default App;
