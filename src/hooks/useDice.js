import { useState, useEffect } from "react";

export const useDice = () => {
    const limit = 35;
    const [units1, setUnits1] = useState(1); 
    const [units2, setUnits2] = useState(1);
    const [rollDice1, setRollDice1] = useState(1);
    const [rollDice2, setRollDice2] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [winner, setWinner] = useState("");

    const rollDice = () => {
        const newRoll1 = Math.floor(Math.random() * 6) + 1;
        const newRoll2 = Math.floor(Math.random() * 6) + 1;

        setRollDice1(newRoll1);
        setRollDice2(newRoll2);

        whoWin(newRoll1, newRoll2);
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
            setUnits2(prev => prev - 1);
        } else if (nDice1 < nDice2) {
            setUnits1(prev => prev - 1);
        } else {
            setUnits1(prev => prev - 1);
            setUnits2(prev => prev - 1);
        }
    }

    useEffect(() => {
        if (units1 === 0 && units2 === 0) {
            setWinner("Tie");
            setShowModal(true);
        } else if (units1 === 0) {
            setWinner("Player 2");
            setShowModal(true);
        } else if (units2 === 0) {
            setWinner("Player 1");
            setShowModal(true);
        }
    }, [units1, units2]);

    const closeModal = () => {
        setShowModal(false);
    };

    return {
        limit,
        units1,
        units2,
        rollDice1,
        rollDice2,
        rollDice,
        showModal,
        winner,
        setUnits1,
        setUnits2,
        setRollDice1,
        setRollDice2,
        closeModal
    };
}
