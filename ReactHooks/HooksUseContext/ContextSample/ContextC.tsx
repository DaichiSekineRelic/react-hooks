//ReactからuseContextをimport
import React, { useContext } from "react";
//AppコンポーネントからUserContext, HobbyContextをimport
import { UserContext, HobbyContext } from "../HooksUseContext";

export const ContextC = () => {
    //useContextの引数に、UserContextやHobbyContextを渡すことによって、
    //AppコンポーネントでProviderに渡したvalueの値を変数に代入することが出来る
    const user = useContext(UserContext);
    const hobby = useContext(HobbyContext);
    return (
        <>
            <div className="ContextC">
                <p>
                    {user.name}
                    {user.age}歳: 趣味は{hobby}です。
                </p>
            </div>
        </>
    );
};
