import { useState } from "react";

export const useDice = () => {
    const limit = 35;
    const [units1, setUnits1] = useState(1); 
    const [units2, setUnits2] = useState(1);
    const [rollDice1, setRollDice1] = useState(1);
    const [rollDice2, setRollDice2] = useState(1);
    
    const rollDice = () => {
        const newRoll1 = Math.floor(Math.random() * 6) + 1;
        const newRoll2 = Math.floor(Math.random() * 6) + 1;

        setRollDice1(newRoll1);
        setRollDice2(newRoll2);

        whoWin(newRoll1, newRoll2)
    }

    const whoWin = (nDice1, nDice2) => {
        const transform = {
            3: 6,
            6: 3,
            4: 5,
            5: 4,
        };

        nDice1 = transform[nDice1] || nDice1;
        nDice2 = transform[nDice2] || nDice2;

        if (nDice1 > nDice2) {
            setUnits2(units2 -1)
        } else if (nDice1 < nDice2) {
            setUnits1(units1 -1)
        } else {
            setUnits1(units1 -1)
            setUnits2(units2 -1)
        }
    }


    return {
        limit,
        units1,
        units2,
        rollDice1,
        rollDice2,
        rollDice,
        setUnits1,
        setUnits2,
    }
}
