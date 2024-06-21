import React from "react";

import styles from "./Home.module.scss";
import { Link } from "@inertiajs/inertia-react";
import {
    HooksUseMemoTrue,
    HooksUseMemoFalse,
} from "@/components/ReactHooks/HooksUseMemo/HooksUseMemo";
import {
    HooksUseStateTrue,
    HooksUseStateFalse,
} from "@/components/ReactHooks/HooksUseState/HooksUseState";
import {
    HooksUseEffectFalse,
    HooksUseEffectFirstRender,
    HooksUseEffectDependentArray,
    HooksUseEffectTimerComponent,
    HooksUseEffectResizeComponent,
} from "@/components/ReactHooks/HooksUseEffect/HooksUseEffect";

import { HooksUseContext } from "@/components/ReactHooks/HooksUseContext/HooksUseContext";
import {
    HooksUseReducer,
    HooksUseReducerMultiple,
    HooksUseReducerAPI,
} from "@/components/ReactHooks/HooksUseReducer/HooksUseReducer";

import {
    HooksUseCallbackTrue,
    HooksUseCallbackFalse,
} from "@/components/ReactHooks/HooksUseCallback/HooksUseCallback";

import {
    HooksUseRefTrue,
    HooksUseRefFalse,
    HooksUseRefFocus,
} from "@/components/ReactHooks/HooksUseRef/HooksUseRef";

export function Home() {
    return (
        <>
            <div className={styles.fv}>
                <div className={styles.fv__inner}>
                    <h1 className={styles.title}>石サイト</h1>
                    <Link className={styles.link} href="/products/">
                        商品一覧へ
                    </Link>
                    <HooksUseMemoTrue />
                    <HooksUseMemoFalse />
                    <HooksUseStateTrue />
                    <HooksUseStateFalse />
                    <HooksUseEffectFalse />
                    <HooksUseEffectFirstRender />
                    <HooksUseEffectDependentArray />
                    <HooksUseEffectTimerComponent />
                    <HooksUseEffectResizeComponent />
                    <HooksUseContext />
                    <HooksUseReducer />
                    <HooksUseReducerMultiple />
                    <HooksUseReducerAPI />
                    <HooksUseCallbackTrue />
                    <HooksUseCallbackFalse />
                    <HooksUseRefTrue />
                    <HooksUseRefFalse />
                    <HooksUseRefFocus />
                </div>
            </div>
        </>
    );
}
