/*
関数のメモ化
useMemo();
useMemoしたい部分に対して関数を追加する
useMemo(() => double(countA), [countA]);
countAを保存しているため、countAが変化するまで、関数処理をスキップする
React特有の2回レンダリングされる挙動がスキップされる
useMemoを使わない場合は、コンポーネント自体が際レンダリングされる
*/

import React, { useState, useMemo } from "react";

const double = (count: number, name: string) => {
    let i = 0;
    const text = `${name}のdouble関数が実行されているから遅れる`;
    console.log(text);
    while (i < 1000000000) i++;
    return count * 2;
};

export const HooksUseMemoTrue = () => {
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

    const memoizedResultA = useMemo(() => double(countA, "countA"), [countA]);
    const memoizedResultB = useMemo(() => double(countB, "countB"), [countB]);

    return (
        <>
            <div>
                <h1>useMemoが使われている</h1>
                <p>
                    countBがuseMemoで保存されているからmemoizedResultBのdouble関数がスキップされる:
                    {memoizedResultA}
                </p>
                <p>
                    countAがuseMemoで保存されているからmemoizedResultAのdouble関数がスキップされる:
                    {memoizedResultB}
                </p>
                <button onClick={resultA}>setCount1</button>
                <br />
                <button onClick={resultB}>setCount2</button>
            </div>
        </>
    );
};

export const HooksUseMemoFalse = () => {
    const [countC, setCountC] = useState(0);
    const [countD, setCountD] = useState(0);

    const resultC = () => {
        console.log("resultC実行");
        setCountC(countC + 1);
    };

    const resultD = () => {
        console.log("resultD実行");
        setCountD(countD + 1);
    };

    const memoizedResultC = double(countC, "countC");
    const memoizedResultD = double(countD, "countD");

    return (
        <>
            <div>
                <h1>useMemoが使われていない</h1>
                <p>
                    useMemoが使われていないから処理が遅れる:
                    {memoizedResultC}
                </p>
                <p>
                    useMemoが使われていないから処理が遅れる:
                    {memoizedResultD}
                </p>
                <button onClick={resultC}>setCount1</button>
                <br />
                <button onClick={resultD}>setCount2</button>
            </div>
        </>
    );
};
