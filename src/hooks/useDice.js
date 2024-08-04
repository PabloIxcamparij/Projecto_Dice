import { useState, useEffect } from "react";

export const useDice = () => {
    const limit = 35;
    const [units1, setUnits1] = useState(1)
    const [units2, setUnits2] = useState(1)

    const [color1, setColor1] = useState("#F31260")
    const [color2, setColor2] = useState("#002E62")

    const [selectedUnits1, setSelectedUnits1] = useState("")
    const [selectedUnits2, setSelectedUnits2] = useState("")

    const [rollDice1, setRollDice1] = useState(1)
    const [rollDice2, setRollDice2] = useState(1)

    const [winner, setWinner] = useState("")
    const [winnerColor, setWinnerColor] = useState("")
    const [winnerUnits, setWinnerUnits] = useState(0)


    const [showModal, setShowModal] = useState(false)
    const [startClicked, setStartClicked] = useState(false)

    const colors = [
        { name: "Blue", value: "#002E62" },
        { name: "Red", value: "#F31260" },
        { name: "Green", value: "#0E793C" },
        { name: "Yellow", value: "#F5A524" },
        { name: "Black", value: "#18181B" }
    ]

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
            setWinnerUnits(0)
            setWinnerColor("#000000")
            setShowModal(true);

            handleReset()
        
        } else if (units1 === 0) {
            setWinner(`Player 2`)
            setWinnerColor(color2)
            setWinnerUnits(units2)
            setShowModal(true);

            handleReset()

        } else if (units2 === 0) {
            setWinner(`Player 1`);
            setWinnerColor(color1)
            setWinnerUnits(units1)
            setShowModal(true);

            handleReset()
        }
    }, [units1, units2]);

    const handleStart = () => {
        setStartClicked(true);
    }

    const handleReset = () => {
        setStartClicked(false);
        setUnits1(1);
        setUnits2(1);
        setSelectedUnits1("");
        setSelectedUnits2("");
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return {
        limit,
        units1,
        units2,
        rollDice1,
        rollDice2,
        rollDice,
        showModal,
        winner,
        winnerColor,
        winnerUnits,
        setUnits1,
        setUnits2,
        setRollDice1,
        setRollDice2,
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
    };
}
