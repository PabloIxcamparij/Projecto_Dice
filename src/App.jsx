import Dice from './components/Dice';
import { Button } from "@nextui-org/react";
import { useDice } from './hooks/useDice.js'


function App() {
    const { rollDice1, rollDice2, rollDice } = useDice();


    return (
        <div className='p-5'>

            <h1 className='font-bold text-3xl m-5'>Dice Thrower</h1>

            <div className='flex flex-col justify-center w-full p-5 gap-8'>

                <Dice roll={rollDice1} />

                <div className='bg-slate-200 flex flex-wrap justify-around items-center w-full p-5 gap-4 rounded-3xl'>
                    <Button color="warning" variant="ghost" size="lg" className='text-lg md:text-xl md:font-semibold'>
                        Start
                    </Button>
                    <Button color="danger" variant="ghost" size="lg" onClick={rollDice} className='text-lg md:text-xl md:font-semibold'>
                        Attack
                    </Button>
                    <Button color="default" variant="ghost" size="lg" className='text-lg md:text-xl md:font-semibold'>
                        Reset
                    </Button>
                </div>

                <Dice roll={rollDice2} />

            </div>
        </div >
    );
}

export default App;
