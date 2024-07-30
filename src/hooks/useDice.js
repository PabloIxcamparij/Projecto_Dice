import { useState, useEffect, useMemo } from "react";

export const useDice = () => {
    const [rollDice1, setRollDice1] = useState(1);
    const [rollDice2, setRollDice2] = useState(1);
    const [units1, setUnits1] = useState(20); // Estado para las unidades del dado 1
    const [units2, setUnits2] = useState(20); // Estado para las unidades del dado 2


    const rollDice = () => {
        const newRoll1 = Math.floor(Math.random() * 6) + 1;
        const newRoll2 = Math.floor(Math.random() * 6) + 1;

        setRollDice1(newRoll1);
        setRollDice2(newRoll2);
        
        whoWin(newRoll1, newRoll2)
    }

    const whoWin = (nDice1, nDice2) => {
        // Crear un mapa de valores para cambiar los valores del dado
        const transform = {
            3: 6,
            6: 3,
            4: 5,
            5: 4,
        };

        // Transformar los valores de los dados usando el mapa
        nDice1 = transform[nDice1] || nDice1;
        nDice2 = transform[nDice2] || nDice2;

        // Comparar los valores transformados
        if (nDice1 > nDice2) {
            console.log("Win Dice 1");
            setUnits2(units2 -1)
        } else if (nDice1 < nDice2) {
            console.log("Win Dice 2");
            setUnits1(units1-1)
        } else {
            console.log("Tie");
            setUnits1(units1 -1)
            setUnits2(units2 -1)
        }

        // Mostrar los valores y mensaje final
        console.log(nDice1);
        console.log(nDice2);
        console.log("Fin...");
    }

    return {
        units1,
        units2,
        rollDice1,
        rollDice2,
        rollDice
    }
}