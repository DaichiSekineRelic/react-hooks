import React from "react";
import { ContextB } from "./ContextB";

export const ContextA = () => {
    return (
        <>
            <div className="contextA">
                <ContextB />
            </div>
        </>
    );
};
