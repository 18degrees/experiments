'use client'

import { useAppSelector, useAppDispatch } from './redux/hooks'
import { increment, nullify } from "./redux/indexSlice"
import style from "./page.module.scss"

export default function Home() {
    const technologies = ['next', 'sass', 'redux']

    const index = useAppSelector(state => state.index.value)
    const dispatch = useAppDispatch()

    return (
        <div className={style.container}>
            <div>
                <p>The page was build with</p>
                <p className={style.techname}>{technologies[index]}</p>
                <button onClick={() => index === technologies.length - 1 ? dispatch(nullify()) : dispatch(increment())}>next tech</button>
            </div>
            <p>There is nothing more here.</p>
            <p>The page is meant to try new libraries and show the&nbsp;result. Given&nbsp;technologies (exept&nbsp;next) are new for me, so there is no big project where I&apos;ve used them yet.</p>
        </div>
    )
}
