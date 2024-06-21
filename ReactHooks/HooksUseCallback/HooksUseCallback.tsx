/*
const [countA, setCountA] = useState(0);
状態管理
setCountA(countA + 1)
出力されているcountAを変化させることができる
useStateを使わない場合は、DOMの変化が起きない
*/

import React, { useState, useCallback } from "react";

type CountProps = {
    text: string;
    countState: number;
    message: string;
};

type ButtonProps = {
    handleClick: () => void;
    value: string;
    message: string;
};

const Button = ({ handleClick, value, message }: ButtonProps) => {
    console.log(message, value);
    return (
        <button type="button" onClick={handleClick}>
            {value}
        </button>
    );
};

const Count = ({ text, countState, message }: CountProps) => {
    console.log(message, text);
    return (
        <p>
            {text}:{countState}
        </p>
    );
};

const ButtonReactMemo = React.memo(
    ({ handleClick, value, message }: ButtonProps) => {
        console.log(message, value);
        return (
            <button type="button" onClick={handleClick}>
                {value}
            </button>
        );
    }
);

const CountReactMemo = React.memo(
    ({ text, countState, message }: CountProps) => {
        console.log(message, text);
        return (
            <p>
                {text}:{countState}
            </p>
        );
    }
);

export const HooksUseCallbackTrue = () => {
    const [firstCountState, setFirstCountState] = useState(0);
    const [secondCountState, setSecondCountState] = useState(10);

    const incrementFirstCounter = useCallback(
        () => setFirstCountState(firstCountState + 1),
        [firstCountState]
    );

    const incrementSecondCounter = useCallback(
        () => setSecondCountState(secondCountState + 10),
        [secondCountState]
    );

    return (
        <>
            <h1>
                useCallbackとReact.memoを使っているのでレンダリングが最適化されている
            </h1>
            <CountReactMemo
                text="Count+1ボタン"
                countState={firstCountState}
                message={"HooksUseCallbackTrue"}
            />
            <CountReactMemo
                text="Count+10ボタン"
                countState={secondCountState}
                message={"HooksUseCallbackTrue"}
            />
            <ButtonReactMemo
                handleClick={incrementFirstCounter}
                value={"Button+1ボタン"}
                message={"HooksUseCallbackTrue"}
            />
            <ButtonReactMemo
                handleClick={incrementSecondCounter}
                value={"Button+10ボタン"}
                message={"HooksUseCallbackTrue"}
            />
        </>
    );
};

export const HooksUseCallbackFalse = () => {
    const [firstCountState, setFirstCountState] = useState(0);
    const [secondCountState, setSecondCountState] = useState(10);

    //+ 1 ボタンのstateセット用関数
    const incrementFirstCounter = () => setFirstCountState(firstCountState + 1);

    //+ 10 ボタンのstateセット用関数
    const incrementSecondCounter = () =>
        setSecondCountState(secondCountState + 10);

    return (
        <>
            <h1>
                useCallbackもReact.memoも使われていないので、ボタンを押すたびにレンダリングされる
            </h1>
            <Count
                text="Count+1ボタン"
                countState={firstCountState}
                message={"HooksUseCallbackFalse"}
            />
            <Count
                text="Count+10ボタン"
                countState={secondCountState}
                message={"HooksUseCallbackFalse"}
            />
            <Button
                handleClick={incrementFirstCounter}
                value={"Button+1ボタン"}
                message={"HooksUseCallbackFalse"}
            />
            <Button
                handleClick={incrementSecondCounter}
                value={"Button+10ボタン"}
                message={"HooksUseCallbackFalse"}
            />
        </>
    );
};
