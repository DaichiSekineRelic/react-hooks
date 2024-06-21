/*
浅い階層から深い階層に値を渡すために使う
useStateの値を受け渡しせずに、globalに使えるようにする
順番はどちらでも良い
<HobbyContext.Provider value={hobby}>
<UserContext.Provider value={user}>

<UserContext.Provider value={user}>
<HobbyContext.Provider value={hobby}>
HooksUseContext->ContextC->ContextB->ContextAの順番に受け渡ししている
*/

import React, { createContext, useState } from "react";
import { ContextA } from "./ContextSample/ContextA";

export interface User {
    name: string;
    age: string;
}
//createContextを使ってUserContextとHobbyContextを作成
export const UserContext = createContext<User | undefined>(undefined);
export const HobbyContext = createContext<string | undefined>(undefined);

export const HooksUseContext = () => {
    //useStateを使ってuserを作成
    const [user, setUser] = useState({
        name: "セイラ",
        age: "17",
    });
    //useStateを使ってhobbyを作成
    const [hobby, setHobby] = useState("キャンプ");
    return (
        <div className="HooksUseContext">
            {/* HobbyContextが中でも良い */}
            <h1>UseContextを使う時</h1>
            <HobbyContext.Provider value={hobby}>
                <UserContext.Provider value={user}>
                    <ContextA />
                </UserContext.Provider>
            </HobbyContext.Provider>
        </div>
    );
};
