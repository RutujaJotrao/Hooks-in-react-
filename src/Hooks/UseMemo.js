import React, { useMemo, useState } from 'react';

const UseMemo = () => {
    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);

    const squaredNumber = useMemo(() => {
        return calculateSquare(number);
    }, [number]);

    return (
        <div>
            <h1>UseMemo hook</h1>
            <input
                type='text'
                value={number}
                placeholder='Enter number'
                onChange={(e) => setNumber(e.target.value)}
            />
            <br />
            <br />

            <button
                onClick={() => {
                    setCount((prev) => prev + 1);
                }}
            >
                Calculate square
            </button>

            <br />
            <br />
            <div>Square : {squaredNumber}</div>

            <p>Button clicks to calculate square: {count}</p>
        </div>
    );
};

function calculateSquare(number) {
    return Math.pow(Number(number), 2);
}

export default UseMemo;
