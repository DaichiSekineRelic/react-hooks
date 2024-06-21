/*
複雑な状態管理を扱う時に使う
switchとcaseで分岐を行う
*/

import axios from "axios";
import React, { useReducer, useEffect } from "react";

export const HooksUseReducer = () => {
    type Action = "increment" | "decrement" | "reset";

    const initialState = 0;

    const reducerFunc = (countState: number, action: Action) => {
        switch (action) {
            case "increment":
                return countState + 1;
            case "decrement":
                return countState - 1;
            case "reset":
                return initialState;
            default:
                return countState;
        }
    };
    const [count, dispatch] = useReducer(reducerFunc, initialState);
    return (
        <>
            <h1>UseReducerの基本</h1>
            <h2>カウント：{count}</h2>
            <div color="primary" aria-label="outlined primary button group">
                <button onClick={() => dispatch("increment")}>increment</button>
                <button onClick={() => dispatch("decrement")}>decrement</button>
                <button onClick={() => dispatch("reset")}>reset</button>
            </div>
        </>
    );
};

export const HooksUseReducerMultiple = () => {
    type State = {
        firstCounter: number;
        secondCounter: number;
    };

    type Action =
        | { type: "increment1"; value: number }
        | { type: "decrement1"; value: number }
        | { type: "reset1" }
        | { type: "increment2"; value: number }
        | { type: "decrement2"; value: number }
        | { type: "reset2" };

    const initialState: State = {
        firstCounter: 0,
        secondCounter: 100,
    };

    const reducerFunc = (countState: State, action: Action): State => {
        switch (action.type) {
            case "increment1":
                return {
                    ...countState,
                    firstCounter: countState.firstCounter + action.value,
                };
            case "decrement1":
                return {
                    ...countState,
                    firstCounter: countState.firstCounter - action.value,
                };
            case "increment2":
                return {
                    ...countState,
                    secondCounter: countState.secondCounter + action.value,
                };
            case "decrement2":
                return {
                    ...countState,
                    secondCounter: countState.secondCounter - action.value,
                };
            case "reset1":
                return {
                    ...countState,
                    firstCounter: initialState.firstCounter,
                };
            case "reset2":
                return {
                    ...countState,
                    secondCounter: initialState.secondCounter,
                };
            default:
                return countState;
        }
    };
    const [count, dispatch] = useReducer(reducerFunc, initialState);

    return (
        <>
            <h1>UseReducerで値が複数の時</h1>
            <h2>カウント:{count.firstCounter}</h2>
            <div color="primary" aria-label="outlined primary button group">
                <button
                    onClick={() => dispatch({ type: "increment1", value: 1 })}
                >
                    increment1
                </button>
                <button
                    onClick={() => dispatch({ type: "decrement1", value: 1 })}
                >
                    decrement1
                </button>
                <button onClick={() => dispatch({ type: "reset1" })}>
                    reset
                </button>
            </div>
            <h2>カウント2:{count.secondCounter}</h2>
            <div color="secondary" aria-label="outlined primary button group">
                <button
                    onClick={() => dispatch({ type: "increment2", value: 100 })}
                >
                    increment2
                </button>
                <button
                    onClick={() => dispatch({ type: "decrement2", value: 100 })}
                >
                    decrement2
                </button>
                <button onClick={() => dispatch({ type: "reset2" })}>
                    reset
                </button>
            </div>
        </>
    );
};

export const HooksUseReducerAPI = () => {
    type State = {
        isLoading: boolean;
        isError: string;
        post: any; // 本来は取得するデータの型に合わせて定義するべきです
    };

    type Action =
        | { type: "FETCH_INIT" }
        | { type: "FETCH_SUCCESS"; payload: any }
        | { type: "FETCH_ERROR" };

    const initialState: State = {
        isLoading: true,
        isError: "",
        post: {},
    };

    const dataFetchReducer = (state: State, action: Action): State => {
        switch (action.type) {
            case "FETCH_INIT":
                return {
                    isLoading: true,
                    post: {},
                    isError: "",
                };
            case "FETCH_SUCCESS":
                return {
                    isLoading: false,
                    isError: "",
                    post: action.payload,
                };

            case "FETCH_ERROR":
                return {
                    isLoading: false,
                    post: {},
                    isError: "読み込みに失敗しました",
                };

            default:
                return dataState;
        }
    };
    const [dataState, dispatch] = useReducer(dataFetchReducer, initialState);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts/1")
            .then((res) => {
                dispatch({ type: "FETCH_SUCCESS", payload: res.data });
            })
            .catch((err) => {
                dispatch({ type: "FETCH_ERROR" });
            });
    });
    return (
        <div>
            <h1>UseReducerでAPIが絡んできた時</h1>
            <h2>{dataState.isLoading ? "Loading..." : dataState.post.title}</h2>
            <p>{dataState.isError ? dataState.isError : null}</p>
        </div>
    );
};
