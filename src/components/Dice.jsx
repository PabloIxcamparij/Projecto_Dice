import '../assets/Dice.css';

const Dice = ({ roll, color }) => {
    
    return (
        <>
            <div className="dice-container">
                <div className={`dice dice-${roll}`}>
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className={`face face-${index + 1}`} style={{ backgroundColor: color }}>
                            {index + 1}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Dice;

