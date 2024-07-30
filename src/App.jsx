import Dice from './components/Dice';
import { useDice } from './hooks/useDice.js'

function App() {
    const { rollDice1, rollDice2, units1, units2, rollDice, startGame } = useDice();


    return (
        <div className='flex flex-wrap items-center w-full h-screen p-4 gap-2'>
            <h1 className='font-bold text-3xl'>Lanzador de Dados</h1>

            <div className='bg-gray-200 w-full h-2/6'>
                <Dice roll={rollDice1} units={units1} />
            </div>

            <div className='flex justify-around bg-gray-300 w-full h-40'>
                <button onClick={startGame}> Empezar </button>
                <button onClick={rollDice}> Atacar </button>
                <button>Reset</button>
            </div>

            <div className='bg-gray-400 w-full h-2/6'>
                <Dice roll={rollDice2} units={units2} />

            </div>
        </div>
    );
}

export default App;
