/*
const inputRef = useRef<HTMLInputElement>(null);
DOMに直接アクセス
フォームはどちらでも実装できそうだが、どちらかといえば制御コンポーネントのほうが、Reactの哲学に合っているらしい
*/

import React, { useRef, useState } from "react";

export const HooksUseRefTrue = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [text, setText] = useState<string>("");
    const handleClick = () => {
        const inputText = inputRef.current.value;
        setText(inputText);
        console.log(inputText);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    console.log("HooksUseRefTrueがレンダリング");
    return (
        <>
            <h1>
                useRefでフォームを実装しているが、非制御コンポーネントのため非推奨
            </h1>
            <input
                style={{ backgroundColor: "#fff", display: "block" }}
                ref={inputRef}
                type="text"
            />
            <button onClick={handleClick}>送信する</button>
            <p>テキスト : {text}</p>
        </>
    );
};

export const HooksUseRefFalse = () => {
    const [inputRefement, setInputElement] = useState("");
    const handleClick = () => {
        console.log(inputRefement);
    };
    console.log(inputRefement);
    console.log("HooksUseRefFalseがレンダリング");
    return (
        <>
            <h1>useRefを使っていない。フォーム実装はこちらが正しい</h1>
            <input
                style={{ backgroundColor: "#fff", display: "block" }}
                value={inputRefement}
                onChange={(e) => setInputElement(e.target.value)}
                type="text"
            />
            <button onClick={handleClick}>setText</button>
            <p>テキスト : {inputRefement}</p>
        </>
    );
};

export const HooksUseRefFocus = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
            console.log("inputタグがフォーカスされる");
        }
    };
    console.log("HooksUseRefTrueがレンダリング");
    return (
        <>
            <h1>
                useRefでフォームを実装しているが、非制御コンポーネントのため非推奨
            </h1>
            <input
                style={{ backgroundColor: "#fff", display: "block" }}
                ref={inputRef}
                type="text"
            />
            <button onClick={handleClick}>送信する</button>
        </>
    );
};
