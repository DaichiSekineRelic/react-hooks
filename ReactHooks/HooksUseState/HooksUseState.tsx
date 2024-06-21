/*
const [countA, setCountA] = useState(0);
状態管理
setCountA(countA + 1)
出力されているcountAを変化させることができる
useStateを使わない場合は、DOMの変化が起きない
*/

import React, { useState } from "react";

export const HooksUseStateTrue = () => {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    const resultA = () => {
        console.log("resultA実行");
        setCountA(countA + 1);
    };

    const resultB = () => {
        console.log("resultB実行");
        setCountB(countB + 1);
    };

    return (
        <>
            <div>
                <h1>useStateが使われている</h1>
                <button onClick={resultA}>setCount1</button>
                <br />
                <button onClick={resultB}>setCount2</button>
                <p>{countA}</p>
                <p>{countB}</p>
            </div>
        </>
    );
};

export const HooksUseStateFalse = () => {
    let countA = 0;
    let countB = 0;
    const resultA = () => {
        countA = countA + 1;
        console.log(`countAの値${countA}`);
    };

    const resultB = () => {
        countB = countB + 1;
        console.log(`countBの値${countB}`);
    };

    return (
        <>
            <div>
                <h1>useStateが使われていない</h1>
                <button onClick={resultA}>setCount1</button>
                <br />
                <button onClick={resultB}>setCount2</button>
                <p>{countA}</p>
                <p>{countB}</p>
            </div>
        </>
    );
};
