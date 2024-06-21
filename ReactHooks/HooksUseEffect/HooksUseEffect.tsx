/*
useEffectは、レンダリングを操作できる

初回のみレンダリング
useEffect(() => {
}, []);

特定の値（countA）が変わった時にレンダリング
useEffect(() => {
}, [countA]);

再レンダリングされるたびに実行※無限レンダリングの危険性があるため扱い注意
HooksUseEffectTrueは使わないようにする
useEffect(() => {
},);

時間やリサイズする関数で依存関係が存在しないものは、[]を追加して初回のみレンダリングするようにする
*/

import React, { useEffect, useState } from "react";

let falseCount = 1;
export const HooksUseEffectFalse = () => {
    falseCount = falseCount + 1;
    console.log(`HooksUseEffectFalseは${falseCount}回目のレンダリング`);

    return (
        <>
            <div>
                <h1>毎回レンダリングが行われる</h1>
            </div>
        </>
    );
};

let trueCount = 1;
export const HooksUseEffectTrue = () => {
    useEffect(() => {
        trueCount = trueCount + 1;
        console.log(`HooksUseEffectTrueは${falseCount}回目のレンダリング`);
    });
    return (
        <>
            <div>
                <h1>毎回レンダリングが行われる</h1>
            </div>
        </>
    );
};

export const HooksUseEffectFirstRender = () => {
    useEffect(() => {
        console.log("初回レンダリングのみ行われる");
    }, []);
    return (
        <>
            <div>
                <h1>初回レンダリングのみ行われる</h1>
            </div>
        </>
    );
};

let dependentArrayCount = 1;
export const HooksUseEffectDependentArray = () => {
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

    useEffect(() => {
        dependentArrayCount = dependentArrayCount + 1;
        console.log("countAに依存しています");
        console.log(
            `HooksUseEffectDependentArrayは${dependentArrayCount}回目のレンダリング`
        );
    }, [countA]);
    //}, [countA,countB]);のように依存関係を増やすことができる

    return (
        <>
            <div>
                <h1>useEffectでcountAに依存している</h1>
                <button onClick={resultA}>setCount1</button>
                <br />
                <button onClick={resultB}>setCount2</button>
                <p>{countA}</p>
                <p>{countB}</p>
            </div>
        </>
    );
};

export const HooksUseEffectTimerComponent = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <h1>useEffectで何かしらをカウントする時</h1>
            setIntervalのクリーンアップ: {count}
        </div>
    );
};

export const HooksUseEffectResizeComponent = () => {
    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            console.log("Window resized");
            setSize(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // クリーンアップ関数を追加
        return () => {
            console.log("Cleanup function called");
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            <h1>useEffectで画面幅が変わった時</h1>
            <p>Window size: {size}px</p>
        </div>
    );
};
