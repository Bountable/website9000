import React from "react";


export default function TempoTapper() {

    const [tap, setTap] = React.useState<number[]>([]);
    const [tapArray, setTapArray] = React.useState<number[]>([]);
    const [currentTempo, setCurrentTempo] = React.useState<number | null>(null);


    

    const handleTap = () => {
        const timeStamp = Date.now();
        const newTapArray = [...tapArray, timeStamp];
        setTapArray(newTapArray);

        if (newTapArray.length >= 2) {
            const intervals = [];
            for (let i = 1; i < newTapArray.length; i++) {
                intervals.push(newTapArray[i] - newTapArray[i - 1]);
            }
            const averageInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;
            const bpm = Math.round(60000 / averageInterval);
            setTap([...tap, bpm]);
            setCurrentTempo(bpm)

        }

    };

    const handleReset = () => {
        setTap([]);
        setTapArray([]);
        setCurrentTempo(null);
    }
    
    return (
        <div className="container mt-4">
            <h1>Tempo Tapper</h1>
            The more you tap the more accurate.
            <h2> <strong>{currentTempo}</strong> BPM</h2>
            <button
                onClick={handleTap}
            >
                Tap
            </button>
            <button
                style={{ marginLeft: '10px' }}
                onClick={handleReset}
            >
                Reset
            </button>


  
        </div>
    );

}